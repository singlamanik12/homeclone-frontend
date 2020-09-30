import React, { Component } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
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
              primary={
                <Typography
                  variant="body1"
                  style={{ fontFamily: "Noto Sans JP" }}
                >
                  {getCurrentUserEmail().name}
                </Typography>
              }
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
          <ListItem button key="2" component={RouterLink} to="/home/postings">
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  style={{ fontFamily: "Noto Sans JP" }}
                >
                  Home
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="middle" />

          <ListItem button key="0" component={RouterLink} to="/my_postings">
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  style={{ fontFamily: "Noto Sans JP" }}
                >
                  My Postings
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="middle" />
          <ListItem button key="1" component={RouterLink} to="/logout">
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  style={{ fontFamily: "Noto Sans JP" }}
                >
                  Logout
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="middle" />
          <ListItem button key="3" component={RouterLink} to="/contactus">
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  style={{ fontFamily: "Noto Sans JP" }}
                >
                  Contact us
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="middle" />
        </List>
      </>
    );
  }
}

export default LoggedIn;
