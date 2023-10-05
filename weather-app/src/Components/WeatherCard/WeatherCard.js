import React, { useContext, useEffect, useState } from "react";
import "./WeatherCard.css";
import cloud from "../Assets/Icons/cloud.png";
import fog from "../Assets/Icons/fog.png";
import rain from "../Assets/Icons/rain.png";
import snow from "../Assets/Icons/snow.png";
import storm from "../Assets/Icons/storm.png";
import sun from "../Assets/Icons/sun.png";
import wind from "../Assets/Icons/windy.png";
import { weatherContext } from "../Context/WeatherContext";

const WeatherCard = () => {
  const { weather, place } = useContext(weatherContext);
  console.log(weather, "weather");
  const {
    temp,
    wspd,
    humidity,
    heatIndex,
    // iconString,
    conditions,
  } = weather;
  const [icon, setIcon] = useState(sun);

  useEffect(() => {
    if (conditions) {
      if (conditions.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (conditions.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (conditions.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (conditions.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (conditions.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (conditions.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (conditions.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [conditions]);

  return (
    <div id="weather-card">
      <div id="weather-temp">
        <img src={icon} alt="icons" />
        <h2>{temp} &deg;C</h2>
      </div>
      <div id="weather-loc">
        <p>{place}</p>
      </div>
      <div id="current-date">
        <p>{new Date().toDateString()}</p>
        <p>8:43 AM</p>
      </div>
      <div id="other-details">
        <div>
          <h4>Wind Speed: </h4>
          <span>{wspd}</span>
        </div>
        <div>
          <h4>Humidity: </h4>
          <span>{humidity}</span>
        </div>
      </div>
      <div id="heat-index">
        <h4>Heat Index</h4>
        <span>{heatIndex ? heatIndex : "N/A"}</span>
      </div>
      <div id="overcast">
        <h2>{conditions}</h2>
      </div>
    </div>
  );
};

export default WeatherCard;
