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
          <RoutingLink linkText="Главная" to="123" />
          <RoutingLink linkText="Новости" to="123" />
          <RoutingLink linkText="Погода" to="123" />
        </div>
        <div>
          <RoutingLink linkText="Вход" to="123" />
          <RoutingLink linkText="Регистрация" to="123" />
        </div>
      </HeaderWrapper>
    );
  }
}

export default HeaderContainer;
