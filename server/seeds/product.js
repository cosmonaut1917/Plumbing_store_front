const { ApolloClient, InMemoryCache, gql } = require('@apollo/client');
const fetch = require('cross-fetch');

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Your GraphQL server endpoint
  cache: new InMemoryCache(),
  fetch: fetch,
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

// Mutation to add a product
const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $description: String!, $price: Float!, $stock: Int!) {
    addProduct(name: $name, description: $description, price: $price, stock: $stock) {
      id
      name
      description
      price
      stock
    }
  }
`;

// Function to seed products
async function seedProducts() {
  try {
    // Loop through products data and add each product using GraphQL mutation
    for (const product of productsData) {
      const { name, description, price, stock } = product;
      await client.mutate({
        mutation: ADD_PRODUCT,
        variables: {
          name,
          description,
          price,
          stock
        }
      });
      console.log(`Product "${name}" seeded successfully`);
    }
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
}

// Call the seedProducts function
seedProducts();