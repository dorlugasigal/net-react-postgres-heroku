using System.Collections.Generic;

namespace net_react_postgres.Response
{
    /// <summary>
    /// If Not Paged Response, the response would look like this
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class SearchResponse<T> : Response where T : class
    {
        public int ResultCount { get; set; }
        public List<T> Results { get; set; }


    }
}
