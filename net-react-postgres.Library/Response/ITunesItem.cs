namespace net_react_postgres.Library.Response
{
    public class ITunesItem
    {
        public string WrapperType { get; set; }
        public string Kind { get; set; }
        public long ArtistId { get; set; }
        public long CollectionId { get; set; }
        public long TrackId { get; set; }
        public string ArtistName { get; set; }
        public string CollectionName { get; set; }
        public string TrackName { get; set; }
        public string CollectionCensoredName { get; set; }
        public string TrackCensoredName { get; set; }
        public string ArtistViewUrl { get; set; }
        public string CollectionViewUrl { get; set; }
        public string TrackViewUrl { get; set; }
        public string PreviewUrl { get; set; }
        public string ArtworkUrl60 { get; set; }
        public string ArtworkUrl100 { get; set; }
        public decimal CollectionPrice { get; set; }
        public decimal TrackPrice { get; set; }
        public string CollectionExplicitness { get; set; }
        public string TrackExplicitness { get; set; }
        public int DiscCount { get; set; }
        public int DiscNumber { get; set; }
        public int TrackCount { get; set; }
        public int TrackNumber { get; set; }
        public long TrackTimeMillis { get; set; }
        public string Country { get; set; }
        public string Currency { get; set; }
        public string PrimaryGenreName { get; set; }

    }
}