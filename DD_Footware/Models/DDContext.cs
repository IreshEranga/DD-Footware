using Microsoft.EntityFrameworkCore;

namespace DD_Footware.Models
{
    public class DDContext : DbContext
    {
        public DDContext(DbContextOptions<DDContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Outlet> Outlets { get; set; }
        public DbSet<OutletStock> OutletStocks { get; set; }
    }

    public class Product
    {
        public int ProductID { get; set; }
        public string Name { get; set; }
        public int StockLevel { get; set; }
        public decimal Price { get; set; }
        public string ImageURL { get; set; }
    }

    public class Order
    {
        public int OrderID { get; set; }
        public int ProductID { get; set; }
        public int Quantity { get; set; }
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
