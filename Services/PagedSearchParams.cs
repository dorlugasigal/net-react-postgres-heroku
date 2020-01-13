namespace net_react_postgres.Services
{
    /// <summary>
    /// ADding Paging meta data to a request param
    /// </summary>
    public class PagedSearchParams : SearchParams
    {
        public int PageNumber { get; set; } = -1;
        public int PageSize { get; set; } = 25;
    }
}