using System;
using System.IO;
using System.Linq;
using System.Text;

namespace net_react_postgres.Services
{
    public class TunesUrlBuilder
    {
        private StringBuilder _url;
        private int _paramAmount;
        public TunesUrlBuilder(string url)
        {
            _url = new StringBuilder(url);
            _paramAmount = 0;
        }

        private void AddPrefix()
        {
            _url.Append(_paramAmount == 0 ? "?" : "&");
        }
        public TunesUrlBuilder AddOutput(Output output)
        {
            AddPrefix();
            _url.Append($"output=" + output.ToString().ToLower());
            _paramAmount++;
            return this;
        }
        //http://search?
        public TunesUrlBuilder AddMedia(Media media)
        {
            AddPrefix();
            _url.Append($"media=" + media.ToString().ToLower());
            _paramAmount++;
            return this;
        }
        public TunesUrlBuilder AddResultEntity(ResultEntity resultEntity)
        {
            AddPrefix();
            _url.Append($"resultEntity=" + resultEntity.ToString().ToLower());
            _paramAmount++;
            return this;
        }

        public TunesUrlBuilder AddLimit(int amount)
        {
            AddPrefix();
            _url.Append($"limit=" + amount);
            _paramAmount++;
            return this;
        }
        public TunesUrlBuilder AddTerm(string term)
        {
            AddPrefix();
            _url.Append($"term=" + term);
            _paramAmount++;
            return this;
        }

        public TunesUrlBuilder AddEndpoint(string endpoint)
        {
            var urls = _url.ToString().Split('?');
            var sb = new StringBuilder(Combine(urls[0], endpoint.ToLower()));
            if (urls.Length == 2)
            {
                sb.Append($"?{urls[1]}");
            }
            _url = sb;
            return this;
        }

        public string GetUrl()
        {
            return _url.ToString();
        }
        public static string Combine(string uri1, string uri2)
        {
            uri1 = uri1.TrimEnd('/');
            uri2 = uri2.TrimStart('/');
            return $"{uri1}/{uri2}";
        }
    }
}