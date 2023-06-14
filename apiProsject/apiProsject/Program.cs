
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


var inMemoryDb = new List<string>
{
    "lunsj","11.30-12.15",
    "jobbe med prosjekt","12.15-14.30"
};

app.MapGet("/index", () =>
{
    return inMemoryDb;
});


app.UseCors(MyAllowAnyOrigin);
app.Run();
