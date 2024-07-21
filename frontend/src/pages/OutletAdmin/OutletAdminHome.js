// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import OutletAdminNavBar from '../../components/OutletAdminNavBar';

// const OutletAdminHome = () => {
//   const [outletStocks, setOutletStocks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchOutletStocks = async () => {
//       try {
//         // Retrieve user details from local storage
//         const user = JSON.parse(localStorage.getItem('user'));
//         setUser(user);

//         if (!user) {
//           throw new Error('User not found in local storage');
//         }

//         // Fetch outlet stocks based on user details
//         const response = await axios.get(`http://localhost:5000/api/OutletStock`);
//         setOutletStocks(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchOutletStocks();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error fetching outlet stock: {error}</div>;
//   }

//   return (
//     <div>
//       <OutletAdminNavBar />
//       <div className="container">
//         <h2>Outlet Stock</h2>
//         {user && (
//           <div>
//             <h3>Welcome, {user.name}</h3>
//             <p>Outlet: {user.outlet}</p>
//             <p>Outlet: {user.outletID}</p>
//           </div>
//         )}
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Outlet ID</th>
//               <th>Product ID</th>
//               <th>Stock Level</th>
//             </tr>
//           </thead>
//           <tbody>
//             {outletStocks.map(stock => (
//               <tr key={stock.outletStockID}>
//                 <td>{stock.outletStockID}</td>
//                 <td>{stock.outletID}</td>
//                 <td>{stock.productID}</td>
//                 <td>{stock.stockLevel}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OutletAdminHome;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OutletAdminNavBar from '../../components/OutletAdminNavBar';

const OutletAdminHome = () => {
  const [outletStocks, setOutletStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchOutletStocks = async () => {
      try {
        // Retrieve user details from local storage
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);

        if (!user) {
          throw new Error('User not found in local storage');
        }

        // Fetch all outlet stocks
        const response = await axios.get('http://localhost:5000/api/OutletStock');
        // Filter outlet stocks based on user.outletID
        const filteredStocks = response.data.filter(stock => stock.outletID === user.outletID);
        setOutletStocks(filteredStocks);
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
        {user && (
          <div>
            <h3>Welcome, {user.name}</h3>
            <p>Outlet: {user.outlet}</p>
            <p>Outlet ID: {user.outletID}</p>
          </div>
        )}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              {/* <th>Outlet ID</th> */}
              <th>Product ID</th>
              <th>Stock Level</th>
            </tr>
          </thead>
          <tbody>
            {outletStocks.map(stock => (
              <tr key={stock.outletStockID}>
                <td>{stock.outletStockID}</td>
                {/* <td>{stock.outletID}</td> */}
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
