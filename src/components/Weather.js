import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY, defaultWeather } from '../utils/constants';
import { updateWeatherDetails } from '../utils/WeatherSlice';

const Weather = () => {
    const dispatch = useDispatch();
    const locationDetails = useSelector((store) => store.location.locationDetails);
    const [weatherData,setWeatherData] = useState(defaultWeather);
    const [currentDateTime,setCurrentDateTime] = useState(new Date());

    const {weather,main,wind,visibility} = weatherData;

    useEffect( () => {
        getweatherDetails();
    },[locationDetails])

    const getweatherDetails = async() => {
        const data = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+locationDetails.lat+"&lon="+locationDetails.lon+"&appid="+API_KEY+"&units=metric");
        const json = await data.json();
        setWeatherData(json);
        dispatch(updateWeatherDetails(json));
    }

    useEffect( () => {
        const i = setInterval(() => {
            setCurrentDateTime(new Date());
        },1000);

        return( () => clearInterval(i));
    },[])

    const currDate = currentDateTime.toLocaleDateString();
    const currTime = currentDateTime.toLocaleTimeString();

  return (
    <div>
        <div className='mt-10 flex justify-between'>
            <h1 className='font-bold text-4xl'>{locationDetails.name}</h1>
            <ul className='font-semibold'>
                <li>{currDate}</li>
                <li>{currTime}</li>
            </ul>
            
        </div>
        <div className='bg-slate-600 bg-opacity-60 rounded-lg ml-6 mt-4 w-98 p-6'>
            <div className='flex'>
                <img src={"https://openweathermap.org/img/wn/"+weather[0]?.icon+"@2x.png" }
                alt="CloudImage"
                className='w-50 h-25'/>
                <p className='my-8 text-4xl font-bold'>{Math.round(main.temp)} ℃</p>
                <ul className='mx-8 mt-8'>
                    <li className=''>{weather[0].main}</li>
                    <li className=''>Feels like {Math.round(main.feels_like)} ℃</li>
                </ul>
            </div>
            <p className='mx-8 my-2 text-2xl'>{weather[0].description}</p>
            <div className='m-2 text-sm'>
                <span className='my-1 mx-2'>| Visibility : {visibility/1000} Km </span>
                <span className='my-1 mx-2'>| Humidity : {main.humidity} % </span>
                <span className='my-1 mx-2'>| Pressure: {main.pressure} hpa </span>
                <span className='my-1 mx-2'>| Windspeed: {Math.round(wind.speed * 3.6)} kmph </span>
            </div>
            
        </div>
        
    </div>
  )
}

export default Weather