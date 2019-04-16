import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  spinnerShowingAction,
  spinnerHidingAction
} from "../../store/action/spinner-actions.js";

const StyledMainSection = styled.section`
  padding: 30px 10px;
`;

class MainContainer extends React.Component {
  componentWillMount() {
    this.props.spinnerShowingAction();
  }

  componentDidMount() {
    setTimeout(this.props.spinnerHidingAction(), 2000);
  }

  render() {
    return (
      <StyledMainSection>
        <h3>Привет пользователь!</h3>
        <p>
          Ты находишься на главной странице. Это небольшой проект для того,
          чтобы более конкретно ознакомиться с redux'ом
        </p>
        <p>
          Ссылка на мой <a href="https://github.com/VildanovDenis">гитхаб</a>
        </p>
        <button
          type="button"
          onClick={() => {
            this.props.spinnerShowingAction();
          }}
        >
          Click me
        </button>
      </StyledMainSection>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      spinnerShowingAction: spinnerShowingAction,
      spinnerHidingAction: spinnerHidingAction
    },
    dispatch
  );

export default connect(
  undefined,
  mapDispatchToProps
)(MainContainer);
