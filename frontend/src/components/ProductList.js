import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form, Modal, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

// // Import local images
// const importAll = (r) => {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// };

// const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));


// Import local images
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { 
        images[item.replace('./', '')] = r(item); 
    });
    return images;
};

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: ''
    });
    const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    const handleBuyNowClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const orderData = {
            productID: selectedProduct.productID,
            productName: selectedProduct.name,
            price: selectedProduct.price,
            status: "Pending",
            ...formData
        };

        axios.post('http://localhost:5000/api/orders', orderData)
            .then(_response => {
                toast.success("Order Submitted Successfully !!");
                setShowModal(false);
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    address: ''
                });
            })
            .catch(error => {
                console.error('There was an error submitting the order!', error);
                toast.error("Failed to submit Order");
            });
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <NavBar />
            <Container>
                {alert.show && (
                    <Alert variant={alert.variant} onClose={() => setAlert({ show: false, message: '', variant: '' })} dismissible>
                        {alert.message}
                    </Alert>
                )}
                <center>
                    <Form.Control
                        type="text"
                        placeholder="Search by product name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="mb-4"
                        style={{ width: '35%', borderRadius: '30px', borderColor: 'black', padding: '10px' }}
                    />
                </center>
                <Row>
                    {filteredProducts.map(product => (
                        <Col md={3} sm={6} key={product.productID} className="mb-4">
                            <Card>
                                <Card.Img 
                                    variant="top" 
                                    src={images[`${product.name}.png`] || 'https://via.placeholder.com/100x100'} 
                                    alt={product.name} 
                                    style={{width:'305px', height:'305px'}}
                                />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        Stock Count: {product.stockLevel}<br />
                                        Price: ${product.price}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleBuyNowClick(product)}>Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {selectedProduct && (
                <Modal show={showModal} onHide={() => setShowModal(false)} style={{ padding: '10px' }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Order Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formMobile">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formProduct">
                                <Form.Label>Product</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedProduct.name}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="formPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={`$${selectedProduct.price}`}
                                    readOnly
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default ProductList;
