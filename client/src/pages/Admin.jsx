import '../styles/style.css';
import ClientGrid from "../components/ClientGrid.jsx";

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


function Admin() {
    return (
        <div style={styles.card}>
            <h2> <ClientGrid /></h2>
            <p>Our store is located at 1234 Elm St.</p>
            <p>Our store hours are 9am-5pm.</p>
        </div>
    );
}

export default Admin;