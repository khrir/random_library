import React from 'react'
import Item from './Item'
import './css/SideBar.css'
import { FaRegHeart, FaMagic } from 'react-icons/fa'
import { IoHomeOutline, IoLibraryOutline } from "react-icons/io5";
import { FiBookOpen } from 'react-icons/fi'
import { BiCategory } from 'react-icons/bi'

function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-logo">
                <IoLibraryOutline size={25} className='logo-icon'/>
                <h2>Library</h2>
            </div>

            <div className="sidebar-items">
                <ul>
                    <Item href="#" icon = {<IoHomeOutline/>} title = 'Home' />
                    <Item href="#" icon = {<BiCategory/>} title = 'Category' />
                    <Item href="#" icon = {<FiBookOpen/>} title = 'My library' />
                    <Item href="#" icon = {<FaRegHeart/>} title = 'Favourite' />
                    <Item href="#" icon = {<FaMagic/>} title = 'Maroto' />
                </ul>
            </div>

        </div>
    )
}

export default SideBar