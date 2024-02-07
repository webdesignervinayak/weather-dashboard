import React, { useEffect, useState } from 'react'
import openai from '../utils/openAi'
import { useSelector } from 'react-redux'

const Suggestions = ({name}) => {
    const weatherDetails = useSelector((store) => store.weather.weatherDetails)
    const [data,setData] = useState("Loading....")

    useEffect( () => {
        if(weatherDetails)
        callOpenAiApi(weatherDetails);
        console.log("GPT API Called");
    },[weatherDetails.name,name])

    const callOpenAiApi = async (weatherDetails) =>{
            const query = "use this data containing weather details :"+weatherDetails+"and make a report of the weather details in 100 words paragraph, such that it helps"+name
            const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        })
        setData(completion?.choices?.[0]?.message?.content);
        
    }

  return (
    <div className='m-3 w-[48rem] text-white'>
        <h1 className='text-3xl font-bold'>Suggestions</h1>
        <div className='bg-slate-700 opacity-70 rounded-lg'>
        <p className='m-4 p-2 font-bold'>{data}</p>
        </div>
    </div>
    
  )
}

export default Suggestions;