using racu.api.Entities;

namespace racu.api.Services
{
    public interface IItemService
    {
        public Task<IEnumerable<Item>> Get();
        public Task<Item?> Add(Item item);
        public Task<Item?> Update(Item item);
        public Task<Item?> Delete(Guid id);


    }
}
