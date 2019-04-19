import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import RoutingLink from "../routingLinks/index.jsx";
import { userLogoutAction } from "../../store/action/auth-action.js";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-height: 50px;
`;

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onExitClick = this.onExitClick.bind(this);
  }

  onExitClick(event) {
    event.preventDefault();
    this.props.userLogoutAction();
  }

  render() {
    const { username, isLogin } = this.props.user;
    return (
      <HeaderWrapper>
        <div>
          <RoutingLink linkText="Главная" to="/" />
          <RoutingLink linkText="Новости" to="/news" />
          <RoutingLink linkText="Погода" to="/weather" />
        </div>
        <div>
          {isLogin ? (
            <RoutingLink linkText={`С возвращением, ${username}!`} to="/user" />
          ) : (
            <RoutingLink linkText="Вход" to="/login" />
          )}
          {isLogin ? (
            <RoutingLink
              onClick={this.onExitClick}
              linkText="Выход"
              to="/registration"
            />
          ) : (
            <RoutingLink linkText="Регистрация" to="/registration" />
          )}
        </div>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      userLogoutAction: userLogoutAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
