import React, { Component } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { getCurrentUserEmail } from "./../../services/JwtServices";
class LoggedIn extends Component {
  state = {};
  render() {
    return (
      <>
        <List>
          <ListItem
            alignItems="flex-start"
            button
            component={RouterLink}
            to="/"
          >
            <ListItemAvatar>
              <Avatar
                alt={getCurrentUserEmail().name}
                src={localStorage.getItem("source")}
              />
            </ListItemAvatar>
            <ListItemText
              primary={getCurrentUserEmail().name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    // className={classes.inline}
                    color="textPrimary"
                  >
                    {" "}
                    {getCurrentUserEmail().email}
                  </Typography>
                  {/* {"Feel the assistance with RoofTail"} */}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="middle" />

          <ListItem button key="1" component={RouterLink} to="/logout">
            <ListItemIcon style={{ fontSize: "36px" }}>
              <i class="fa fa-sign-out" aria-hidden="true"></i>
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
        <Divider variant="middle" />
      </>
    );
  }
}

export default LoggedIn;
