namespace net_react_postgres.Response
{
    /// <summary>
    /// Base Response
    /// </summary>
    public class Response
    {
        public bool Success { get; set; }
        public string ErrorMessage { get; set; }
    }
}