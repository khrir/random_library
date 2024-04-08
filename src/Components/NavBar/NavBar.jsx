import React from 'react'
import './css/NavBar.css'
import { SearchField } from './SearchField'
import Notifications from './Notifications'
import UserProfile from './UserProfile'
import path from '../../../public/icone.jpg'

const NavBar = () => {
    return (
        <div className='navbar'>
            <SearchField/>
            <div className='profile-zone'>
                <Notifications/>
                <UserProfile
                  url = {path}
                  name = "Kaique"
                />
            </div>
        </div>
    )
}

export default NavBar