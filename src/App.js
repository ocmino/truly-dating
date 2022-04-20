import React, { useState } from 'react'
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';


function App() {
  const adminUser = {
    email: "mr@bean.com",
    password: "OnVacation",
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in")
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("Details do not match")
      setError("Felaktiga inloggningsuppgifter")
    }
  }

  const Logout = () => {
    setUser({name: "", email: ""})
  }

  

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          {/* <h2>Välkommen <span>{user.name}</span></h2>  */<button onClick={Logout}>Logout</button>} 
          <Welcome></Welcome>
         
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      ) }
      
    </div>
  );
}

export default App;
