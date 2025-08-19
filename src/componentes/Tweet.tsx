import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'

interface TweetPropos{
    content: string
}

export function Tweet (props: TweetPropos){
    return (
        <a href="" className="tweet">
        <img src="https://github.com/Lais-coder.png" alt="Foto de perfil" />
        <div className="tweet-content">
            <header>
                <strong>Lais Lima</strong>
                <span>@laisscl</span>
            </header>
            <p> {props.content}
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