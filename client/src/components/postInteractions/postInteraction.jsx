import React from 'react'
import './postInteraction.css'
import Image from '../image/image'

function PostInteraction() {
  return (
    <div className="postInteractions">
        <div className="postIcons">
            <Image path="/general/react.svg" alt=""/>
            200
            <Image path="/general/share.svg" alt=""/>
            <Image path="/general/more.svg" alt=""/>
        </div>
        <button className="btn">
            Save
        </button>
    </div>
  )
}

export default PostInteraction