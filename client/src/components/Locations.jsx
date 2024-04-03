import React from 'react'; // Import React
import { Card, Button} from 'react-bootstrap';
import locations from '../locations.js';
function Locations(props) {
   

    return (
        <>
        {locations.map(location => (
            <Card key={location.id} style={{ width: '20em',height: '18em' }}>
                <Card.Img variant="top" src={location.image}  />
                <Card.Body>
                    <Card.Title>{location.name}</Card.Title>
                    <Card.Text>
                        Phone: {location.phone}
                        <br />
                       Address: {location.address}
                       <br />
                          Hours: {location.hours}
                    </Card.Text>
                </Card.Body>
            </Card>
        ))}
    </>
);
}

export default Locations;