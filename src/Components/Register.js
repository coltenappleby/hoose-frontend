import React from "react"

function Register() {

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
                    setIsLoggedIn(true)
                    // history.pushState("/")
                } else {
                    setErrors(data)
                }
            })

    }

    return(
        <div>

        </div>
    )
}


export default Register;