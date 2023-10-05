import React, { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import MiniCard from "../MiniCard/MiniCard";
import "./WeatherMain.css";
import { weatherContext } from "../Context/WeatherContext";

const WeatherMain = () => {
  const { values } = useContext(weatherContext);
  return (
    <div id="weather-body">
      <WeatherCard />
      {values.slice(1, 7).map((curr, index) => (
        <MiniCard key={index} temp={curr.temp} conditions={curr.conditions} />
      ))}
    </div>
  );
};

export default WeatherMain;
