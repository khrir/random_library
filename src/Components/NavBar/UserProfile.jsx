import React from 'react'
import './css/UserProfile.css'

const UserProfile = (props) => {
    return (
        <div className='user-profile'>
            <img src={props.url} alt="user profile photo" className='user-photo'/>
            <p className='user-name'>{props.name}</p>
        </div>
    )
}

export default UserProfile