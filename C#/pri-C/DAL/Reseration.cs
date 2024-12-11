using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Reseration:DbContext
    {
        public Reseration(DbContextOptions<Reseration>options):base(options)
        {
        }

        public DbSet<Apartment> Apartemnts { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Rent> Rent { get; set; }
        public DbSet<Feedback> Feedback { get; set; }

    }
}
