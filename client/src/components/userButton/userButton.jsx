import React, { useState } from 'react'
import './userButton.css'
import Image from '../image/image'

function UserButton() {
    
    const [open, setOpen] = useState(false);
    const currentUser = true;

  return currentUser ? (
    <div className='userButton'>
      <Image path="/general/noAvatar.png" alt="/"  />
      <Image 
      onClick={() => setOpen((prev)=> !prev)} 
      path="/general/arrow.svg" alt="/" className="arrowDown" />
      {open && (
        <div className="userOptions">
        <div className="userOption">Profile</div>
        <div className="userOption">Settings</div>
        <div className="userOption">Logout</div>
      </div>
      )}
    </div>
  ) : (
    <a href="/login" className='loginButtonLink'>
        Login / SignUp
    </a>
  )
};

export default UserButton