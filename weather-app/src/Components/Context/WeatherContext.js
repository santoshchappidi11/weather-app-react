import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const weatherContext = createContext();

const WeatherContextPro = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Jaipur");
  const [location, setLocation] = useState("");

  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: "0",
      },
      headers: {
        "X-RapidAPI-Key": "b4142b8460msh4016db39d9e0f60p1d6b8fjsn5d44b71a293e",
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data, "response data");

      const thisData = Object.values(response.data.locations)[0];

      // console.log(thisData, "this data response");
      // console.log(thisData.values[0], "this data values");

      setLocation(thisData.address);

      setValues(thisData.values);

      setWeather(thisData.values[0]);
    } catch (error) {
      console.log(error);
      toast.error("This place does not exist!");
    }
  };

  useEffect(() => {
    // fetchWeather();
  }, [place]);

  return (
    <weatherContext.Provider
      value={{ weather, setPlace, values, location, place }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherContextPro;

// import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
//   params: {
//     aggregateHours: "24",
//     location: "Washington,DC,USA",
//     contentType: "csv",
//     unitGroup: "us",
//     shortColumnNames: "0",
//   },
//   headers: {
//     "X-RapidAPI-Key": "b4142b8460msh4016db39d9e0f60p1d6b8fjsn5d44b71a293e",
//     "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
