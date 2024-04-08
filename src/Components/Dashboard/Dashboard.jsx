import React from 'react'
import NavBar from '../NavBar/NavBar'
import "./css/Dashboard.css"
import RecommendedSection from './RecommendedSection'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <NavBar/>
        <div className="content">
            <RecommendedSection/>
        </div>

    </div>
  )
}

export default Dashboard