import React from 'react'
import './comment.css'
import Image from '../image/image'

function Comment() {
  return (
    <div className="comments">
        <div className="commentList">
            <span className="commentCount">5 comments</span>
            <div className="comment">
                <Image path="/general/noAvatar.png" alt="User" />

                <div className="commentDetails">
                    <span className="commentAuthor">John Doe</span>
                    <p className="commentText">This is a sample comment.</p>
                    <span className="commentTime">2 hours ago</span>
                </div>
            </div>
            <div className="comment">
                <Image path="/general/noAvatar.png" alt="User" />
                <div className="commentDetails">
                    <span className="commentAuthor">Jane Smith</span>
                    <p className="commentText">Another comment here!</p>
                    <span className="commentTime">1 hour ago</span>
                </div>
            </div>
            <div className="comment">
                <Image path="/general/noAvatar.png" alt="User" />
                <div className="commentDetails">
                    <span className="commentAuthor">Alice Johnson</span>
                    <p className="commentText">Great post!</p>
                    <span className="commentTime">30 minutes ago</span>
                </div>
            </div>
            <div className="comment">
                <Image path="/general/noAvatar.png" alt="User" />
                <div className="commentDetails">
                    <span className="commentAuthor">Bob Brown</span>
                    <p className="commentText">Thanks for sharing.</p>
                    <span className="commentTime">15 minutes ago</span>
                </div>
            </div>
            <div className="comment">
                <Image path="/general/noAvatar.png" alt="User" />
                <div className="commentDetails">
                    <span className="commentAuthor">Charlie Davis</span>
                    <p className="commentText">Interesting read.</p>
                    <span className="commentTime">5 minutes ago</span>
                </div>
            </div>
        </div>
        <form className="commentForm">
            <input type="text" placeholder='Add a comment' />
            <div className="emoji">
                <div>🙂</div>
            </div>
        </form>
    </div>
    
  )
}

export default Comment