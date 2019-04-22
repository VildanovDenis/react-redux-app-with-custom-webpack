import React from "react";
import styled from "styled-components";

const StyledPackagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 400px;
  padding: 20px;
  margin: 0 auto;
`;
const StyledP = styled.p`
  width: 100%;
  padding: 10px;
  text-align: center;
`;
const StyledLink = styled.a`
  padding: 10px;
  color: black;
`;

const usedPacks = [
  {
    name: "react",
    url: "https://reactjs.org/"
  },
  {
    name: "redux",
    url: "https://redux.js.org/"
  },
  {
    name: "react-router",
    url: "https://reacttraining.com/react-router/web/guides/quick-start"
  },
  {
    name: "styled-components",
    url: "https://www.styled-components.com/"
  },
  {
    name: "json-server",
    url: "https://github.com/typicode/json-server"
  },
  {
    name: "babel",
    url: "https://babeljs.io/"
  }
];

function FooterComponent() {
  return (
    <footer>
      <StyledPackagesWrapper>
        <StyledP>Использованные технологии:</StyledP>
        {usedPacks.map(pack => {
          return (
            <StyledLink target="_blank" href={pack.url} key={pack.name}>
              {pack.name}
            </StyledLink>
          );
        })}
      </StyledPackagesWrapper>
    </footer>
  );
}

export default FooterComponent;
