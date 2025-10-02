import React from 'react'
import './topBar.css'
import UserButton from '../userButton/userButton'

function TopBar() {
  return (
    <div className='topBar'>
      {/*Serach*/}
      <div className="searchBar">
        <img src="/general/search.svg" alt="/" />
        <input type="text" placeholder='Search' />
      </div>
      {/*User*/}
      <UserButton />
    </div>
  )
}

export default TopBar