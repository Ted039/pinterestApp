import React from 'react'
import './userProfilePage.css'
import Image from '../../components/image/Image'
import Gallery from '../../components/gallery/Gallery'
import Collections from '../../components/collections/collections'

function UserProfilePage() {
  const [type, setType] = React.useState("created")
  return (
    <div className='userProfilePage'>
      <Image className = "profileImg" w={100} h={100} path="/general/noAvatar.png" alt=""/>
      <h1 className="profileName">Teddy wils</h1>
      <span className="profileUsername">@teddywils</span>
      <div className="followCounts">10 followers . 20 following</div>
      <div className="profileInteractions">
        <Image className = "interactionIcon" path="/general/share.svg" alt=""/>
        <div className="profileBtn">
          <button className="followBtn">Follow</button>
          <button className="messageBtn">Message</button>
        </div>
        <Image className = "interactionIcon" path="/general/more.svg" alt=""/>
      </div>
      <div className="profileOpt">
        <span onClick={()=> setType("created")} className={type ==="created" ? "active" : ""}>Created</span>
        <span onClick={()=> setType("saved")} className={type === "saved" ? "active" : ""}>Saved</span>
      </div> 
      {type === "created" ? <Gallery /> : <Collections/>}
    </div>
  )
}

export default UserProfilePage