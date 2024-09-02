import React from 'react'
import "./nav.css"

const Nav = () => {
  return (
    <div>
        <nav class="nav-links vh-100 p-3 ">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube Logo"  />
          <a href="#" class="nav-item ">Home</a>
          <a href="#" class="nav-item">Trending</a>
          <a href="#" class="nav-item">Subscriptions</a>
          <a href="#" class="nav-item">Library</a>
          <a href="#" class="nav-item">History</a>
          <a href="#" class="nav-item">Your Videos</a>
          <a href="#" class="nav-item">Watch Later</a>
        </nav>
      
    </div>
  )
}

export default Nav
