const { gql } = require('apollo-server-express');

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
    bookCount: Int
    savedBooks: [Book]
}

input savedBook {
    description: String
    bookId: String
    image: String
    link: String
    title: String
    authors: [String]
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
    saveBook(bookData: savedBook!): User
    deleteBook(bookId: ID!): User
}
`;

module.exports = typeDefs;