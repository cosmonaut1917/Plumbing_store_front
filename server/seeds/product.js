const db= require("../config/connection")
const {User,Product}=require("../models")
const cleanDB= require("./cleanDB")
const productData=require("./products.json")


db.once('open', async () => {
  await cleanDB('Product', 'plumbingstore');

  await Product.insertMany(productData);

  console.log('Products seeded!');
  process.exit(0);
});

// Sample data
const productsData = [
  {
    name: 'Pipe Fittings',
    description: 'Assorted pipe fittings for plumbing needs',
    price: 12.99,
    stock: 100
  },
  {
    name: 'PVC Pipes',
    description: 'Various sizes of PVC pipes for plumbing projects',
    price: 24.99,
    stock: 50
  },
  {
    name: 'Toilet',
    description: 'Variety of colors and sizes',
    price: 24.99,
    stock: 10
  },
  {
    name: 'P Traps',
    description: 'Assorted P Traps',
    price: 24.99,
    stock: 65
  },
  {
    name: 'Plumbing Wrench',
    description: 'Wrenchs for all needs',
    price: 24.99,
    stock: 50
  },
  {
    name: 'Water Heater',
    description: 'Replacement water heaters',
    price: 600.00,
    stock: 20
  },
  {
    name: "Water softner's",
    description: 'Proffessional grade water softners',
    price: 500.00,
    stock: 15
  },
  
  // Add more products as needed
];




// Call the seedProducts function
seedProducts();
