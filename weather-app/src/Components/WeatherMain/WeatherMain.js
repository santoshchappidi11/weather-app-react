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
        // <MiniCard
        //   key={curr.dateTime}
        //   time={curr.dateTime}
        //   temp={curr.temp}
        //   conditions={curr.conditions}
        // />
        <MiniCard
          key={1234}
          time={new Date()}
          temp={"28"}
          conditions={"Clear"}
        />
      ))}
    </div>
  );
};

export default WeatherMain;
