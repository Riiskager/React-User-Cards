
//Desctructuring inderammer vel bare den data der skal bruges fra "User"?
/*export default function User({ name, mail, image, title }) {
  return (
    <div className="user-card">
      <img src={image} />
      <h2>{name}</h2>
      <p>Titel: {title}</p>
      <p>Mail: {mail}</p>
    </div>
  );
}*/

export default  function User({ user, useState}) {
    const { image, mail, name, title, likes } = user;
    console.log(user)
    const [likes, setLikes] = useState(0);
    
    
 return (
    <div className="user-card">
      <img src={image} />
      <h2>{name}</h2>
      <p>Titel: {title}</p>
      <p>Mail: {mail}</p>
      <p>Likes: {likes}</p>

      <button onClick={() => setLikes(likes + 1)}>Like</button>
      <button onClick={() => setLikes(0)}>Reset likes</button>
      
    </div>
    )
  }
