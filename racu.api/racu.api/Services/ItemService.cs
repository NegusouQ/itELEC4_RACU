using Microsoft.EntityFrameworkCore;
using racu.api.DataContext;
using racu.api.Entities;

namespace racu.api.Services
{
    public class ItemService : IItemService
    {
        private readonly AppDbContext db;

        public ItemService(AppDbContext db)
        {
            this.db = db;
        }

        public async Task<IEnumerable<Item>> Get()
            => await db.Items
                .Include(d => d.User)
                .ToListAsync();

        public async Task<Item?> GetById(Guid id)
            => await db.Items.Where(d => d.Id.Equals(id))
               .FirstOrDefaultAsync();

        public async Task<Item?> Add(Item item)
        {
            try
            {
                await db.Items.AddAsync(item);
                await db.SaveChangesAsync();
                return item;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<Item?> Update(Item item)
        {
            try
            {
                var existing = await GetById(item.Id);

                if (existing == null)
                    throw new NullReferenceException();

                existing.Title = item.Title;
                existing.UserId = item.UserId;
                existing.Description = item.Description;
                existing.Image = item.Image;

                db.Items.Update(existing);
                await db.SaveChangesAsync();
                return item;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<Item?> Delete(Guid id)
        {
            try
            {
                var existing = await GetById(id);

                if (existing == null)
                    throw new NullReferenceException();

                db.Items.Remove(existing);
                await db.SaveChangesAsync();
                return existing;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task SaveChanges()
            => await db.SaveChangesAsync();
    }
}
