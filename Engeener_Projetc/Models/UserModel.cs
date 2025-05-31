using System.ComponentModel.DataAnnotations.Schema;


namespace Engeener_Projetc.Models
{   
    [Table("tb_user")]
    public class User
    {   
        [Column("id")]
        public required int Id { get; set; }
        [Column("name")]
        public required string UserName { get; set; }
        [Column("password")]
        public required string PasswordHash { get; set; }
    }
}