import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'

export function Tweet (){
    return (
        <a href="" className="tweet">
        <img src="https://github.com/Lais-coder.png" alt="Foto de perfil" />
        <div className="tweet-content">
            <header>
                <strong>Lais Lima</strong>
                <span>@laisscl</span>
            </header>
            <p>
                Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br /> 
                ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br />
                ✅ npm build: De 120s para 22s <br />
                Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
            </p>
            <footer>
                <button>
                    <ChatCircle/>
                    20
                </button>
                <button>
                    <ArrowsClockwise/>
                    20
                </button>
                <button>
                    <Heart/>
                    20
                </button>
            </footer>
        </div>
        </a>
    )
}