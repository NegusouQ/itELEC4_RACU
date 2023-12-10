using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace racu.api.Entities
{
    public class User : BaseEntity
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        [MaxLength(25)]
        public string Name { get; set; }
        public int Avatar { get; set; }
        public Collection<Item> Items { get; set; }
    }
}
