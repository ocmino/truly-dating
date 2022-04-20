import React, { useState } from 'react'

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({name: "", email: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Truly</h2>
                {(error != "") ? ( <div className="error">{error}</div> ) : ""}
              {/*   <div class="form-group">
                    <label htmlFor="email"></label>             
                    <input type="text" name="name " id="name" placeholder="Namn" onChange={e => setDetails({...details, name: e.target.value})}  value={details.name}></input>  
                </div> */}
                <div class="form-group">
                    <label htmlFor="email"></label>             
                    <input type="email" name="email" id="btnSize" style={{color: '#6A6A6A'}} placeholder="E-post" onChange={e => setDetails({...details, email: e.target.value})}  value={details.email}></input>  
                </div>
                <div class="form-group">
                  <label htmlFor="password"></label>
                  <input type="password" name="password" id="btnSize" style={{color: '#6A6A6A'}} placeholder="Lösenord" onChange={e => setDetails({...details, password: e.target.value})}  value={details.password}></input>
                </div>
                <input id="btnSize" className="button" type="submit" value="Logga in"></input>
            </div>
        </form>
    )
}

export default LoginForm;


