import React from 'react'
import './dashboard.css'
import Sidebar from './Components/SideBar Section/Sidebar'
import Body from './Components/Body Section/Body'

const Dashboard = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <Body/>
    </div>
  )
}

export default Dashboard

