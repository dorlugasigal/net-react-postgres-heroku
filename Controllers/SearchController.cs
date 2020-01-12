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

        [HttpGet]
        public async Task<SearchResponse<ITunesItem>> Search([FromQuery]SearchParams searchParam)
        {
            try
            {
                var search = await _searchService.SearchAsync(searchParam);
                return search;
            }
            catch (Exception ex)
            {
                _log.LogError(ex, "An error occurred while performing search..");

                return new SearchResponse<ITunesItem>
                {
                    Success = false,
                    ErrorMessage = "An internal server error occurred."
                };
            }
        }

    }
}