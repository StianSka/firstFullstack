using apiProsject.Character;
using System.ComponentModel;
using System.Xml.Linq;


var builder = WebApplication.CreateBuilder(args);

string MyAllowAnyOrigin = "_myAllowAnyOrigin";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowAnyOrigin,
        builder =>
        {
            builder.AllowAnyOrigin()
            .AllowAnyMethod();
        });
});

var app = builder.Build();


var inMemoryDb = new List<Enemy>{ }; 
var inMemoryDb2 = new List<Hero> { };


app.MapGet("/enemys", () =>
{
    while (inMemoryDb.Count < 7)
    {
        inMemoryDb.Add(Goblin.MakeRandomGoblin());
    }
    return inMemoryDb;
});
app.MapGet("/hero", () =>
{
   while (inMemoryDb2.Count < 3)
   {
      inMemoryDb2.Add(Crusader.MakeRandomCrusader()); 
   }
   return inMemoryDb2;
});

app.MapPut("/doHealing/{id}", (Guid id) =>
{
    Hero target = inMemoryDb2.SingleOrDefault(e => e.Id == id);
    bool result = target.DrinkPotion();
    return result;
});

app.UseCors(MyAllowAnyOrigin);
app.Run();
