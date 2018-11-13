import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";

const API_KEY = "3ddaf3a5ea045a6cbae9286f0f29c6f8";

class App extends React.Component {

gettingWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const api_url = await
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await api_url.json();
  console.log(data);
}

  render() {
    return (
      <div>
        <Info />
        <Form  weatherMethod={this.gettingWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
