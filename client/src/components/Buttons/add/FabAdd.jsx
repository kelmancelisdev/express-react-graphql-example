import React from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    right: 10,
    bottom: 20
  }
}));

const FabAdd = ({ onClick }) => {
  const classes = useStyles();
  return (
    <Fab
      aria-label="Add"
      className={classes.fab}
      color="primary"
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
};

FabAdd.propTypes = {
  onClick: PropTypes.func
};

FabAdd.defaultProps = {
  onClick: () => console.log("adddd")
};

export default FabAdd;
