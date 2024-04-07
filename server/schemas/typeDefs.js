// ToDo add client in usser  needs to be seeded to work with current mongoose data

const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String
    firstname: String
    lastname: String
    contact: String
    cart: [Cart]
  }
type Admin {
    adminId: ID
    firstname: String!
    lastname: String!
    company: String!
    bid: [Bid]

}

type Bid {
    bidId: ID
    product: [Product]
    total: Int!
    
}
type Cart {
    cartId: ID
    product: [Product]
    total: Int!
    
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
    user(username: String!): User
    me: User
    products: [Product]
    product(_id: ID!): Product
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, phone: String!, admin: Boolean): Auth
    updateUser(_id: ID!, username: String, email: String, phone: String, admin: Boolean): User
    deleteUser(_id: ID!): User

    login(email: String!, password: String!): Auth

    addProduct(productname: String!, description: String!, price: Float!, stock: Int!, image: String): Product
    addToCart(product: ProductInput!): Client
    addProfile(firstname: String!, lastname: String!, contact: String): User

  }
`;

module.exports = typeDefs;


