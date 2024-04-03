

import Card from 'react-bootstrap/Card';

import locations from '../locations.js';
function Locations() {
    const styles = {
        container: {
            inline: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px 20px',
            margin: '1rem',
        },
        card: {
            // display: 'flex',
            width: '100%',
            // margin: '1rem',
            // height: '18rem',
        },
        image: {
            objectFit: 'fill',
            objectPosition: 'center',
            display: 'fixed',
        },
        text: {
            // display: 'flex',
            flexWrap: 'wrap',
            fontSize: '1rem',
            textAlign: 'left',
        }
    }


    return (
        <>
            {locations.map(location => (
                <div key={location.phone} style={styles.container}>
                    <Card key={location.phone} style={styles.card}>
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
                </div>
            ))}
        </>
    );
}

export default Locations;