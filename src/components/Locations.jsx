import React from 'react'; // Import React
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import locations from '../locations.js';
function Locations(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/src/assets/images/{{}}'/>
            <Card.Body>
                <Card.Title>{locations.name}</Card.Title> {/* Access title from props */}
                <Card.Text>
                    {locations.size} {/* Access size from props */}
                    {locations.address} {/* Access address from props */}
                    {locations.phone} {/* Access phone from props */}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default Locations;