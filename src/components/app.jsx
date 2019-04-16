import React from "react";
import { Switch, Route } from "react-router-dom";

import SpinnerComponent from "./spinner/index.jsx";
import HeaderContainer from "./header/index.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <HeaderContainer />
        <SpinnerComponent color="black" />
      </div>
    );
  }
}

export default App;
