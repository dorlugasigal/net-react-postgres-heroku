using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using net_react_postgres.Response;
using net_react_postgres.Services;

namespace net_react_postgres.Controllers
{
    /// <summary>
    /// Main Controller, Used for retrieving items from Itunes Web API
    /// </summary>
    [ResponseCache(CacheProfileName = "Default100")]
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly ILogger<SearchController> _log;
        private readonly ISearchService<ITunesItem> _searchService;

        public SearchController(ILogger<SearchController> log, ISearchService<ITunesItem> searchService)
        {
            _log = log;
            _searchService = searchService;
        }

        /// <summary>
        /// Searching a term within the ItunesAPI
        /// </summary>
        /// <param name="searchParam"> optionally add paging information, by default is page 1 and page size 25 </param>
        /// <returns> Data from ITunes API </returns>
        [HttpGet]
        public async Task<PagedSearchResponse<ITunesItem>> Search([FromQuery]PagedSearchParams searchParam)
        {
            try
            {
                var search = await _searchService.SearchAsync(searchParam);

                _log.LogInformation($"returned {search.Results.Count} results on page {search.CurrentPage}/{search.TotalPages}, page size: {search.PageSize}, from a total results of {search.TotalCount}");

                return search;
            }
            catch (Exception ex)
            {
                _log.LogError(ex, "An error occurred while performing search..");

                return new PagedSearchResponse<ITunesItem>
                {
                    Success = false,
                    ErrorMessage = "An internal server error occurred."
                };
            }
        }

    }
}