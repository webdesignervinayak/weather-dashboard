import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY } from '../utils/constants';
import { updateHourlyDetails } from '../utils/WeatherSlice';
import HourlyForeCastBox from './HourlyForeCastBox';

const HourlyForecast = () => {
    const dispatch = useDispatch();
    const locationDetails = useSelector((store) => store.location.locationDetails);
    const hourlyDetails = useSelector((store) => store.weather.hourlyDetails);
    //const [hourlyData,setHourlyData] = useState(null)

    const getHourlyForecastDetails = async() => {
        const data = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+locationDetails.lat+"&lon="+locationDetails.lon+"&appid="+API_KEY+"&units=metric");
        const json = await data.json();
        //setHourlyData(json);
        dispatch(updateHourlyDetails(json));
    }

    useEffect(() => {
        getHourlyForecastDetails();
    },[locationDetails])

    const scrollLeft = () => {
        const container = document.getElementById('hourly-forecast-container');
        if (container) {
            container.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        const container = document.getElementById('hourly-forecast-container');
        if (container) {
            container.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    };


    //console.log(hourlyDetails);

  return (
    <div className='w-[48rem] px-4 text-white'>
        <div className=' flex justify-between w-[46rem]'>
        <h1 className='mt-4 p-2 text-slate-700 font-bold text-2xl'>Hourly Forecast</h1>
        <div className='flex mt-4'>
                <button className='p-2 mx-2 bg-slate-600 bg-opacity-60 text-white rounded-full' onClick={scrollLeft}>{'<'}</button>
                <button className='p-2 mx-2 bg-slate-600 bg-opacity-60 text-white rounded-full' onClick={scrollRight}>{'>'}</button>
        </div>
        </div>
        <div className='flex overflow-x-scroll no-scrollbar' id="hourly-forecast-container">
        <div className='flex'>
        {
            hourlyDetails.list.map( (l) => <HourlyForeCastBox key={l.dt} data={l}/> )       
        } 
        </div>

        </div>   
    </div>
  )
}

export default HourlyForecast