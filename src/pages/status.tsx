import { Sparkle } from "phosphor-react"
import { Tweet } from "../componentes/Tweet"

const answers = [
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso!'
]
export function Status(){
    return(
        <main className="status">
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
            {answers.map(answer =>{
                return <Tweet key={answer} content={answer}/>
            } )}
        </main>
    )
}