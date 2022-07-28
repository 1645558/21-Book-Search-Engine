const { gql } = require('apollop-server-express');

const typeDefs = gql`

type Book {
    _id: ID!
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type User {
    _id: ID!
    username: String
    email: String
    savedBooks: [Book]
}

type Query {
    me: User
}

type Auth {
    token: ID!
    user: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: savedBooks!): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;