using System.Threading.Tasks;
using net_react_postgres.Response;

namespace net_react_postgres.Services
{
    /// <summary>
    /// Interface for the Searching Service
    /// Provides Async Search Functionality 
    /// </summary>
    /// <typeparam name="T">ITunesItem</typeparam>
    public interface ISearchService<T> where T : class
    {
        Task<PagedSearchResponse<T>> SearchAsync(PagedSearchParams searchParam);
    }
}