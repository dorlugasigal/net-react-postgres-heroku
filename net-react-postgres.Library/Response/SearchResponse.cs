using System.Collections.Generic;

namespace net_react_postgres.Library.Response
{

    public class SearchResponse<T> : Response where T : class
    {
        public int ResultCount { get; set; }
        public List<T> Results { get; set; }
    }
}
