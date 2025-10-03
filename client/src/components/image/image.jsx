import React from 'react'
import { IKImage } from 'imagekitio-react';

function Image({path, alt, className, w, h}) {
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
        />
    </div>
  )
}

export default Image