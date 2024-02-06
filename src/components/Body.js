import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import ChatBox from './ChatBox'

const Body = () => {
  return (
    <div className="flex">
        <img src="https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="backgroundImage"
        className='w-screen h-screen absolute -z-10'/>
        <SideBar/>
        <MainContainer/>
        <ChatBox/>
    </div>
  )
}

export default Body