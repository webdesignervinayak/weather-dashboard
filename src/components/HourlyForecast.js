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


    //console.log(hourlyDetails);

  return (
    <div>
        <h1 className='mt-4 p-2 text-slate-700'>Hourly Forecast</h1>
        <div className='flex overflow-x-auto no-scrollbar'>
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