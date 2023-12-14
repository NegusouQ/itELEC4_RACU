using Microsoft.EntityFrameworkCore;
using racu.api.DataContext;
using racu.api.Entities;

namespace racu.api.Services
{
    public class UserService : IUserService
    {
        private readonly AppDbContext db;

        public UserService(AppDbContext db)
        {
            this.db = db;
        }

        public async Task<User?> Login(string username, string password)
            => await db.Users.Where(d => d.UserName.Equals(username) 
                && d.Password.Equals(password)).FirstOrDefaultAsync();

        public async Task<User?> Register(User user)
        {
            try
            {
                await db.Users.AddAsync(user);
                await this.SaveChanges();
                return user;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<User?> GetById(Guid id)
            => await db.Users.Where(d => d.Id.Equals(id))
                .Include(d => d.Items)
                .FirstOrDefaultAsync();

        public async Task<User?> Update(User user)
        {
            try
            {
                var existing = await GetById(user.Id);

                if (existing == null)
                    throw new NullReferenceException();

                existing.UserName = user.UserName;
                existing.Password = user.Password;
                existing.Name = user.Name;
                existing.Avatar = user.Avatar;

                db.Users.Update(existing);
                await this.SaveChanges();
                return user;
            }
            catch (Exception)
            {
                return null;
            }
        }

        private async Task SaveChanges()
            => await db.SaveChangesAsync();
    }
}
