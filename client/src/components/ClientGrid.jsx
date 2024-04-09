import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from '@apollo/client';
import { QUERY_CLIENTS } from '../utils/queries';
import Table from 'react-bootstrap/Table';
function StoreGrid() {
    const { loading, data } = useQuery(QUERY_CLIENTS);
    console.log(data);
    const clientsData = data?.clients || [];
    return (
        <Container>
            {clientsData.map((clientsData, index) => (
                <Row key={index}>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th>Last Name</th>
                                    <th>Contact</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{clientsData.firstname}</td>
                                    <td>{clientsData.lastname}</td>
                                    <td>{clientsData.contact}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            ))}
            
        </Container>
    );
}

export default StoreGrid;