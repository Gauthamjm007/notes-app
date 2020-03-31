import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configStore";
import App from "./App";
import { Provider } from "react-redux";
import { startGetCategory } from "../src/actions/categoryAction";
import { startGetNotes } from "../src/actions/notesAction";
const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(startGetCategory());
store.dispatch(startGetNotes());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
