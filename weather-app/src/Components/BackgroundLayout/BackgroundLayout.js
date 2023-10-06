// import React, { useContext, useEffect, useState } from "react";
// import { weatherContext } from "../Context/WeatherContext";
// import "./BackgroundLayout.css";

// import Clear from "../Assets/Images/Clear.jpg";
// import Cloudy from "../Assets/Images/Cloudy.jpg";
// import Fog from "../Assets/Images/fog.png";
// import Rainy from "../Assets/Images/Rainy.jpg";
// import Snow from "../Assets/Images/snow.jpg";
// import Stormy from "../Assets/Images/Stormy.jpg";
// import Sunny from "../Assets/Images/Sunny.jpg";

// const BackgroundLayout = () => {
//   const { weather } = useContext(weatherContext);
//   const [image, setImage] = useState(Clear);

//   // console.log(weather, "weather from backgroundLayout");

//   useEffect(() => {
//     if (weather.conditions) {
//       let imageURL = weather.conditions;

//       if (imageURL.toLowerCase().includes("clear")) {
//         setImage(Clear);
//       } else if (imageURL.toLowerCase().includes("cloud")) {
//         setImage(Cloudy);
//       } else if (
//         imageURL.toLowerCase().includes("rain") ||
//         imageURL.toLowerCase().includes("shower")
//       ) {
//         setImage(Rainy);
//       } else if (imageURL.toLowerCase().includes("snow")) {
//         setImage(Snow);
//       } else if (imageURL.toLowerCase().includes("fog")) {
//         setImage(Fog);
//       } else if (
//         imageURL.toLowerCase().includes("thunder") ||
//         imageURL.toLowerCase().includes("storm")
//       ) {
//         setImage(Stormy);
//       } else {
//         setImage(Sunny);
//       }
//     }
//   }, [weather]);

//   return (
//     <div id="background-image">
//       <img src={image} alt="weather-background" />
//     </div>
//   );
// };

// export default BackgroundLayout;
