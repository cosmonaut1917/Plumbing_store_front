
import Card from 'react-bootstrap/Card';
import locations from '../locations.js';
function Locations(props) {
    const styles = {
        card: {
            width: '20rem',
            margin: '1rem',
            height: '18rem',
            // display: 'flex',
            // display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)" , 
            // gridGap: 20,
        },
        image: {
            height: '10rem',
            objectFit: 'fill',
            objectPosition: 'center',
            display: 'fixed',
        },
        text: {
            fontSize: '1rem',
            textAlign: 'left',
            display: 'flex',
        }
    }


    return (
        <>
            {locations.map(location => (
                <Card key={location.id} style={styles.card}>
                    <Card.Img variant="top" src={location.image} style={styles.image} />
                    <Card.Body style={styles.card}>
                        <Card.Title>{location.name}</Card.Title>
                        <Card.Text style={styles.text}>
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