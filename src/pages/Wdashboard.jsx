import React, {useEffect, useState } from 'react'
import './Wdashboard.css'
import Navbar from '../components/Navbar'
import { getWeatherData } from '../WeatherService'

const Wdashboard = () => {
  const [weather, setWeather] = useState(null)
  const [city,findCity]=useState('asansol')
  const [bg,setBg]=useState('https://wallpapercave.com/wp/wp7260934.jpg')
  const fetchWeatherData = async () => {
    const data = await getWeatherData(city)
    // console.log(data);
    setWeather(data)
    if(data.temp>=20){
      setBg('https://wallpapercave.com/wp/wp7260934.jpg')
    }
    else if(data.temp<25&&data.temp>15){
      setBg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NZMfh62xwJWhW6gSolEuUa2ugjeEUEXnOg&usqp=CAU')
    }
    else if(data.temp<=15){
      setBg('https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/111798556-565x376-1-5102d44ede42632f8b80b83ccde7e7a1.jpg')
    }
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
          <div className="main-container" style={{backgroundImage:`url(${bg})`}}>
        


        <div className="city vert-move">
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