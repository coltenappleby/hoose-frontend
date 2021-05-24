import React, { useState, useEffect } from "react"

function UserShow() {

    const [renderChangeUsername, setRenderChangeUsername] = useState(false) //what a horrible name! give me '?'
    const [userData, setUserData] = useState('')

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/users/${window.sessionStorage.getItem("currentUserId")}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data)
                console.log(data)
            })
    }, [])

    function handleUsernameChange(e){
        setUserData({...userData, [userData.username]: e.target.value})
    }

    function handleUsernameChangeSubmit(e){

        fetch(`http://127.0.0.1:3000/users/${window.sessionStorage.getItem("currentUserId")}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            bosy: JSON.stringify({userData})
        })
    }

    return(

        <div> 
            {!renderChangeUsername && <p> Change my username</p>}
            
        </div>
    )
}

export default UserShow;