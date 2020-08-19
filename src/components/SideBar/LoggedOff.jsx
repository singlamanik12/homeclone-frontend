import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import { getCurrentUserEmail } from "./../../services/JwtServices";
class LoggedOff extends Component {
  state = {};
  render() {
    return (
      <>
        <List>
          <ListItem
            alignItems="flex-start"
            button
            component={RouterLink}
            to="/signup"
          >
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Sign in"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    // className={classes.inline}
                    color="textPrimary"
                  >
                    {" "}
                    Feel the RoofTail
                  </Typography>
                  {/* {"Feel the assistance with RoofTail"} */}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="middle" />
          <ListItem button key="2" component={RouterLink} to="/login">
            <ListItemIcon>
              <i class="fa fa-sign-in" aria-hidden="true"></i>
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </>
    );
  }
}

export default LoggedOff;
