import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import {Sidebar} from './componentes/Sidebar'
import { Sparkle} from 'phosphor-react'
import { Tweet } from './componentes/Tweet'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>
       <Sidebar/>
      <div className="content">
        <main className="timeline">
          <div className="title">Home
            <Sparkle/>  
          </div>  
          <form className='new-tweet'>
            <label htmlFor="tweet">
              <img src="https://github.com/Lais-coder.png" alt="Foto Usúario" />
              <textarea id='tweet' placeholder="What's happigin?"/>
            </label>
            <button type='submit'>Tweet</button>
          </form>
          <div className="separador"></div>
          
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/> 
          
        </main>
      </div>
    </div>
  </StrictMode>
)
