import React, { useContext, useEffect, useState } from "react";
import "./MiniCard.css";
import cloud from "../Assets/Icons/cloud.png";
import fog from "../Assets/Icons/fog.png";
import rain from "../Assets/Icons/rain.png";
import snow from "../Assets/Icons/snow.png";
import storm from "../Assets/Icons/storm.png";
import sun from "../Assets/Icons/sun.png";
import wind from "../Assets/Icons/windy.png";
// import { weatherContext } from "../Context/WeatherContext";

const MiniCard = ({ time, temp, conditions }) => {
  const [icon, setIcon] = useState();

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
    <div id="mini-card">
      <div id="card">
        <div id="card-header">
          <h3>Saturday</h3>
        </div>
        <div id="image">
          <img src={icon} alt="icons" />
        </div>
        <div id="card-temp">
          <h3>{temp} &deg;C</h3>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
