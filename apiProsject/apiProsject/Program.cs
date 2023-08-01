using apiProsject.Character;
using System.ComponentModel;
using System.Xml.Linq;
using Newtonsoft.Json;
using System.IO;
using System.Text;
using apiProsject.utils;
using System.Collections.Generic;

var builder = WebApplication.CreateBuilder(args);

string MyAllowAnyOrigin = "_myAllowAnyOrigin";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowAnyOrigin,
        builder =>
        {
            builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
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
app.MapPut("/doMove", async context =>
{
    using (StreamReader reader = new StreamReader(context.Request.Body, Encoding.UTF8))
    {
        string requestBody = await reader.ReadToEndAsync();
        dynamic payload = JsonConvert.DeserializeObject(requestBody);

        string primedMove = payload.primedMove;
        Guid currentHeroTurnId = payload.currentHeroTurnId;
        Guid enemyId = payload.enemyId;
        Hero hero = inMemoryDb2.SingleOrDefault(e => e.Id == currentHeroTurnId);
        Enemy enemy = inMemoryDb.SingleOrDefault(e => e.Id == enemyId);

        utils.DoPlayerMove(hero, enemy, primedMove);

        var response = new
        {
            Message = "Move executed successfully",
            Move = primedMove,
            HeroTurnId = currentHeroTurnId,
            EnemyId = enemyId
        };

        // Convert the response object to JSON
        string jsonResponse = JsonConvert.SerializeObject(response);

        // Set the response headers and content
        context.Response.StatusCode = StatusCodes.Status200OK;
        context.Response.ContentType = "application/json";
        await context.Response.WriteAsync(jsonResponse);
    }
});

app.UseCors(MyAllowAnyOrigin);
app.Run();
