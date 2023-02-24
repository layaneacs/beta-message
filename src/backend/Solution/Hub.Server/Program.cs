using ServerHub.Hubs;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();

var app = builder.Build();

app.MapHub<UserHub>("/group-hub");

app.Run();

