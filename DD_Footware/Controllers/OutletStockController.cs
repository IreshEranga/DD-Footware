using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using DD_Footware.Models;

namespace DD_Footware.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OutletStockController : ControllerBase
    {
        private readonly DDContext _context;

        public OutletStockController(DDContext context)
        {
            _context = context;
        }

        // GET: api/OutletStock
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OutletStock>>> GetOutletStock()
        {
            return await _context.OutletStocks.ToListAsync();
        }

        // PUT: api/OutletStock/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStock(int id, [FromBody] UpdateStockRequest request)
        {
            var outletStock = await _context.OutletStocks.FindAsync(id);

            if (outletStock == null)
            {
                return NotFound(new { message = "Stock record not found." });
            }

            outletStock.StockLevel = request.NewStockLevel;

            await _context.SaveChangesAsync();

            return Ok(new { message = "Stock updated successfully." });
        }
    }

    public class UpdateStockRequest
    {
        public int NewStockLevel { get; set; }
    }
}
