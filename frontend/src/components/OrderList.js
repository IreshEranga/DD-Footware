// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const OrderList = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         axios.get('https://localhost:5000/api/orders')
//             .then(response => {
//                 setOrders(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the orders!', error);
//             });
//     }, []);

//     return (
//         <div>
//             <h2>Orders</h2>
//             <ul>
//                 {orders.map(order => (
//                     <li key={order.orderID}>
//                         <p>Order ID: {order.orderID} - Product ID: {order.productID} - Quantity: {order.quantity} - Status: {order.status}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default OrderList;
