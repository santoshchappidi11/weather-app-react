import React, { useContext } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import MiniCard from "../MiniCard/MiniCard";
import "./WeatherMain.css";
import { weatherContext } from "../Context/WeatherContext";

const WeatherMain = () => {
  const { values } = useContext(weatherContext);

  const duplicateValues = [
    {
      datetime: "saturday",
      temp: "28",
      conditions: "Clear",
    },
    {
      datetime: "saturday",
      temp: "28",
      conditions: "Clear",
    },
    {
      datetime: "saturday",
      temp: "28",
      conditions: "Clear",
    },
    {
      datetime: "saturday",
      temp: "28",
      conditions: "Clear",
    },
    {
      datetime: "saturday",
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
            {values.slice(1, 6).map((curr) => {
              return (
                <div>
                  <MiniCard
                    key={curr.datetime}
                    time={curr.datetime}
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
                    key={curr.datetime}
                    time={curr.datetime}
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
