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
  width: 250px;
  padding: 5px 15px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

class RegistrationContainer extends React.Component {
  render() {
    return (
      <section>
        <StyledForm>
          <FormItemComponent
            name="Username"
            type="text"
            id="reg-username"
            placeholder="Имя пользователя"
          />
          <FormItemComponent
            name="Login"
            type="text"
            id="reg-name"
            placeholder="Логин"
          />
          <FormItemComponent
            name="Password"
            type="password"
            id="reg-password"
            placeholder="Пароль"
          />
          <StyledLoginButton type="button">
            Регистрация
          </StyledLoginButton>
        </StyledForm>
      </section>
    );
  }
}

export default RegistrationContainer;
