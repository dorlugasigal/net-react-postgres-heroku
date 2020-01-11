using System.Runtime.InteropServices.WindowsRuntime;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace net_react_postgres.Utils
{
    public class ResponseParser<T> :IResponseParser<T> where T : class
    {
        private readonly ILogger _logger;

        public ResponseParser(ILogger logger)
        {
            _logger = logger;
        }
        public T Parse(string data)
        {
            try
            {
                return string.IsNullOrEmpty(data) ? null : JsonConvert.DeserializeObject<T>(data);
            }
            catch (System.Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }
        }
    }

   
}