import gql from 'graphql-tag';

export const GET_ME = gql`
 query me {
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
 }
`;