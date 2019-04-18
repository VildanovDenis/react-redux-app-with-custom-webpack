import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import SpinnerComponent from "./spinner/index.jsx";
import HeaderContainer from "./header/index.jsx";
import MainContainer from "./main/index.jsx";
import LoginContainer from "./login/index.jsx";
import RegistrationContainer from "./registration/index.jsx";

class App extends React.Component {
  render() {
    const { showSpinner } = this.props;
    return (
      <div className="app">
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/registration" component={RegistrationContainer} />
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
