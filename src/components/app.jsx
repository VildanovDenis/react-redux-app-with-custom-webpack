import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  spinnerShowingAction,
  spinnerHidingAction
} from "../store/action/spinner-actions.js";

import SpinnerComponent from "./spinner/index.jsx";
import HeaderContainer from "./header/index.jsx";

class App extends React.Component {
  render() {
    const { showSpinner } = this.props;
    console.log(this.props);
    return (
      <div className="app">
        <HeaderContainer />
        {showSpinner && <SpinnerComponent color="black" />}
        <button
          type="button"
          onClick={() => {
            spinnerShowingAction();
          }}
        >
          Показать спинер
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSpinner: state.spinnerReducer.showSpinner
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      spinnerShowingAction: spinnerShowingAction,
      spinnerHidingAction: spinnerHidingAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
