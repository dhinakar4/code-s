import { useState } from "react"


 function changes (){
    const[movie,setMovie] = useState("?")
    return (
        <div>
        <h2>The Asia cup was Winning By {movie}</h2>
        <button onClick={() => setMovie('India !')}>Change</button>
        </div>
    )
 } export default changes 