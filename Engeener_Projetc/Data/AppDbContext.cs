using Engeener_Projetc.Models;
using Microsoft.EntityFrameworkCore;

namespace Engeener_Projetc.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }        
    }   
}