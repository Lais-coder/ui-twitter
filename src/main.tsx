import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import twitterlogo from './assets/Logo.png'
import {Bell, BookmarkSimple, DotsThreeCircle, Envelope, Hash, House, List, Sparkle, User} from 'phosphor-react'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img className='logo' src={twitterlogo} alt="logo" />
        <nav>
          <ul className='menu'>
            <li><a href="" className='logoazul'> <House weight='fill'/> Home</a></li>
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
     
      <div className="content">
        <main className="timeline">
          <div className="title">Home
            <Sparkle/>  
          </div>  
          <form className='new-tweet'>
            <label htmlFor="tweet">
              <img src="https://github.com/Lais-coder.png" alt="Foto Usúario" />
              <textarea id='tweet' placeholder="What's happigin"/>
            </label>
            <button type='submit'>Tweet</button>
          </form>
        </main>
      </div>
      
    </div>
  </StrictMode>,
)
