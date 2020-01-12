using net_react_postgres.Helpers;

namespace net_react_postgres.Response
{
    public class PagedSearchResponse<T> : Response where T : class
    {
        public int ResultCount { get; set; }
        public PagedList<T> Results { get; set; }
        public int TotalPages { get; set; }
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }
        public bool HasPrevious => (CurrentPage > 1);
        public bool HasNext => (CurrentPage < TotalPages);

    }
}