import React from "react";
import styled from "styled-components";

import FormItemComponent from "../formItem/index.jsx";

const StyledForm = styled.form`
  width: 450px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledErrorMessage = styled.p`
  color: red;
  height: 16px;
  margin-bottom: 20px;
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
  constructor(props) {
    super(props);
    this.state = {
      showError: false
    };
    this.onLoginInputChange = this.onLoginInputChange.bind(this);
    this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onLoginInputChange(e) {
    const inputValue = e.target.value.toLowerCase();
    const stateName = e.target.name;
    this.setState({
      [stateName]: inputValue
    });
  }

  onPasswordInputChange(e) {
    const inputValue = e.target.value;
    const stateName = e.target.name;
    this.setState({
      [stateName]: inputValue
    });
  }

  onButtonClick() {
    const { Login, Password } = this.state;
    const URL = `http://localhost:3500/users?login=${Login}&password=${Password}`;
    fetch(URL, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data"
      }
    })
      .then(res => {
        const data = res.json();
        return data;
      })
      .then(data => {
        data.length === "0"
          ? this.setState({
              showError: true
            })
          : null;
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { showError } = this.state;
    return (
      <React.Fragment>
        <StyledForm>
          <FormItemComponent
            name="Login"
            type="text"
            id="login-name"
            placeholder="Логин"
            onChangeInput={this.onLoginInputChange}
          />
          <FormItemComponent
            name="Password"
            type="password"
            id="login-password"
            placeholder="Пароль"
            onChangeInput={this.onPasswordInputChange}
          />
          <StyledErrorMessage>
            {showError && "Неверный логин или пароль"}
          </StyledErrorMessage>
          <StyledLoginButton type="button" onClick={this.onButtonClick}>
            Войти
          </StyledLoginButton>
        </StyledForm>
      </React.Fragment>
    );
  }
}

export default LoginContainer;
