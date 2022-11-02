import React, { useEffect, useState } from 'react'
import './Wforcast.css'
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import Navbar from '../components/Navbar'
import { getWeatherData } from '../WeatherService'
const Wforcast = () => {
  const tempUnit = '℃'
  const windUnit = 'm/s'
  const [weather, setWeather] = useState(null)
  const [city,findCity]=useState()

  const fetchWeatherData = async () => {
    const data = await getWeatherData(city)
    // console.log(data);
    setWeather(data)
  }
  useEffect(() => {
   
    fetchWeatherData();
  }, [city])



  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather&&weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather&&weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather&&weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather&&weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather&&weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: weather&&weather.speed.toFixed(),
      unit: windUnit,
    },
  ];

  // console.log(cards);


  return (
    <>
      <Navbar findCity={findCity} />
      
     
     

      <div className="section section__descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>

    </>
  )
}

export default Wforcast