import React from "react";
import styled from "styled-components";

import WeatherItemComponent from "../weatherItem/index.jsx";

const StyledWeatherWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 10px;
`;

class WeatherContainer extends React.Component {
  render() {
    return (
      <StyledWeatherWrapper>
        <WeatherItemComponent />
        <WeatherItemComponent />
        <WeatherItemComponent />
        <WeatherItemComponent />
        <WeatherItemComponent />
        <WeatherItemComponent />
        <WeatherItemComponent />
      </StyledWeatherWrapper>
    );
  }
}

export default WeatherContainer;
