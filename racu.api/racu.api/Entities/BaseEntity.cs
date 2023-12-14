using System.ComponentModel.DataAnnotations;

namespace racu.api.Entities
{
    public class BaseEntity
    {
        [Key, Required]
        public Guid Id { get; set; }
    }
}
