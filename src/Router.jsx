import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import { Route, Redirect, Switch, NavLink, Link } from "react-router-dom";
import "./components/SideBar/SideBar.Module.css";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import MyPostings from "./components/MyPostings.jsx/MyPostings";
import PreviewPosting from "./components/MyPostings.jsx/PreviewPosting";
import EditPostingForm from "./components/MyPostings.jsx/EditPostingForm";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Contactus from "./components/common/Contactus";
import http from "./services/httpServices";
import { url } from "./tools/config.json";
const RegisterForm = lazy(() => import("./components/Form/RegisterForm"));
const LoginForm = lazy(() => import("./components/Form/LoginForm"));
const Forgot = lazy(() => import("./components/Form/Forgot"));
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
const IteratePostings = lazy(() =>
  import("./components/postings/IteratePostings")
);
class Router extends Component {
  state = {
    city: "All",
    region: "All",
    page: 0,
    typeOfHousing: "All",
    error: "",
    data: {},
    loaded: false,
  };
  componentDidMount = async () => {
    try {
      // console.log(this.state.data);

      const { data } = await http.get(
        `${url}/postings?city=${this.state.city}&region=${this.state.region}&page=${this.state.page}&typeOfHousing=${this.state.typeOfHousing}`
      );
      // console.log(data);
      this.setState({ data, loaded: true });
    } catch (ex) {
      // console.log(ex.response.data);

      this.setState({ error: "No postings available yet" });
    }
  };
  componentDidUpdate = async (prevProps, prevState) => {
    if (
      this.state.city !== prevState.city ||
      this.state.region !== prevState.region ||
      this.state.page !== prevState.page ||
      this.state.typeOfHousing !== prevState.typeOfHousing
    ) {
      try {
        // console.log(this.state.data);

        const { data } = await http.get(
          `${url}/postings?city=${this.state.city}&region=${this.state.region}&page=${this.state.page}&typeOfHousing=${this.state.typeOfHousing}`
        );
        // console.log(data);
        this.setState({ data, loaded: true });
      } catch (ex) {
        // console.log(ex.response.data);
        this.setState({ error: "No postings available yet" });
      }
    }
  };

  handleChange = (e) => {
    // console.log(e.target.value);
    this.state[e.target.name] !== e.target.value &&
      this.setState({ [e.target.name]: e.target.value, page: 0, error: "" });
  };
  handleNextPage = () => {
    let page = this.state.page;
    page += 1;
    this.setState({ page, error: "" });
  };
  handlePrevPage = () => {
    let page = this.state.page;
    page -= 1;
    this.setState({ page, error: "" });
  };
  render() {
    const {
      city,
      region,
      page,
      typeOfHousing,
      error,
      data,
      loaded,
    } = this.state;
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
              <Route
                path="/home"
                render={(props) => (
                  <IteratePostings
                    city={city}
                    region={region}
                    page={page}
                    error={error}
                    typeOfHousing={typeOfHousing}
                    data={data}
                    loaded={loaded}
                    handleChange={this.handleChange}
                    handleNextPage={this.handleNextPage}
                    handlePrevPage={this.handlePrevPage}
                    {...props}
                  />
                )}
              />
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
