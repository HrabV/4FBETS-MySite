namespace FourBets.Models;

public class Bet
{
    public Guid Id { get; set; }
    public uint BetHomeGoal { get; set; }
    public uint BetGuestGoal { get; set; }
    public User User { get; set; }
}