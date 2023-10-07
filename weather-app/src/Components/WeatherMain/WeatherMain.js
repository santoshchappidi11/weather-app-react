import React, { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import MiniCard from "../MiniCard/MiniCard";
import "./WeatherMain.css";
import { weatherContext } from "../Context/WeatherContext";

const WeatherMain = () => {
  const { values } = useContext(weatherContext);

  const duplicateValues = [
    {
      dateTime: "saturday",
      temp: "28",
      conditions: "Clear",
    },
    {
      dateTime: "saturday",
      temp: "28",
      conditions: "Clear",
    },
    {
      dateTime: "saturday",
      temp: "28",
      conditions: "Clear",
    },
    {
      dateTime: "saturday",
      temp: "28",
      conditions: "Clear",
    },
    {
      dateTime: "saturday",
      temp: "28",
      conditions: "Clear",
    },
  ];

  return (
    <div id="weather-body">
      <WeatherCard />

      <div id="main-minicard">
        {values?.length ? (
          <div>
            {values.map((curr) => {
              return (
                <div>
                  <MiniCard
                    key={curr.dateTime}
                    time={curr.dateTime}
                    temp={curr.temp}
                    conditions={curr.conditions}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {duplicateValues.map((curr) => {
              return (
                <div>
                  <MiniCard
                    key={curr.dateTime}
                    time={curr.dateTime}
                    temp={curr.temp}
                    conditions={curr.conditions}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherMain;
