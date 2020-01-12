using System;

namespace net_react_postgres.Entities
{
    public abstract class BaseItunesItemModel
    {
        public Guid Id { get; set; }
        public DateTime DateOfCreation { get; set; }

        protected BaseItunesItemModel()
        {
            Id = Guid.NewGuid();
            DateOfCreation = DateTime.Now;
        }
    }
}