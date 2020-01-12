using System.Threading.Tasks;
using net_react_postgres.Response;

namespace net_react_postgres.Services
{
    public interface ISearchService<T> where T : class
    {
        Task<SearchResponse<T>> SearchAsync(SearchParams searchParam);
    }
}