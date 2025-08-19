import { Sparkle } from "phosphor-react"
import { Tweet } from "../componentes/Tweet"
import './timeline.css'
const tweets = [
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!'
]
export function Timeline(){
    return(
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
          
          {tweets.map(tweet =>{
            return <Tweet key={tweet} content={tweet}/>
          } 
          )}
        </main>
    )
}