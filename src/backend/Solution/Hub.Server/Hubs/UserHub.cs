using Microsoft.AspNetCore.SignalR;

namespace ServerHub.Hubs
{
    public class UserHub : Hub
    {
        public async Task PublishUserMessage(string user, string message)
        {
            await Clients.User(user).SendAsync("Received", message);
        }
    }
}
