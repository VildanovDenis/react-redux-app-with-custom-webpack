import React from "react";

import SpinnerComponent from "./spinner/index.jsx";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SpinnerComponent color="black" />
      </React.Fragment>
    );
  }
}

export default App;
