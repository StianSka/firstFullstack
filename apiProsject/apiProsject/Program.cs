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
            builder.AllowAnyOrigin();
        });
});

var app = builder.Build();


var inMemoryDb = new List<Enemy>
{
    Goblin.MakeRandomGoblin(),
    Goblin.MakeRandomGoblin(),
    Goblin.MakeRandomGoblin()
};

app.MapGet("/object", () =>
{

    return Goblin.MakeRandomGoblin();
});

app.MapGet("/index", () =>
{
    return inMemoryDb;
});


app.UseCors(MyAllowAnyOrigin);
app.Run();
