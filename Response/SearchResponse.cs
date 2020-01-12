using System.Collections.Generic;

namespace net_react_postgres.Response
{

    public class SearchResponse<T> : Response where T : class
    {
        public int ResultCount { get; set; }
        public List<T> Results { get; set; }
    }
}
