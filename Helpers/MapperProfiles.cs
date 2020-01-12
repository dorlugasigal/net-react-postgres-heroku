using AutoMapper;
using net_react_postgres.Response;

namespace net_react_postgres.Helpers
{
    public class MapperProfiles : Profile
    {
        public MapperProfiles()
        {
            CreateMap<SearchResponse<ITunesItem>, PagedSearchResponse<ITunesItem>>()
                .ForMember(dest =>
                        dest.Results,
                    opt => opt.MapFrom(src => PagedList<ITunesItem>.Create(src.Results, 1, 200)));

        }
    }
}