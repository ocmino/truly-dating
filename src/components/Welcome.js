import React, { useState } from 'react'

function Welcome({ Login, error }) {

    const [details, setDetails] = useState({ name: "", email: "", password: "" })

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler} className="welcome-page">
            <div>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <h1>Välkommen till Truly</h1>

                <div>
                    <p>För att interagera med våra användare behöver du först lära dig mer om dig själv genom att göra ett test. <br /><br />
                        Testet är baserat på forskning om anknytningsteori och mäter den ambivalenta samt undvikande dimensionen. Läs mer här.
                        <br /><br />
                        Testet tar ca 5 min att göra.
                    </p>
                </div>
                <input class="button" type="submit" value="Gör testet"></input>

            </div>
        </form>
    )
}

export default Welcome;


