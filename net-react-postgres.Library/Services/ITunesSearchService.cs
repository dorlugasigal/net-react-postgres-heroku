using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using net_react_postgres.Library.Response;
using Newtonsoft.Json;

namespace net_react_postgres.Library.Services
{
    public class ITunesSearchService : ISearchService<ITunesItem>
    {
        private const string BaseUrl = "https://itunes.apple.com";
        private readonly ILogger<ITunesSearchService> _log;
        private readonly HttpClient _client;

        public ITunesSearchService(ILogger<ITunesSearchService> log, HttpClient client)
        {
            _log = log;
            _client = client;
        }

        public async Task<SearchResponse<ITunesItem>> SearchAsync(SearchParams searchParam)
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

                if (!httpResponse.IsSuccessStatusCode)
                {
                    return new SearchResponse<ITunesItem>()
                    {
                        ErrorMessage = "An Error Occured when trying to fetch data",
                        ResultCount = 0,
                        Success = false,
                        Results = new List<ITunesItem>()
                    };
                }

                var content = await httpResponse.Content.ReadAsStringAsync();
                var response = JsonConvert.DeserializeObject<SearchResponse<ITunesItem>>(content);
                response.Success = true;
                return response;
            }
            catch (Exception e)
            {
                _log.LogError(e, $"Internal Error when Searching for an item : {searchParam.Term}");
                return new SearchResponse<ITunesItem>()
                {
                    ErrorMessage = $"A Server Error Occured when trying to SearchAsync Item : {searchParam.Term}",
                    ResultCount = 0,
                    Success = false,
                    Results = new List<ITunesItem>()
                };
            }
        }
    }
}