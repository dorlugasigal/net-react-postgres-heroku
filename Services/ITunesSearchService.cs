using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.Extensions.Logging;
using net_react_postgres.Helpers;
using net_react_postgres.Response;
using Newtonsoft.Json;

namespace net_react_postgres.Services
{
    /// <summary>
    /// Main Logic Service that Fetch data from ITunes API
    /// </summary>
    public class ITunesSearchService : ISearchService<ITunesItem>
    {
        private const string BaseUrl = "https://itunes.apple.com";
        private readonly ILogger<ITunesSearchService> _log;
        private readonly HttpClient _client;
        private readonly IMapper _mapper;

        public ITunesSearchService(ILogger<ITunesSearchService> log, HttpClient client, IMapper mapper)
        {
            _log = log;
            _client = client;
            _mapper = mapper;
        }

        /// <summary>
        /// Parse a result from a ITunes API Model to a paging model
        /// to allow paging and fast Retrieval 
        /// </summary>
        /// <param name="response">should be response from ITunes API</param>
        /// <param name="searchParam"> would supply the paging meta data</param>
        /// <returns> a final Paged Search Response item</returns>
        public PagedSearchResponse<ITunesItem> MapResponseToPaged(SearchResponse<ITunesItem> response, PagedSearchParams searchParam)
        {
            var res = _mapper.Map<PagedSearchResponse<ITunesItem>>(response);
            res.Results = PagedList<ITunesItem>.Create(response.Results, searchParam.PageNumber, searchParam.PageSize);
            res.TotalCount = response.Results.Count;
            res.PageSize = searchParam.PageSize;
            res.CurrentPage = searchParam.PageNumber;
            res.TotalPages = (int)Math.Ceiling(res.TotalCount / (double)res.PageSize);
            return res;
        }

        /// <summary>
        /// Build a query to ITunes API,
        /// Parse The result and add paging logic
        /// </summary>
        /// <param name="searchParam"> meta data for the search, such as term and page number</param>
        /// <returns>Search Results with paging</returns>
        public async Task<PagedSearchResponse<ITunesItem>> SearchAsync(PagedSearchParams searchParam)
        {
            try
            {
                var url = new TunesUrlBuilder(BaseUrl)
                    .AddEndpoint("Search")
                    .AddOutput(searchParam.Output)
                    .AddMedia(searchParam.Media)
                    .AddResultEntity(searchParam.ResultEntity)
                    .AddLimit(searchParam.Limit)
                    .AddTerm(searchParam.Term)
                    .GetUrl();

                var httpResponse = await _client.GetAsync(url);

                //Itunes API error (probably wrong type sent)
                if (!httpResponse.IsSuccessStatusCode)
                {
                    return new PagedSearchResponse<ITunesItem>()
                    {
                        ErrorMessage = "An Error Occured when trying to fetch data",
                        ResultCount = 0,
                        Success = false,
                        Results = PagedList<ITunesItem>.Create(new ITunesItem[0], 0, 0)
                    };
                }

                var content = await httpResponse.Content.ReadAsStringAsync();
                var response = JsonConvert.DeserializeObject<SearchResponse<ITunesItem>>(content);
                response.Success = true;

                var res = MapResponseToPaged(response, searchParam);
                return res;
            }
            catch (Exception e)
            {
                _log.LogError(e, $"Internal Error when Searching for an item : {searchParam.Term}");
                return new PagedSearchResponse<ITunesItem>()
                {
                    ErrorMessage = $"A Server Error Occured when trying to SearchAsync Item : {searchParam.Term}",
                    ResultCount = 0,
                    Success = false,
                    Results = PagedList<ITunesItem>.Create(new ITunesItem[0], 0, 0)
                };
            }
        }
    }
}