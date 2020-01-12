namespace net_react_postgres.Utils
{
    public interface IResponseParser<out T> where T : class
    {
        T Parse(string data);
    }
}