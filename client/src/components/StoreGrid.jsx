import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery,useMutation } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import { ADD_TO_CART } from '../utils/mutations';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function StoreGrid() {
    const [cartItem, setCartItem] = useState([{ productid: '', quantity: 0, productname: '', price: 0 }]);

    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const [addToCart] = useMutation(ADD_TO_CART);
    console.log(data);
    const productsData = data?.products || [];
    const handleAddCart = async (event) => {
        event.preventDefault();
        const productid = event.target.getAttribute('data-productid');
        const productname = event.target.getAttribute('data-productname');
        const price = event.target.getAttribute('data-price');
        setCartItem([...cartItem, { productid: productid, quantity: 1, productname: productname, price: price }]);
        console.log(cartItem);

    }
    const handleCheckout = async (event) => {
        event.preventDefault();
        console.log(cartItem);
        try {
            const { data } = await addToCart({
                variables: { cartItem }
            });
            
            // Reset form data after successful submission
            console.log(data)
            setCartItem([{ productid: '', quantity: 0, productname: '', price: 0 }]);
        } catch (e) {
            console.error("Issue adding products to cart", e);
        
        }
    }
    return (
        <Container>
            <Button type='button' onClick={handleCheckout}>Checkout</Button>
            {productsData.map((productsData, index) => (
                <Row key={index}>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Image</th>
                                    <th>add to cart</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{productsData.productname}</td>
                                    <td>{productsData.description}</td>
                                    <td>{productsData.price}</td>
                                    <td>{productsData.stock}</td>
                                    <td><img src={productsData.image} alt={productsData.productname} /></td>
                                    <td><Button type="button" data-productid={productsData._id} data-productname={productsData.productname} data-price={productsData.price} onClick={handleAddCart}>Add to Cart</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            ))}
            <Row>
                <Col></Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
}

export default StoreGrid;