import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Notes from "./components/notes/Notes";
import Category from "./components/categories/Category";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/notes">Notes</Link> ||
        <Link to="/category">Category</Link>
        <Route path="/notes" component={Notes} exact={true}></Route>
        <Route path="/category" component={Category} exact={true}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
