import React, { useEffect, useState } from 'react'
import { API_KEY, defaultLocation } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addLocationDetails } from '../utils/locationSlice'

const SideBar = () => {
    const dispatch = useDispatch()
    const [searchText,setSearchText] = useState("karimnagar")
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
        <form className='pt-20 pl-4' 
        onSubmit={(e) => {
            e.preventDefault();
            dispatch(addLocationDetails(locationData));
        }}>
            <input type="text" placeholder='Enter your location here'
            onChange={ (e) => setSearchText(e.target.value)}
            value={searchText} 
            className='m-2 p-2 rounded-lg'/>
            <button className='bg-slate-700 bg-opacity-60 p-2 rounded-lg text-white'>Search</button>
        </form>

        <div className='pt-10 pl-6'>
            <h1 className='text-3xl font-bold p-2 my-2 text-white'>Groups</h1>
            <div className='text-2xl p-4 bg-slate-700 bg-opacity-60 text-white rounded-lg mr-3 my-2'>Farmers</div>
            <div className='text-2xl p-4 bg-slate-700 bg-opacity-60 text-white rounded-lg mr-3 my-2'>Event Planners</div>
            <div className='text-2xl p-4 bg-slate-700 bg-opacity-60 text-white rounded-lg mr-3 my-2'>Travelers</div>
        </div>
    </div>
  )
}

export default SideBar