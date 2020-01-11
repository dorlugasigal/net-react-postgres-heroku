using System.Threading.Tasks;
using net_react_postgres.Library.Response;

namespace net_react_postgres.Library.Services
{
    public interface ISearchService<T> where T : class
    {
        Task<SearchResponse<T>> SearchAsync(SearchParams searchParam);
    }
}