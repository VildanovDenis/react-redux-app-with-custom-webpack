import React from "react";
import styled from "styled-components";

import FormItemComponent from "../formItem/index.jsx";

const StyledForm = styled.form`
  width: 450px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledLoginButton = styled.button`
  display: block;
  width: 150px;
  padding: 5px 15px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

class LoginContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledForm>
          <FormItemComponent
            name="Login"
            type="text"
            id="login-name"
            placeholder="Логин"
          />
          <FormItemComponent
            name="Password"
            type="password"
            id="login-password"
            placeholder="Пароль"
          />
          <StyledLoginButton type="button">Войти</StyledLoginButton>
        </StyledForm>
      </React.Fragment>
    );
  }
}

export default LoginContainer;
