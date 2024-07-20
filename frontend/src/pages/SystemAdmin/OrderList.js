import axios from 'axios';
import { useState, useEffect } from 'react';
import { Table, Button, Form, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SystemAdminSideBar from './SystemAdminSideBar';
import './SystemAdminSideBar.css';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        setLoading(true); // Start loading
        axios.get('http://localhost:5000/api/orders') // Use http instead of https
            .then(response => {
                setOrders(response.data);
                setLoading(false); // Stop loading
            })
            .catch(error => {
                console.error('There was an error fetching the orders!', error);
                setLoading(false); // Stop loading even if there's an error
                toast.error('Failed to fetch orders.');
            });
    };

    const handleApprove = (orderId) => {
        axios.put(`http://localhost:5000/api/orders/${orderId}/approve`)
            .then(response => {
                fetchOrders(); // Refresh the orders list
                toast.success('Order approved successfully!');
            })
            .catch(error => {
                console.error('There was an error approving the order!', error);
                toast.error('Failed to approve order.');
            });
    };

    const handleReject = (orderId) => {
        axios.put(`http://localhost:5000/api/orders/${orderId}/reject`)
            .then(response => {
                fetchOrders(); // Refresh the orders list
                toast.success('Order rejected successfully!');
            })
            .catch(error => {
                console.error('There was an error rejecting the order!', error);
                toast.error('Failed to reject order.');
            });
    };

    const filteredOrders = orders.filter(order =>
        order.orderID.toString().includes(search)
    );

    return (
        <Container style={{marginLeft:'250px'}}>
            <h1>Orders</h1>
            <SystemAdminSideBar/>
            <Form.Control
                type="text"
                placeholder="Search by Order ID"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4"
                style={{ width: '25%', borderRadius: '30px', borderColor: 'black', padding: '10px', marginLeft:'500px' }}
            />

            {loading ? (
                <p>Loading...</p>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Order ID</th>
                            <th>Product ID</th>
                            
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order.orderID}>
                                <td>{order.orderID}</td> 
                                <td>{order.productID}</td> 
                                <td>{order.productName}</td>
                                <td>{order.email}</td>
                                <td>{order.mobile}</td>
                                <td>{order.address}</td>
                                <td>${order.price}</td>
                                <td>{order.status}</td>
                                <td>
                                    {order.status === 'Pending' && (
                                        <>
                                            <Button
                                                variant="success"
                                                onClick={() => handleApprove(order.orderID)}
                                                className="me-2"
                                            >
                                                Approve
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() => handleReject(order.orderID)}
                                            >
                                                Reject
                                            </Button>
                                        </>
                                    )}
                                    {(order.status === 'Approved' || order.status === 'Rejected') && (
                                        <Button
                                            variant={order.status === 'Approved' ? 'success' : 'danger'}
                                            disabled
                                        >
                                            {order.status}
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default OrderList;
