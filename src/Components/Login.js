import React, {useState} from "react"
import { useHistory } from "react-router-dom"

function Login() {

    const [username, setUserName] = useState([])
    const [errors, setErrors] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loginOrRegister, setLoginOrRegister] = useState("login")

    let history = useHistory()

    function handleChange(e) {
        setUserName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:3000/users/login', {
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
                    setIsLoggedIn(true)
                    // history.pushState("/")
                } else {
                    setErrors(data)
                }
            })

    }

    function handleButton(e) {
        if(loginOrRegister === "login") {
            setLoginOrRegister("register")
        } else {
            setLoginOrRegister("login")
        }
    }
    return(

        <div> 
            {!isLoggedIn && 
            <div className = "LoginFormContainer">
                {errors.length > 0 && <p style ={{color: "red"}}> {errors[0]} </p>}
                <form onSubmit = {handleSubmit} >
                <label> Username: </label> <br/>
                <input type = "text" name = "username" value = {username} onChange={handleChange}/>
                <input className="login" type="submit" />
                </form>
            </div>}
            {/* Renders if the user is logged in  */}
            {isLoggedIn && <p> Thank you for logging in</p>}

            <button onClick = {handleButton}> {loginOrRegister === "login" ? "click here to register" : "click here to login"}</button>

        </div>


    )
}

export default Login;