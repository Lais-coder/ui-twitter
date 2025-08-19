import { Sparkle } from "phosphor-react"
import { Tweet } from "../componentes/Tweet"
import './status.css'
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
            <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officia consectetur non eveniet itaque sapiente assumenda alias perspiciatis similique? Quisquam ipsa dignissimos quis vero dolorum a placeat, fugiat nobis illum!"/>
            <div className="separador"></div>
            <form className='new-tweet'>
                <label htmlFor="tweet">
                <img src="https://github.com/Lais-coder.png" alt="Foto Usúario" />
                <textarea id='tweet' placeholder="What's happigin?"/>
            </label>
            <button type='submit'>Tweet</button>
            </form>
            {answers.map(answer => {
                return <Tweet key={answer} content={answer}/>
            } )}
        </main>
    )
}