import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import moment from "moment";

import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  FormGroup,
  Button,
  Container
} from "@material-ui/core/";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import { ADD_BOOK } from "../../../graph/tags/Books.tag";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  },
  btn: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  }
}));

const AddNewBook = props => {
  const classes = useStyles();
  const [form, setValueInForm] = React.useState({});
  // isbn, title, author, description, published_year, publisher

  const handleInputControl = ({ target }) => {
    const { name, value } = target;
    setValueInForm({ ...form, [name]: value });
  };

  const getVariables = () => {
    const { isbn, title, author, description, publisher } = form;
    return {
      isbn,
      title,
      author,
      description,
      published_year: Number(moment().format("YYYY")),
      publisher
    };
  };

  const handleSubmit = () => {
    props.history.push("/");
  };
  return (
    <Container>
      <Mutation
        mutation={ADD_BOOK}
        onCompleted={handleSubmit}
        variables={getVariables()}
      >
        {(AddBook, { loading, error }) => (
          <div className={classes.paper}>
            <FormGroup>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="title">title</InputLabel>
                <Input
                  name="title"
                  id="title"
                  onChange={handleInputControl}
                  startAdornment={
                    <InputAdornment>
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="description">description</InputLabel>
                <Input
                  name="description"
                  id="description"
                  onChange={handleInputControl}
                  startAdornment={
                    <InputAdornment>
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="publisher">publisher</InputLabel>
                <Input
                  type="date"
                  name="publisher"
                  id="publisher"
                  onChange={handleInputControl}
                  startAdornment={
                    <InputAdornment>
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="isbn">isbn</InputLabel>
                <Input
                  name="isbn"
                  id="isbn"
                  onChange={handleInputControl}
                  startAdornment={
                    <InputAdornment>
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="author">author</InputLabel>
                <Input
                  name="author"
                  id="author"
                  onChange={handleInputControl}
                  startAdornment={
                    <InputAdornment>
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </FormGroup>
            <div className={classes.btn}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={AddBook}>
                Save
              </Button>
            </div>
          </div>
        )}
      </Mutation>
    </Container>
  );
};

AddNewBook.propTypes = {};

export default AddNewBook;
