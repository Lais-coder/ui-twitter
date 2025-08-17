interface TweetProps{
    user: string
    children:string 
}
const tweetStyles ={
    borderRadius:8
}
export function Tweet (props:TweetProps){
    return(
       <div className="tweet" style={tweetStyles}>
        <strong>{props.user}</strong>
        <p>{props.children}</p>
        <button className="butão" style={tweetStyles}>Like</button>
       </div>
    )
    

}