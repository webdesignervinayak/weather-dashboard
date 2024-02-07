import React from 'react'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
import clear from"../images/clear.jpg"
import clouds from '../images/clouds.jpg'
import haze from '../images/haze.jpg'
import nature from '../images/nature.jpg'
import rain from '../images/rain.jpg'
import snow from '../images/snow.jpg'
import ChatBox from './ChatBox'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HourlyForecast from './HourlyForecast'
import Weather from './Weather'
import Suggestions from './Suggestions'

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
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element :<div className='flex'>
        <SideBar/>
        <div>
        <Weather/>
        <HourlyForecast/>
        </div>
        <ChatBox/>
        </div>
    },
    {
      path : "/farmers",
      element : <div className='flex'>
        <SideBar/>
        <div>
        <Weather/>
        <Suggestions name="farmers"/>
        </div>
        <ChatBox/>
      </div>
    },
    {
      path : "/eventplanners",
      element : <div className='flex'>
        <SideBar/>
        <div>
        <Weather/>
        <Suggestions name="event planners"/>
        </div>
        <ChatBox/>
      </div>
    },
    {
      path : "/travelers",
      element : <div className='flex'>
        <SideBar/>
        <div>
        <Weather/>
        <Suggestions name="travelers"/>
        </div>
        <ChatBox/>
      </div>
    }
  ])

  return (
      <div className="flex">
      <img
      src={backgroundImage}
      alt="backgroundImage"
      className="w-screen h-screen absolute -z-10"
      />
      <RouterProvider router = {appRouter}/>
      </div>
  )
}

export default Body