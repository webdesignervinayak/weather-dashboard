import React, { useEffect, useState } from 'react'
import { experiences } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addChatMessages } from '../utils/chatSlice';

const ChatBox = () => {
    const dispatch = useDispatch();
    const chatmessages = useSelector((store) => store.chat.chatmessages);

    useEffect(() => {
        const i = setInterval( () => {
            dispatch(addChatMessages(experiences[Math.floor(Math.random() * experiences.length)]))
        },[2000])

        return ( ( ) => clearInterval(i))
    },[])

  return (
    <div>
        <p className='mt-20 border border-white text-center p-2 text-white font-semibold rounded-t-lg'>Share Your Experience Here</p>
        <div className='w-64 h-[27rem] border border-white overflow-y-scroll flex flex-col-reverse'>
        <div className='w-64'>
            {
                chatmessages.map((ex,index) =>
                    <div  key={index} className='bg-slate-100 flex'>
                    <img src="https://png.pngitem.com/pimgs/s/130-1300400_user-hd-png-download.png" alt="user-icon" className='h-12 p-2'/>
                     <p className='p-2 text-sm'>{ex}</p>
                </div>
                )
            }           
        </div>
        </div>
        <div>
            <form className='w-64 h-24 border border-white rounded-b-lg flex' onSubmit={(e) => e.preventDefault()}>
                <textarea rows="2" placeholder='Type your experience here'
                className='m-2 p-2 rounded-md'/>
                <button className='my-2 px-2 bg-blue-900 text-white rounded-md'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default ChatBox