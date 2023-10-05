import React, { useContext, useState } from "react";
import "./Navbar.css";
import { weatherContext } from "../Context/WeatherContext";

const Navbar = () => {
  const { setPlace } = useContext(weatherContext);
  const [searchValue, setSearchValue] = useState("");

  const submitCity = () => {
    setPlace(searchValue);
    setSearchValue("");
  };

  return (
    <div id="navbar">
      <div id="logo">
        <h2>WEATHER APP</h2>
      </div>
      <div id="search-bar">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              submitCity();
            }
          }}
          type="text"
          placeholder="search mumbai.."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
