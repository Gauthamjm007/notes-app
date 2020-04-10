import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Notes from "./components/notes/Notes";
import Category from "./components/categories/Category";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#522d5b" },
    secondary: { main: "#ee4540" },
  },
  status: {
    danger: "orange",
  },
});
function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/notes" component={Notes}></Route>
          <Route path="/category" component={Category}></Route>
          <Route path="/signin" component={SignIn} exact={true}></Route>
          <Route path="/" component={SignIn} exact={true}></Route>
          <Route path="/signup" component={SignUp} exact={true}></Route>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
