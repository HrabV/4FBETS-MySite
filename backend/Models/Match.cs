namespace FourBets.Models;

public class Match
{
    public Guid Id { get; set; }
    public Team Home { get; set; }
    public Team Guest { get; set; }
    public Result Result { get; set; }
    public Team Winner { get; set; }
}