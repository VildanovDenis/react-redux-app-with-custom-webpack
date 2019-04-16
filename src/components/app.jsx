import React from "react";

import SpinnerComponent from "./spinner/index.jsx";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SpinnerComponent color="black" />
      </div>
    );
  }
}

export default App;
