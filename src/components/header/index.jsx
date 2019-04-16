import React from "react";
import styled from "styled-components";

import RoutingLink from "../routingLinks/index.jsx";

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
  }

  render() {
    return (
      <HeaderWrapper>
        <div>
          <RoutingLink linkText="Главная" to="/" />
          <RoutingLink linkText="Новости" to="/news" />
          <RoutingLink linkText="Погода" to="/weather" />
        </div>
        <div>
          <RoutingLink linkText="Вход" to="/login" />
          <RoutingLink linkText="Регистрация" to="/registraion" />
        </div>
      </HeaderWrapper>
    );
  }
}

export default HeaderContainer;
