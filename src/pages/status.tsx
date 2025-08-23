import { Sparkle } from "phosphor-react"
import { Tweet } from "../componentes/Tweet"
import './status.css'
import  { useState, type FormEvent } from "react"

export function Status(){
    const [newAnswers, setNewAnswers] = useState('')
    const [answers , setAnswers] = useState ([
        'Concordo...',
        'Olha, faz sentido!',
        'Parabéns pelo progresso!'
      ])
    function createNewAnswer(event: FormEvent){
          event.preventDefault()
          setAnswers([newAnswers  ,...answers ])
          setNewAnswers('')
        }
    return(
        <main className="status">
            <div className="title">Home
            <Sparkle/>  
            </div>  
            <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officia consectetur non eveniet itaque sapiente assumenda alias perspiciatis similique? Quisquam ipsa dignissimos quis vero dolorum a placeat, fugiat nobis illum!"/>
            <div className="separador"></div>
            <form onSubmit={createNewAnswer} className='new-tweet'>
                <label htmlFor="tweet">
                <img src="https://github.com/Lais-coder.png" alt="Foto Usúario" />
                <textarea id='tweet' 
                placeholder="What's happigin?"
                value={newAnswers}  
                onChange={(event) => {
                    setNewAnswers(event.target.value)
                }}
                />
            </label>
            <button type='submit'>Tweet</button>
            </form>
            {answers.map(answer => {
                return <Tweet key={answer} content={answer}/>
            } )}
        </main>
    )
}