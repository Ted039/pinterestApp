import React from 'react'
import { IKImage } from 'imagekitio-react';

function Image({path, alt, className, w, h, onClick}) {
  return (
    <div>
        <IKImage
        urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
        path={path}
        transformation={[{ 
          width: w,
          height: h,
          
          // height: Math.ceil(item.height / 100) * 100, 
        }]}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
        alt={alt}
        className={className}
        onClick={onClick}
        />
    </div>
  )
}

export default Image