using Microsoft.EntityFrameworkCore;

namespace net_react_postgres.Postgres
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }
        //Bonus, not used
        //public DbSet<Users> Users { get; set; }
    }

}