import React, {useEffect, useState } from 'react'
import './Wdashboard.css'
import Navbar from '../components/Navbar'
import { getWeatherData } from '../WeatherService'

const Wdashboard = () => {
  const [weather, setWeather] = useState(null)
  const [city,findCity]=useState('asansol')
  const fetchWeatherData = async () => {
    const data = await getWeatherData(city)
    // console.log(data);
    setWeather(data)
  }
  useEffect(() => {
   
    fetchWeatherData();
  }, [city])
//  console.log(city);

  
  return (
    <>
      <Navbar findCity={findCity} />
  
      {
        weather && (
          <div className="main-container">
        


        <div className="city ">
          <h2 className="city-name">
            <span>{`${weather.name}`}</span>
            <sup>{`${weather.country}`}</sup>
          </h2>
          <div className="city-temp">
          {`${weather.temp.toFixed()}`}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img className="city-icon" src={`${weather.iconURL}`} />
            <p id='disc'>{`${weather.description}`}</p>
          </div>
        </div>

      </div>

        )
      }
      


    </>
  )
}
export default Wdashboard