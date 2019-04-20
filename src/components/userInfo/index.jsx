import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import RoutingLink from "../routingLinks/index.jsx";

const StyledSection = styled.section`
  padding: 30px 10px;
`;

class UserInfoConrainer extends React.Component {
  render() {
    const { username, login, isLogin, isAdmin } = this.props.user;
    if (!isLogin) {
      return (
        <StyledSection>
          <RoutingLink to="/login" linkText="Войдите, чтобы продолжить" />
        </StyledSection>
      );
    }
    return (
      <StyledSection>
        <p>Имя пользователя: {username}</p>
        <p>Логин: {login}</p>
        <p>Привелегии: {isAdmin ? "админ" : "отсутствуют"}</p>
      </StyledSection>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer
  };
};

export default connect(
  mapStateToProps,
  undefined
)(UserInfoConrainer);
