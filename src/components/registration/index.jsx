import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import FormItemComponent from "../formItem/index.jsx";
import {
  spinnerShowingAction,
  spinnerHidingAction
} from "../../store/action/spinner-actions.js";

const StyledForm = styled.form`
  width: 450px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const StyledSuccessMessage = styled.p`
  color: green;
  height: 16px;
  margin-bottom: 20px;
`;

const StyledErrorMessage = styled.p`
  color: red;
  height: 16px;
  margin-bottom: 20px;
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
  constructor(props) {
    super(props);
    this.state = {
      resStatus: undefined,
      emptyInput: undefined
    };

    this.onLoginInputChange = this.onLoginInputChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onRegistrationButtonClick = this.onRegistrationButtonClick.bind(this);
  }

  onLoginInputChange(e) {
    const inputValue = e.target.value.toLowerCase();
    const stateName = e.target.name;
    this.setState({
      [stateName]: inputValue
    });
  }

  onInputChange(e) {
    const inputValue = e.target.value;
    const stateName = e.target.name;
    this.setState({
      [stateName]: inputValue
    });
  }

  onRegistrationButtonClick() {
    const { login, password, username } = this.state;

    if (!login || !password || !username) {
      this.setState({
        emptyInput: true
      });
      return;
    }

    const user = {
      isAdmin: false,
      username: username,
      password: password,
      login: login
    };
    const URL = "http://localhost:3500/users";

    this.props.spinnerShowingAction();

    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        this.props.spinnerHidingAction();
        this.setState({
          resStatus: res.status,
          emptyInput: undefined
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <section>
        <StyledForm>
          <FormItemComponent
            name="username"
            type="text"
            id="reg-username"
            placeholder="Имя пользователя"
            onChangeInput={this.onInputChange}
          />
          <FormItemComponent
            name="login"
            type="text"
            id="reg-name"
            placeholder="Логин"
            onChangeInput={this.onLoginInputChange}
          />
          <FormItemComponent
            name="password"
            type="password"
            id="reg-password"
            placeholder="Пароль"
            onChangeInput={this.onInputChange}
          />
          {this.state.resStatus === 201 && (
            <StyledSuccessMessage>
              Поздравляем! Вы зарегистрировались.
            </StyledSuccessMessage>
          )}
          {this.state.emptyInput && (
            <StyledErrorMessage>Заполнены не все поля</StyledErrorMessage>
          )}
          <StyledLoginButton
            type="button"
            onClick={this.onRegistrationButtonClick}
          >
            Регистрация
          </StyledLoginButton>
        </StyledForm>
      </section>
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
)(RegistrationContainer);
