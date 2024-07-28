import Search from './components/search/search';
import './App.css';
import Weather from './components/weather/weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState,useEffect } from 'react';
import Forecast from './components/Forecast/forecast';
// import { LIGHT_URL,DARK_URL } from './api';

function App() {

  // const [ThemeIMG,SetThemeIMG] = useState(LIGHT_URL);
  //   const [Theme,SetTheme] = useState("light");

  //   useEffect(()=>{
  //       if(Theme === "dark"){
  //           document.documentElement.classList.add("dark");
  //       }else{
  //           document.documentElement.classList.remove("dark");
  //       }
  //   },[Theme]);

  //   const handleThemeSwith = ()=>{
  //       SetTheme(Theme === "dark" ? "light" : "dark");
  //       if(Theme === 'dark'){
  //           SetThemeIMG(LIGHT_URL);
  //       }
  //       else{
  //           SetThemeIMG(DARK_URL);

  //       }
  //   }

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

  <div >
      <div className="font-bold max-w-5xl my-5 mx-auto  ">
      <Search onsearchchange={handleonsearchchange} />
      
      {currentweather && <Weather data={currentweather} />}

      {forecast && <Forecast data= {forecast}/>}
    </div>
    {/* <div className='flex'>
        <div className="" onClick={()=>handleThemeSwith()}>
              <img alt='button' className="w-[50px] h-[25px]" src={ThemeIMG}></img>
        </div>
    </div> */}
</div>
  );
}

export default App;
