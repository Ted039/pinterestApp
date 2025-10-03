import React from 'react'
import './topBar.css'
import UserButton from '../userButton/userButton'
import Image from '../image/image'

function TopBar() {
  return (
    <div className='topBar'>
      {/*Serach*/}
      <div className="searchBar">
        <Image path="/general/search.svg" alt="/" />
        <input type="text" placeholder='Search' />
      </div>
      {/*User*/}
      <UserButton />
    </div>
  )
}

export default TopBar