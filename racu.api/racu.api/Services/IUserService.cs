using racu.api.Entities;

namespace racu.api.Services
{
    public interface IUserService
    {
        public Task<User?> Register(User user);
        public Task<User?> Login(string username, string password);
        public Task<User?> GetById(Guid id);
        public Task<User?> Update(User user);

    }
}
