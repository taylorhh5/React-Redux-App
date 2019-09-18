
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import {reducer} from "./reducers/index.js"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const jokeState = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={jokeState}><App /></Provider>, rootElement);

