import { Sparkle } from "phosphor-react"
import { Tweet } from "../componentes/Tweet"
import './timeline.css'
import { useState, type FormEvent } from "react"

let newTweet = ''
export function Timeline(){
  const [tweets , setTweets] = useState ([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!'
  ])
    function createNewTweet(event: FormEvent){
      event.preventDefault()
      setTweets([newTweet  ,...tweets ])
    }
    return(
         <main className="timeline">
          <div className="title">Home
            <Sparkle/>  
          </div>  
          <form onSubmit={createNewTweet} className='new-tweet'>
            <label htmlFor="tweet">
              <img src="https://github.com/Lais-coder.png" alt="Foto Usúario" />
              <textarea 
              id='tweet' 
              placeholder="What's happigin?" 
              onChange={(event) => {
                newTweet = event.target.value
              }} 
              />
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