import React from 'react'
import "./nav.css"
import { FaHistory } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

const Nav = () => {
  return (
    <div>
        <nav class="nav-links vh-100 p-3 ">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube Logo"  />
          <a href="#" class="nav-item "> <i class="fa-solid fa-house pe-3"></i>Home</a>
          <a href="#" class="nav-item"> <i class="fa-solid fa-video pe-3"></i>Shorts</a>
          <a href="#" class="nav-item"> <div className='pe-3'><MdOutlineSubscriptions /></div> Subscriptions</a>
          <a href="#" class="nav-item"><i class="fa-solid fa-book pe-3"></i> Library</a>
          <a href="#" class="nav-item"> <div className='pe-3'><FaHistory /></div>  History</a>
          <a href="#" class="nav-item"> <div className='pe-3'><MdOutlineVideoLibrary /></div> Your Videos</a>
          <a href="#" class="nav-item"> <div className='pe-3'><MdOutlineWatchLater /></div> Watch Later</a>
        </nav>
      
    </div>
  )
}

export default Nav
