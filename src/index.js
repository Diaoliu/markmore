import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/navbar";
import Main from "./components/main";

import "./styles/styles.scss";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Main />
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
