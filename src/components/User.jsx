
import { useState, useEffect } from "react";

export default  function User({ user}) {
    const { image, mail, name, title} = user;
    const [likes, setLikes] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
 
    
function handleLike() {
    setLikes(likes + 1);
  }
useEffect(() => {
  if (likes === 10) alert("Du har nået 10 likes!")
}, [likes]);

 return (
    <div className="user-card">
      <img src={image} />
      <h2>{name}</h2>
      <p>Titel: {title}</p>
      <p>Mail: {mail}</p>
      
      <div className="btns">
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={() => setLikes(0)}>Reset likes</button>
      </div>
      <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Skjul" : "Vis"} detaljer</button>
      {showDetails && <div>{"Detaljer"}</div>} 
   </div>


    )
  }
