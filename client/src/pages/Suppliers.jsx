import React from "react";
import "../styles/style.css";

const styles = {
  card: {
    margin: 20,
    background: '#012D76',
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

function Suppliers({ suppliers }) {
  console.log(suppliers)
  return (
    <section className="suppliers">
      {/* <h2 style={styles.heading}>Work</h2> */}
      <hr className="solid" />
      <div className="parent-img">
        {suppliers.map(( supplier )=> (
        <div className="parent-img" key = {supplier.alt}> 
        {/* <h3>{supplier.title}</h3> */}
        <a href={supplier.url}>
          <img className="supplier-img" src={supplier.image} alt={`supplier ${supplier.title}`} onError={(e) => 
            console.log('Error loading image:', e.target.src)} />
        </a>
        </div>
        ))}
        

      </div>
    </section>
  );
}

export default Suppliers;

//test