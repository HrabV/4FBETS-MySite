using Microsoft.EntityFrameworkCore;
using FourBets.Models;

namespace FourBets.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<UserRole>(e => e.HasData(new UserRole[] {
          new UserRole
        {
            Id = Guid.Parse("9e3d2d63-3669-4897-8f57-c98e5df0123f"),
            Name = "user"
        },
            new UserRole {
                Id= Guid.Parse("7075299d-1baa-477f-89e9-21e1e6216d7b"),
                Name="admin"
            }
        }));

        builder.Entity<User>(e =>
        {
            e.HasIndex(u => u.Email).IsUnique();
            e.HasData(new User[] {
                new User {
                    Id = Guid.NewGuid(),
                    Email="admin@gmail.com",
                    NickName="admin",
                    Password="$2a$12$7ewMFJGDzcrIxZ4zKPgIEOyP.acicPT/zokI8TglZw2rv6i1VWFSK",
                    RoleId = Guid.Parse("7075299d-1baa-477f-89e9-21e1e6216d7b")
                }
            });
        });


    }

    public DbSet<User> Users { get; set; }
    public DbSet<Group> Groups { get; set; }
    public DbSet<GroupType> GroupTypes { get; set; }
    public DbSet<Team> Teams { get; set; }
    public DbSet<Bet> Bets { get; set; }
    public DbSet<Result> Results { get; set; }
    public DbSet<UserRole> UserRoles { get; set; }
    public DbSet<News> News { get; set; }
    public DbSet<Match> Matchs { get; set; }
}