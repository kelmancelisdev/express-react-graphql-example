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
