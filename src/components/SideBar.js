import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addLocationDetails } from '../utils/locationSlice'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const dispatch = useDispatch()
    const [searchText,setSearchText] = useState("")
    const [locationData,setLocationData] = useState({});

    const getLocationDetails = async () => {
        const data = await fetch("http://api.openweathermap.org/geo/1.0/direct?q="+searchText+"&limit=5&appid="+API_KEY)
        const json = await data.json()
        setLocationData(json[0]);
    }

    useEffect( () => {
        getLocationDetails();
    },[searchText])

  return (
    <div className='w-76 h-screen'>
        <Link to="/"><h1 className='mx-4 mt-4 mb-10 font-extrabold text-white text-xl hover:text-black cursor-pointer'>☁️ Weather DashBoard</h1></Link>
        <form className='pt-15 pl-4' 
        onSubmit={(e) => {
            e.preventDefault();
            dispatch(addLocationDetails(locationData));
        }}>
            <input type="text" placeholder='Enter your location here'
            onChange={ (e) => setSearchText(e.target.value)}
            value={searchText} 
            className='m-2 p-2 rounded-lg outline-none'/>
            <button className='bg-slate-700 bg-opacity-60 p-2 rounded-lg text-white cursor-pointer hover:bg-black'>Search</button>
        </form>

        <div className='pt-10 pl-6'>
            <Link to="/"><div className='text-2xl p-4 bg-slate-700 bg-opacity-60 text-white rounded-lg mr-3 my-2 hover:bg-black'>🏠 Home</div></Link>
            <h1 className='text-3xl font-bold p-2 my-2 text-white'>Groups</h1>
            <Link to="/farmers"><div className='text-2xl p-4 bg-slate-700 bg-opacity-60 text-white rounded-lg mr-3 my-2 hover:bg-black'>🌾 Farmers</div></Link>
            <Link to="/eventplanners"><div className='text-2xl p-4 bg-slate-700 bg-opacity-60 text-white rounded-lg mr-3 my-2 hover:bg-black'>🪩 Event Planners</div></Link>
            <Link to="/Travelers"><div className='text-2xl p-4 bg-slate-700 bg-opacity-60 text-white rounded-lg mr-3 my-2 hover:bg-black'>🚗 Travelers</div></Link>
        </div>
    </div>
  )
}

export default SideBar