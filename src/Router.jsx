import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import jwtDecode from "jwt-decode";
import { Route, Redirect, Switch, NavLink, Link } from "react-router-dom";
import "./components/SideBar/SideBar.Module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import SideBar from "./components/SideBar/SideBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import MyPostings from "./components/MyPostings.jsx/MyPostings";
import PreviewPosting from "./components/MyPostings.jsx/PreviewPosting";
import EditPostingForm from "./components/MyPostings.jsx/EditPostingForm";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Contactus from "./components/common/Contactus";
const RegisterForm = lazy(() => import("./components/Form/RegisterForm"));
const LoginForm = lazy(() => import("./components/Form/LoginForm"));
const Forgot = lazy(() => import("./components/Form/Forgot"));
const Postings = lazy(() => import("./components/postings/Postings"));
const Logout = lazy(() => import("./components/common/Logout"));
const ChangePassword = lazy(() => import("./components/Form/ChangePassword"));
const Confirmation = lazy(() => import("./components/common/Confirmation"));
const SignupUI = lazy(() => import("./components/Form/SignupUI"));
const CreatePosting = lazy(() =>
  import("./components/NewPosting/CreatePosting")
);
const OpenPosting = lazy(() => import("./components/postings/OpenPosting"));
const Privacy = lazy(() => import("./components/common/privacypolicy"));
const Terms = lazy(() => import("./components/common/Terms"));
class Router extends Component {
  state = {};
  render() {
    return (
      <>
        <Grid item xs={12}>
          <Suspense
            fallback={
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <CircularProgress color="secondary" />
              </div>
            }
          >
            <Switch>
              <Route
                path="/register"
                render={(props) => <RegisterForm {...props} />}
              />
              <Route path="/home" render={(props) => <Postings {...props} />} />
              <Route
                path="/login"
                render={(props) => <LoginForm {...props} />}
              />
              <Route path="/forgot" render={(props) => <Forgot {...props} />} />
              <Route
                path="/change_password/:id"
                render={(props) => <ChangePassword {...props} />}
              />
              <ProtectedRoute
                path="/confirmation/:id"
                render={(props) => <Confirmation {...props} />}
              />
              <ProtectedRoute
                path="/logout"
                render={(props) => <Logout {...props} />}
              />
              <Route
                path="/signup"
                render={(props) => <SignupUI {...props} />}
              />
              <ProtectedRoute
                path="/create"
                render={(props) => <CreatePosting {...props} />}
              />
              <Route
                path="/posting_details/:id"
                render={(props) => <OpenPosting {...props} />}
              />
              <Route
                path="/privacy"
                render={(props) => <Privacy {...props} />}
              />
              <Route path="/terms" render={(props) => <Terms {...props} />} />
              <ProtectedRoute
                path="/my_postings"
                render={(props) => <MyPostings {...props} />}
              />
              <ProtectedRoute
                path="/preview_edit_posting/:id"
                render={(props) => <PreviewPosting {...props} />}
              />
              <ProtectedRoute
                path="/edit_posting_details/:id"
                render={(props) => <EditPostingForm {...props} />}
              />
              <ProtectedRoute
                path="/contactus"
                render={(props) => <Contactus {...props} />}
              />
              <Redirect from="/" exact to="/home" />
              <Redirect to="/not-found"></Redirect>
            </Switch>
          </Suspense>
        </Grid>
      </>
    );
  }
}

export default Router;
