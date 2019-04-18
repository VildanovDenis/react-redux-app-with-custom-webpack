import React from "react";
import styled from "styled-components";

const StyledWeatherItemWrapper = styled.article`
  width: 30%;
  padding: 20px;
  border: 1px solid gray;
  margin-bottom: 40px;
  border-radius: 10px;
`;

const obj = {
  coord: { lon: 45, lat: 53.2 },
  weather: [{ id: 803, main: "Clouds", description: "пасмурно", icon: "04n" }],
  base: "stations",
  main: {
    temp: 2.78,
    pressure: 1009,
    humidity: 41,
    temp_min: 2.78,
    temp_max: 2.78
  },
  wind: { speed: 2.55, deg: 88.629 },
  clouds: { all: 64 },
  dt: 1555626195,
  sys: {
    type: 3,
    id: 219846,
    message: 0.0065,
    country: "RU",
    sunrise: 1555638763,
    sunset: 1555689919
  },
  id: 511565,
  name: "Penza",
  cod: 200
};

function WeatherItemComponent() {
  return (
    <StyledWeatherItemWrapper>
      <h2>
        В городе {obj.name}, {obj.sys.country} {obj.weather[0].description}
      </h2>
      <p>Температура: {obj.main.temp} °C</p>
      <p>Давление: {obj.main.pressure} Па</p>
      <p>Влажность: {obj.main.humidity} φ</p>
      <p>Скорость ветра: {obj.wind.speed} м/c</p>
    </StyledWeatherItemWrapper>
  );
}

export default WeatherItemComponent;
