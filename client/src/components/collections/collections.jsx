import React from 'react'
import './collections.css'
import Image from '../image/Image'

function Collections() {
  return (
    <div className='collections'>
        <div className="collection">
            <Image path="/pins/pin1.jpeg" alt="" />
            <div className="collectInfo">
                <h1 >Home decor</h1>
                <span>20 pins</span>
            </div>
        </div>

        <div className="collection">
            <Image path="/pins/pin2.jpeg" alt="" />
            <div className="collectInfo">
                <h1>Travel</h1>
                <span>15 pins</span>
            </div>
        </div>
        <div className="collection">
            <Image path="/pins/pin3.jpeg" alt="" />
            <div className="collectInfo">
                <h1>Food</h1>
                <span>30 pins</span>
            </div>
        </div>
         <div className="collection">
            <Image path="/pins/pin1.jpeg" alt="" />
            <div className="collectInfo">
                <h1 >Home decor</h1>
                <span>20 pins</span>
            </div>
        </div>

        <div className="collection">
            <Image path="/pins/pin2.jpeg" alt="" />
            <div className="collectInfo">
                <h1>Travel</h1>
                <span>15 pins</span>
            </div>
        </div>
        <div className="collection">
            <Image path="/pins/pin3.jpeg" alt="" />
            <div className="collectInfo">
                <h1>Food</h1>
                <span>30 pins</span>
            </div>
        </div>
    </div>
  )
}

export default Collections