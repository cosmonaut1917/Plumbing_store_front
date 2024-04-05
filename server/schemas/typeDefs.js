const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String
  }
type Admin {
    adminId: ID
    firstname: String!
    lastname: String!
    company: String!
    bid: [Bid]

}
type Client {
    clientId: ID
    firstname: String!
    lastname: String!
    contact: String!
    cart: [Cart]
}
type Bid {
    bidId: ID
    product: [Product]
    total: Int!
    client: Client
}
type Cart {
    cartId: ID
    product: [Product]
    total: Int!
    client: Client
}
type Product {
    _id: ID
    productname: String!
    description: String!
    price: Float!
    stock: Int!
    image: String
  }
input ProductInput {
    productname: String!
    description: String!
    price: Float!
    stock: Int!
    image: String
}
  
 type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    me: User
    products: [Product]
    product(_id: ID!): Product
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
<<<<<<< HEAD
    addProduct(productname: String!, description: String!, price: Int!, stock: Int!, image: String): Product
    updateUser(_id: ID!, username: String, email: String): User
    deleteUser(_id: ID!): User
=======
    addProduct(productname: String!, description: String!, price: Float!, stock: Int!, image: String): Product

>>>>>>> 25d6f4ea98530009c67350da28741a3b29dcde39
  }
`;

module.exports = typeDefs;


