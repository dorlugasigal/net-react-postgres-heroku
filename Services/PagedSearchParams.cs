namespace net_react_postgres.Services
{
    public class PagedSearchParams : SearchParams
    {
        public int PageNumber { get; set; } = -1;
        public int PageSize { get; set; } = 25;
    }
}