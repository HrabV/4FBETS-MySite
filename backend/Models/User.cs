namespace FourBets.Models;

public class User
{
    public Guid Id { get; set; }
    public string NickName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public uint Rating { get; set; }
    public string PhotoUrl { get; set; }
    public bool IsBlocked { get; set; }
    public UserRole Role { get; set; }
    public Guid RoleId { get; set; }
    public List<Team> FavouriteTeams { get; set; }
    public List<Match> HistoryOfMatchs { get; set; }
}