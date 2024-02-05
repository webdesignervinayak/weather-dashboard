import React, { useEffect, useState } from 'react'
import { API_KEY, defaultLocation } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addLocationDetails } from '../utils/locationSlice'

const SideBar = () => {
    const dispatch = useDispatch()
    const [searchText,setSearchText] = useState("")
    const [locationData,setLocationData] = useState(defaultLocation);

    const getLocationDetails = async () => {
        const data = await fetch("http://api.openweathermap.org/geo/1.0/direct?q="+searchText+"&limit=5&appid="+API_KEY)
        const json = await data.json()
        setLocationData(json[0]);
    }

    useEffect( () => {
        getLocationDetails();
    },[searchText])

  return (
    <div className='bg-blue-800 w-80 h-screen'>
        <form className='pt-20 pl-6' 
        onSubmit={(e) => {
            e.preventDefault();
            dispatch(addLocationDetails(locationData));
        }}>
            <input type="text" placeholder='Enter your location here'
            onChange={ (e) => setSearchText(e.target.value)}
            value={searchText} 
            className='m-2 p-2 rounded-lg'/>
            <button className='bg-gray-400 p-2 rounded-lg'>Search</button>
        </form>

        <div className='pt-10 pl-6'>
            <h1 className='text-3xl font-bold p-2 my-2'>Groups</h1>
            <div className='text-2xl p-4 border border-white rounded-lg mr-3 my-2'>Farmers</div>
            <div className='text-2xl p-4 border border-white rounded-lg mr-3 my-2'>Event Planners</div>
            <div className='text-2xl p-4 border border-white rounded-lg mr-3 my-2'>Travelers</div>
        </div>
    </div>
  )
}

export default SideBar