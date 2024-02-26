import React, { useEffect, useState } from 'react'

const HourlyForeCastBox = ({data}) => {
        const [formattedDate,setformattedDate] = useState("");
        const [formattedTime,setformattedTime] = useState("");

        useEffect( ( ) => {
            const dateTime = new Date(data?.dt_txt);

            const day = dateTime.getDate();
            const month = dateTime.getMonth() + 1; 
            const hours = dateTime.getHours();
            const minutes = dateTime.getMinutes();

            setformattedDate(`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}`);
            setformattedTime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);

        },[data])

        return (
            <div className='m-2 px-2 w-48 h-70 bg-slate-900 bg-opacity-60 rounded-lg hover:bg-black'>
            <div className='p-1 text-center'>
                <p className='border-b-2 pb-1 mx-4 text-sm'>{formattedDate}</p>
                <p className='border-b-2 pb-1 mx-4 text-sm font-bold'>{formattedTime}</p>
            </div>
            <div className='text-center'>
                <img src={"https://openweathermap.org/img/wn/"+ data.weather[0]?.icon+"@2x.png"} alt="CloudImage"
                className='w-20 h-15 mx-12'/>
                <p className='text-3xl font-bold my-4'>{Math.round(data.main.temp)} ℃</p>
            </div>
            <span className='text-xs py-2'>| 👁️{data.visibility/1000} Km </span>
            <span className='text-xs py-2'>| 💧{data.main.humidity} % </span>
            <span className='text-xs py-2'>| 🕛{Math.round(data.wind.speed * 3.6)} kmph</span>
            <span></span>
        </div>)
}

export default HourlyForeCastBox;