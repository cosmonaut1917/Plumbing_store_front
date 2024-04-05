import '../styles/style.css';
import React from 'react';
import App from "../App";
import Inventory from "../components/Inventory.jsx";
import InventoryImage from "../components/ExampleCarouselImage.jsx";
const styles = {
    card: {
        margin: 20,
        background: '#e8eaf6',
    },
    heading: {
        background: '#3f51b5',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 20px',
    },
    content: {
        padding: 20,
    },
};


function Store() {
    return (
        <div style={styles.card}>
            <h1 style={styles.heading}><Inventory />
            <InventoryImage /></h1>
            <p>Our store is located at 1234 Elm St.</p>
            <p>Our store hours are 9am-5pm.</p>
        </div>
    );
}

export default Store;