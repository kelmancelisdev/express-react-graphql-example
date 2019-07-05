import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  fab: {
    margin: theme.spacing(1)
  }
}));

export default function ListComponent({ books }) {
  const classes = useStyles();
  const handleEdit = book => {
    console.log(book);
  };

  return (
    <List className={classes.root}>
      {books.map(book => {
        return (
          <ListItem alignItems="flex-start" key={book.author}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={book.author}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {book.title}
                  </Typography>
                </React.Fragment>
              }
            />
            <Fab
              color="secondary"
              aria-label="Edit"
              className={classes.fab}
              onClick={() => handleEdit(book)}
            >
              <Icon>edit_icon</Icon>
            </Fab>
            <Fab aria-label="Delete" className={classes.fab}>
              <DeleteIcon />
            </Fab>
          </ListItem>
        );
      })}

      <Divider variant="inset" component="li" />
    </List>
  );
}
