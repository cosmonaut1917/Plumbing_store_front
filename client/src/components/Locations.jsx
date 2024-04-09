
import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Card from 'react-bootstrap/Card';
import locations from '../locations.js';

function MyComponent({ location }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD90yoVrmn3EJFnQWoeRKcmrCwdNCcRKTc"
    })

    const containerStyle = {
        width: '600px',
        height: '400px'
    };

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback() {
        setMap(null);
    }, []);

    return isLoaded ? (
        <div style={{ marginBottom: '20px' }}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                zoom={18}
                center={location.map}
                onLoad={onLoad}
                onUnmount={onUnmount}
            />
        </div>
    ) : <></>;
}

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
    };


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

                                <br />
                            </Card.Text>
                            <MyComponent location={location} /> {/* Pass location as a prop */}

                        </Card.Body>
                    </Card>
                </div>
            ))}
        </>
    );
}

export default Locations;