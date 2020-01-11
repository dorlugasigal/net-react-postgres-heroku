using Microsoft.EntityFrameworkCore;
using net_react_postgres.Postgres.Models;

namespace net_react_postgres.Postgres
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
    }

}