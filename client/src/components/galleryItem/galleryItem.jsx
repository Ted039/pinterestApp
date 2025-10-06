import React from 'react'
import './galleryItem.css'
import { Link } from 'react-router-dom'
import Image from '../image/Image'



function GalleryItem({item}) {
  const height = (372 * item.height) / item.width;
  return (
    <div className='galleryItem' 
    style={{gridRowEnd: `span ${Math.ceil(item.height / 100)}`}}
    >
      {/* <Image path={item.media} alt="/" /> */}
      <Image 
        path={item.media} 
        alt=""
        w={372}
        h={height}
      />
      <Link to={`/pin/${item.id}`} className='overlay'/>
      <button className='galsave'>Save</button>
      <div className="overlayIcons">
        <button>
          <Image path="/general/share.svg" alt="" />
        </button>
        <button>
          <Image path="/general/more.svg" alt="" />
        </button>
      </div>
      
    </div>
  )
}

export default GalleryItem