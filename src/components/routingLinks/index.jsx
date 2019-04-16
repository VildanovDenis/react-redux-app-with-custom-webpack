import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  color: black;
`;

function RoutingLink({ linkText, to }) {
  return <StyledLink to={to}>{linkText}</StyledLink>;
}

export default RoutingLink;
