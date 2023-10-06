import "./App.css";
// import BackgroundLayout from "./Components/BackgroundLayout/BackgroundLayout";
import Navbar from "./Components/Navbar/Navbar";
import WeatherMain from "./Components/WeatherMain/WeatherMain";

function App() {
  return (
    <div className="App">
      {/* //   <div id="navbar">
    //     <div id="logo">
    //       <h2>WEATHER APP</h2>
    //     </div>
    //     <div id="search-bar">
    //       <input type="text" placeholder="search mumbai.." />
    //     </div>
    //   </div> */}
      <Navbar></Navbar>
      {/* <BackgroundLayout></BackgroundLayout> */}
      <WeatherMain></WeatherMain>
    </div>
  );
}

export default App;
