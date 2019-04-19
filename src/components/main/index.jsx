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
  componentDidMount() {
    const { spinnerHidingAction, spinnerShowingAction } = this.props;
    spinnerShowingAction();
    setTimeout(spinnerHidingAction, 1000);
  }

  render() {
    return (
      <StyledMainSection>
        <h3>Привет пользователь!</h3>
        <p>
          Ты находишься на главной странице. Проект создан для того, чтобы более
          конкретно ознакомиться с redux'ом и кастомной сборкой webpack'а.
        </p>
        <p>
          Ссылка на мой <a href="https://github.com/VildanovDenis">гитхаб</a>
        </p>
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
