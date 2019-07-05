import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import ListBooks from "./containers/ListBooks";
import AddNewBook from "./components/Forms/AddNewBook/AddNewBook";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Route path="/" exact component={ListBooks} />
      <Route path="/add_book" exact component={AddNewBook} />
    </Fragment>
  );
}

export default App;
