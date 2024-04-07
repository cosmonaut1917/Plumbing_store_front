import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function StoreGrid() {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    console.log(data);
    const productsData = data?.products || [];
    const handleAddCart = async (event) => {
        event.preventDefault();
        const productid = event.target.getAttribute('data-productid');
        console.log(productid);
       
    }
    return (
        <Container>
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
                                    <td><Button type = "button" data-productid = {productsData._id}onClick={handleAddCart}>Add to Cart</Button></td>
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