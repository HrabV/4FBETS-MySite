namespace FourBets.Models;

public class Group
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public GroupType Type { get; set; }
    public DateTime Start { get; set; }
    public DateTime End { get; set; }
    public List<User> Users { get; set; }
    public List<Bet> Bets { get; set; }
}