import React, { useState, useEffect } from "react"

function UserShow() {

    const [renderChangeUsername, setRenderChangeUsername] = useState(false) //what a horrible name! give me '?'
    const [userData, setUserData] = useState({})
    const [username, setUsername] = useState('')

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/users/${window.sessionStorage.getItem("currentUserId")}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data)
                setUsername(data.username)
                console.log(data)
            })
    }, [])

    function handleUsernameChange(e){
        setUsername(e.target.value)

    }

    function handleUsernameChangeSubmit(e){

        fetch(`http://127.0.0.1:3000/users/${window.sessionStorage.getItem("currentUserId")}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username})
        })
        .then(res => res.json())
        .then(data => {
            setUserData(data)
        })
    }

    function handleButtonClick(e) {
        setRenderChangeUsername(!renderChangeUsername)
    }

    return(
        <div id="profile-page">
            <div> 
                <h1> {userData.username}'s Profile</h1>
            </div>

            <div> 
                <button onClick={handleButtonClick}> Click here to change your username</button>
                {renderChangeUsername && 
                    <div> 
                        <h4> Select a new username </h4>
                        <form onSubmit = {handleUsernameChangeSubmit} >
                        <label> Username: </label> <br/>
                        <input type = "text" name = "username" value = {username} onChange={handleUsernameChange}/>
                        <input className="login" type="submit" />
                        </form>
                    </div>}
            </div>
        </div>
    )
}

export default UserShow;