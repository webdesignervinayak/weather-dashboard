import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { API_KEY } from '../utils/constants';

const HourlyForecast = () => {
    const locationDetails = useSelector((store) => store.location.locationDetails);

    const getHourlyForecastDetails = async() => {
        const data = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+locationDetails.lat+"&lon="+locationDetails.lon+"&appid="+API_KEY);
        const json = await data.json();
        console.log(json)
    }

    useEffect(() => {
        getHourlyForecastDetails();
    },[locationDetails])
  return (
    <div>
        <h1 className='p-2'>Hourly Forecast</h1>
            <div>
                <div className='w-24 h-36 border border-white'>
                </div>
            </div>    
    </div>
  )
}

export default HourlyForecast