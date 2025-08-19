import twitterlogo from '../assets/Logo.png'
import {Bell, BookmarkSimple, DotsThreeCircle, Envelope, Hash, House, List, User} from 'phosphor-react'
import  './Sidebar.css'
import { Link } from 'react-router-dom'
export function Sidebar(){
    return(
        <aside className='sidebar'>
        <img className='logo' src={twitterlogo} alt="logo" />
        <nav>
          <ul className='menu'>
            <li><Link to="/" className='logoazul'> <House weight='fill'/> Home</Link></li>
            <li><a href=""> <Hash/> 
              Explore</a></li>
            <li><a href=""> <Bell/>
              Notification</a></li>
            <li><a href=""> <Envelope/>
              Messages</a></li>
            <li><a href=""> <BookmarkSimple/>
              Bookmarks</a></li>
            <li><a href=""> <List/>
              Lists</a></li>
            <li><a href=""> <User/>
              Profile</a></li>
            <li><a href=""> <DotsThreeCircle/>
              More</a></li>
          </ul>
        </nav>
        <button className='newTweet' type='button'>
          Tweet
          </button>
      </aside>
    )
}