import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OutletAdminNavBar from '../../components/OutletAdminNavBar';

const OutletAdminHome = () => {
  const [outletStocks, setOutletStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOutletStocks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/OutletStock');
        setOutletStocks(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOutletStocks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching outlet stock: {error}</div>;
  }

  return (
    <div>
      <OutletAdminNavBar />
      <div className="container">
        <h2>Outlet Stock</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Outlet ID</th>
              <th>Product ID</th>
              <th>Stock Level</th>
            </tr>
          </thead>
          <tbody>
            {outletStocks.map(stock => (
              <tr key={stock.outletStockID}>
                <td>{stock.outletStockID}</td>
                <td>{stock.outletID}</td>
                <td>{stock.productID}</td>
                <td>{stock.stockLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OutletAdminHome;
