
import { useState } from "react";

export default  function User({ user}) {
    const { image, mail, name, title} = user;
    console.log(user);
    const [likes, setLikes] = useState(0);

function handleLike() {
    setLikes(likes + 1);
  }

  
 return (
    <div className="user-card">
      <img src={image} />
      <h2>{name}</h2>
      <p>Titel: {title}</p>
      <p>Mail: {mail}</p>
      <p>Likes: {likes}</p>
      <div className="btns">
        <button onClick={handleLike}>Like ({likes})</button>
      </div>
    </div>
    )
  }
