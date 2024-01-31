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
// import cloud from "../Assets/Icons/cloud.png";
// import fog from "../Assets/Icons/fog.png";
// import rain from "../Assets/Icons/rain.png";
// import snow from "../Assets/Icons/snow.png";
// import storm from "../Assets/Icons/storm.png";
// import sun from "../Assets/Icons/sun.png";
// import wind from "../Assets/Icons/windy.png";
import { weatherContext } from "../Context/WeatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherCard = () => {
  const { weather, place } = useContext(weatherContext);
  const [image, setImage] = useState(Rainy);

  const { temp, wspd, humidity, heatIndex, conditions, visibility } = weather;
  const [icon, setIcon] = useState("");
  const { time } = useDate();

  // console.log(icon, "ICON");

  useEffect(() => {
    if (conditions) {
      if (conditions.toLowerCase().includes("cloud")) {
        setIcon("fa-cloud");
      } else if (conditions.toLowerCase().includes("rain")) {
        setIcon("fa-cloud-rain");
      } else if (conditions.toLowerCase().includes("clear")) {
        setIcon("fa-sun");
      } else if (conditions.toLowerCase().includes("thunder")) {
        setIcon("fa-cloud-bolt");
      } else if (conditions.toLowerCase().includes("fog")) {
        setIcon("fa-smog");
      } else if (conditions.toLowerCase().includes("snow")) {
        setIcon("fa-snowflake");
      } else if (conditions.toLowerCase().includes("wind")) {
        setIcon("fa-wind");
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
        <div id="overlay"></div>
        <div id="weather-main">
          <div id="weather-temp">
            {icon && (
              <FontAwesomeIcon
                icon={`fa-solid ${icon}`}
                style={{ fontSize: "70px" }}
              />
            )}
            {/* <i
                className={`fa-solid ${icon}`}
                style={{ fontSize: "100px" }}
              ></i> */}
            {/* <img src={icon} alt="icons" /> */}
            <h1>{temp ? temp : "0"} &deg;C</h1>
            <span>{conditions}</span>
            <h2>{place.toUpperCase()}</h2>
          </div>
          <div id="current-date">
            <p>{new Date().toDateString()}</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
      <div id="other-details">
        <div id="current-temp">
          <div>
            <h4>Current Temperature</h4>
            <i class="fa-solid fa-temperature-half"></i>
          </div>
          <span>{temp ? temp : "0"} &deg;C</span>
        </div>
        <div id="wind">
          <div>
            <h4>Wind Speed</h4>
            <i class="fa-solid fa-wind"></i>
          </div>
          <span>{wspd ? wspd : "0"} Km/h</span>
        </div>
        <div id="humidity">
          <div>
            <h4>Humidity</h4>
            <i class="fa-solid fa-droplet"></i>
          </div>
          <span>{humidity ? humidity : "0"} %</span>
        </div>
        <div id="heat-index">
          <div>
            <h4>Heat Index</h4>
            <i class="fa-solid fa-temperature-high"></i>
          </div>
          <span>{heatIndex ? heatIndex : "N/A"}</span>
        </div>
        <div id="overcast">
          <div>
            <h4>Visibility</h4>
            <i class="fa-solid fa-eye"></i>
          </div>
          <span>{visibility ? visibility : "0"} Km</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
