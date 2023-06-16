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
  new Goblin("Mork", 100, 100, 20, 3, 40)
};


app.MapGet("/index", () =>
{
    return inMemoryDb;
});


app.UseCors(MyAllowAnyOrigin);
app.Run();
