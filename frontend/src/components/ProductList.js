// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import NavBar from './NavBar';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { Container, Row, Col } from 'react-bootstrap';

// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5000/api/products')  // Replace with your backend URL if hosted remotely
//             .then(response => {
//                 setProducts(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the products!', error);
//             });
//     }, []);

//     return (
//         <div>
//             <NavBar />
//             <Container>
                
//                 <Row>
//                     {products.map(product => (
//                         <Col md={3} sm={6} key={product.productID} className="mb-4">
//                             <Card>
//                                 <Card.Img variant="top" src={product.imageURL || 'https://via.placeholder.com/100x100'} />
//                                 <Card.Body>
//                                     <Card.Title>{product.name}</Card.Title>
//                                     <Card.Text>
//                                         Stock Level: {product.stockLevel}<br />
//                                         Price: ${product.price}
//                                     </Card.Text>
//                                     <Button variant="primary">Buy Now</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default ProductList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')  // Replace with your backend URL if hosted remotely
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    // Filter products based on the search input
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <NavBar />
            <Container>
                <center>
                <Form.Control
                    type="text"
                    placeholder="Search by product name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mb-4"
                    style={{width:'35%', borderRadius:'30px', borderColor:'black', padding:'10px'}}
                />
                </center>
                <Row>
                    {filteredProducts.map(product => (
                        <Col md={3} sm={6} key={product.productID} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={product.imageURL || 'https://via.placeholder.com/100x100'} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        Stock Level: {product.stockLevel}<br />
                                        Price: ${product.price}
                                    </Card.Text>
                                    <Button variant="primary">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductList;
