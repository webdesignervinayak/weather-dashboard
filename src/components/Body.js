import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import ChatBox from './ChatBox'
import { useSelector } from 'react-redux'
import clear from"../images/clear.jpg"
import clouds from '../images/clouds.jpg'
import haze from '../images/haze.jpg'
import nature from '../images/nature.jpg'
import rain from '../images/rain.jpg'
import snow from '../images/snow.jpg'

const Body = () => {
  const weatherDetails = useSelector((store) => store.weather.weatherDetails);
  const weatherType = weatherDetails?.weather[0]?.main

  let backgroundImage;

  switch (weatherType) {
    case 'Clear':
      backgroundImage = clear;
      break;
    case 'Clouds':
      backgroundImage = clouds;
      break;
    case 'Haze':
      backgroundImage = haze;
      break;
    case 'Rain':
      backgroundImage = rain;
      break;
    case 'Snow':
      backgroundImage = snow;
      break;
    default:
      backgroundImage = nature;
  }
  return (
    <div className="flex">
      <img
      src={backgroundImage}
      alt="backgroundImage"
      className="w-screen h-screen absolute -z-10"
      />
      <SideBar/>
      <MainContainer/>
      <ChatBox/>
    </div>
  )
}

export default Body