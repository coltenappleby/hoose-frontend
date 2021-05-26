import React, { useState } from "react"

function Register() {

    const [username, setUsername] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:3000/users/', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({username})
        })
            .then(res => res.json())
            .then((data) => {
                if(data.id) {
                    window.sessionStorage.setItem("currentUserId", `${data.id}`)
                    // history.pushState("/")
                } else {
                    setErrors(data)
                }
            })
    }

    function handleChange(e) {
        setUsername(e.target.value)
    }

    return(
        <div>
            {}
            <h4> Please register your unique username</h4>
            {errors.length > 0 && <p style ={{color: "red"}}> {errors[0]} </p>}
            <form onSubmit = {handleSubmit} >
                <label> Username: </label> <br/>
                <input type = "text" name = "username" value = {username} onChange={handleChange}/>
                <input className="login" type="submit" />
            </form>
        </div>
    )
}


export default Register;