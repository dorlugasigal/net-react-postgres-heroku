namespace net_react_postgres.Services
{
    public class SearchParams
    {
        public string Term { get; set; }
        public Output Output { get; set; } = Output.Json;
        public Media Media { get; set; } = Media.All;
        public ResultEntity ResultEntity { get; set; } = ResultEntity.All;
        public int Limit { get; set; } = 25;
    }
}