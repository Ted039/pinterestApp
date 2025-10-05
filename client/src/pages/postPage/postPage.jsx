import React from 'react'
import './postPage.css'
import Image from '../../components/image/image'
import PostInteraction from '../../components/postInteractions/postInteraction'
import { Link } from 'react-router-dom'
import Comment from '../../components/comments/comment'


function PostPage() {
  return (
    <div className="postPage">
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        style={{cursor:"pointer"}}
      >
        <path d="M8.41 4.59a2 2 0 1 1 2.83 2.83L7.66 10H21a1 1 0 0 1 0 2H7.66l3.58 3.58a2 2 0 1 1-2.83 2.83l-6-6a2 2 0 0 1 0-2.83l6-6z"></path>
      </svg>


      <div className="postContainer">
        <div className="postImage">
          <Image path="/pins/pin1.jpeg" alt="Post" w={736}/>
        </div>
        <div className="postDetails">
          <PostInteraction />
          <Link to="/john" className="postUser">
            <Image path="/general/noAvatar.png" alt="User" />
            <span>John Doe</span>
          </Link>
          <Comment />
        </div>

      </div>
    </div>
  )
}

export default PostPage