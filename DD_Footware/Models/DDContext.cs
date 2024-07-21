using Microsoft.EntityFrameworkCore;

namespace DD_Footware.Models
{
    public class DDContext : DbContext
    {
        public DDContext(DbContextOptions<DDContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Outlet> Outlets { get; set; }
        public DbSet<OutletStock> OutletStocks { get; set; }
    }

    public class User
    {
        public int UserID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string Outlet { get; set; }
    }

    public class Product
    {
        public int ProductID { get; set; }
        public string Name { get; set; }
        public int StockLevel { get; set; }
        public decimal Price { get; set; }
    }

    public class Order
    {
        public int OrderID { get; set; }
        public int ProductID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string Address { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public string Status { get; set; }
    }

    public class Outlet
    {
        public int OutletID { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
    }

    public class OutletStock
    {
        public int OutletStockID { get; set; }
        public int OutletID { get; set; }
        public int ProductID { get; set; }
        public int StockLevel { get; set; }
    }
}
