import Search from './components/search/search';
import './App.css';
import Weather from './components/weather/weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';
import Forecast from './components/Forecast/forecast';
function App() {

  const [currentweather, setCurrentweather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleonsearchchange = (searchData) => {

    const [lat, lon] = searchData.value.split(" ");

    const currentweatherfetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    const Forecastfetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentweatherfetch, Forecastfetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentweather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

 


  return (
    <div className="font-bold max-w-5xl my-5 mx-auto  ">
      <Search onsearchchange={handleonsearchchange} />

      {currentweather && <Weather data={currentweather} />}

      {forecast && <Forecast data= {forecast}/>}

    </div>
  );
}

export default App;
