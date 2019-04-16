import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import SpinnerComponent from "./spinner/index.jsx";
import HeaderContainer from "./header/index.jsx";
import MainContainer from "./main/index.jsx";

class App extends React.Component {
  render() {
    const { showSpinner } = this.props;
    return (
      <div className="app">
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={MainContainer} />
        </Switch>
        {showSpinner && <SpinnerComponent color="black" />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSpinner: state.spinnerReducer.showSpinner
  };
};

export default connect(
  mapStateToProps,
  undefined
)(App);
