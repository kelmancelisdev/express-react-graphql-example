import React, { Fragment, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import "./App.css";
import { Query } from "react-apollo";
import { GET_BOOKS } from "./graph/tags/Books.tag";
import Header from "./components/Header/Header";
import ListBooks from "./components/List/List";
import FabAdd from "./components/Buttons/add/add";
import AddNewBook from "./components/Forms/AddNewBook/AddNewBook";

function App() {
  const { addBook, open } = useHelpers();
  return (
    <Fragment>
      <CssBaseline />
      <Container fluid={"true"} style={{ height: "100vh" }}>
        <Header />
        <Query pollInterval={30500} query={GET_BOOKS}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Èrror! ${error.message}`;
            return (
              <>
                <ListBooks books={data.books} />
              </>
            );
          }}
        </Query>
        <FabAdd onClick={addBook} />
        <AddNewBook open={open} onClose={addBook} />
      </Container>
    </Fragment>
  );
}

const useHelpers = () => {
  const [open, toggleOpen] = useState(false);
  const addBook = () => {
    toggleOpen(!open);
  };

  return {
    addBook,
    open
  };
};

export default App;
