import { useEffect, useState } from "react";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([]);
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json");
      const data = await response.json();

      setUsers(data);

      setLoading(false);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.lenght === 0) alert("Ingen brugere!");
  }, [users]);

 if (loading){
  return(
    <div className="page">
        <p>Loading...</p>
      </div>
  );
 }
  return (
    <div className="page">
      <h1>Users</h1>
      <section className="grid">
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </section>
    </div>
  );
}

export default App;
