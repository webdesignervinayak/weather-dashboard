import React, { useEffect, useState } from 'react'
import openai from '../utils/openAi'
import { useSelector } from 'react-redux'

const Suggestions = ({name}) => {
    const weatherDetails = useSelector((store) => store.weather.weatherDetails)
    const [data,setData] = useState("Loading....")

    useEffect( () => {
        if(weatherDetails)
        callOpenAiApi(weatherDetails);
    },[weatherDetails.name,name])

    const callOpenAiApi = async (weatherDetails) =>{
            const query = "use the data containing weather details :"+weatherDetails+"make a report of the weather details for"+ name +"in 75 words paragraph,make sure the paragraph contains some weather details like temperature,visibility,wind speed etc.., that data information should be useful to the"+name+"for there daily works"
            const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        })
        setData(completion?.choices?.[0]?.message?.content);
        
    }

  return (
    <div className='m-3 w-[48rem] text-white'>
        <h1 className='text-3xl font-bold text-slate-700'>Suggestions - {name}</h1>
        <div className='bg-slate-700 opacity-70 rounded-lg hover:bg-black'>
        <p className='m-4 p-2 font-bold'>{data}</p>
        </div>
    </div>
    
  )
}

export default Suggestions;