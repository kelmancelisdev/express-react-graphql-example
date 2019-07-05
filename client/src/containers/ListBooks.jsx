import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { GET_BOOKS } from "../graph/tags/Books.tag";
import ListComponent from "../components/List/List";
import FabAdd from "../components/Buttons/add/FabAdd";

export default function ListBooks(props) {
  const { addBook } = useHelpers(props);
  return (
    <Fragment>
      <Query pollInterval={30500} query={GET_BOOKS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Èrror! ${error.message}`;
          return (
            <>
              <ListComponent books={data.books} />
            </>
          );
        }}
      </Query>
      <FabAdd onClick={addBook} />
    </Fragment>
  );
}

const useHelpers = props => {
  console.log(props);
  const addBook = () => {
    props.history.push("/add_book");
  };

  return {
    addBook
  };
};
