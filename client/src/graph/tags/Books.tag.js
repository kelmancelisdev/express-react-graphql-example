import gql from "graphql-tag";

export const GET_BOOKS = gql`
  {
    books {
      _id
      title
      author
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook(
    $isbn: String!
    $title: String!
    $author: String!
    $description: String!
    $publisher: String!
    $published_year: Int!
  ) {
    addBook(
      isbn: $isbn
      title: $title
      author: $author
      description: $description
      publisher: $publisher
      published_year: $published_year
    ) {
      _id
      title
      author
    }
  }
`;
