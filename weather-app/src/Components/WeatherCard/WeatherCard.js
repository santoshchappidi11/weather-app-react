import React, { useContext, useEffect, useState } from "react";
import "./WeatherCard.css";
import useDate from "../Utils/useDate";

import Clear from "../Assets/Images/Clear.jpg";
import Cloudy from "../Assets/Images/Cloudy.jpg";
import Fog from "../Assets/Images/fog.png";
import Rainy from "../Assets/Images/Rainy.jpg";
import Snow from "../Assets/Images/snow.jpg";
import Stormy from "../Assets/Images/Stormy.jpg";
import Sunny from "../Assets/Images/Sunny.jpg";

// --------------------------------------------------------------->
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
  const [image, setImage] = useState(Rainy);
  // console.log(weather, "weather");
  const {
    temp,
    wspd,
    humidity,
    heatIndex,
    // iconString,
    conditions,
  } = weather;
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

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

  useEffect(() => {
    if (weather.conditions) {
      let imageURL = weather.conditions;

      if (imageURL.toLowerCase().includes("clear")) {
        setImage(Clear);
      } else if (imageURL.toLowerCase().includes("cloud")) {
        setImage(Cloudy);
      } else if (
        imageURL.toLowerCase().includes("rain") ||
        imageURL.toLowerCase().includes("shower")
      ) {
        setImage(Rainy);
      } else if (imageURL.toLowerCase().includes("snow")) {
        setImage(Snow);
      } else if (imageURL.toLowerCase().includes("fog")) {
        setImage(Fog);
      } else if (
        imageURL.toLowerCase().includes("thunder") ||
        imageURL.toLowerCase().includes("storm")
      ) {
        setImage(Stormy);
      } else {
        setImage(Sunny);
      }
    }
  }, [weather]);

  return (
    <div id="weather-card">
      <div id="background-image">
        <img src={image} alt="weather-background" />
        <div id="weather-main">
          <div id="weather-temp">
            <img src={icon} alt="icons" />
            <h1>{temp ? temp : "0"} &deg;C</h1>
            <h2>{place}</h2>
          </div>
          <div id="current-date">
            <p>{new Date().toDateString()}</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
      <div id="other-details">
        <div id="curretn-temp">
          <h4>
            Current Temperature <i class="fa-solid fa-temperature-half"></i>
          </h4>
          <span>{temp ? temp : "0"} &deg;C</span>
        </div>
        <div id="wind">
          <h4>
            Wind Speed <i class="fa-solid fa-wind"></i>
          </h4>
          <span>{wspd ? wspd : "0"}Km/h</span>
        </div>
        <div id="humidity">
          <h4>
            Humidity <i class="fa-solid fa-droplet"></i>
          </h4>
          <span>{humidity ? humidity : "0"}%</span>
        </div>
        <div id="heat-index">
          <h4>
            Heat Index <i class="fa-solid fa-temperature-high"></i>
          </h4>
          <span>{heatIndex ? heatIndex : "N/A"}</span>
        </div>
        <div id="overcast">
          <h4>
            Conditions: <i class="fa-solid fa-water"></i>
          </h4>
          <span>{conditions ? conditions : "Clear"}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
