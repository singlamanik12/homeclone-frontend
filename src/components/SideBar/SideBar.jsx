import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import LoggedIn from "./LoggedIn";
import LoggedOff from "./LoggedOff";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {localStorage.getItem("token") !== null ? <LoggedIn /> : <LoggedOff />}
      {/* <ListItem button key="1" component={RouterLink} to="/logout">
        <ListItemIcon style={{ fontSize: "36px" }}>
          <i class="fa fa-sign-out" aria-hidden="true"></i>
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem> */}
    </div>
  );
  try {
    return (
      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <img
              style={{ cursor: "pointer", width: "40px" }}
              src={require("./menu.png")}
              onClick={toggleDrawer(anchor, true)}
            /> */}

            <IconButton
              style={{ margin: "5px" }}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(anchor, true)}
              edge="start"
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>

            <SwipeableDrawer
              PaperProps={{ elevation: 1, variant: "outlined" }}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
  } catch (ex) {
    // console.log("Error Ocurred!");
    window.location = "/";
  }
}
