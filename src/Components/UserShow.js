import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import FavoriteZipAdd from "./FavoriteZipAdd"
import FavoriteZipItem from "./FavoriteZipItem"



function UserShow({allZipCodes}) {

    const [renderChangeUsername, setRenderChangeUsername] = useState(false) //what a horrible name! give me '?'
    const [userData, setUserData] = useState({favorited_zips:[]})
    const [username, setUsername] = useState('')
    let { id } = useParams()


    useEffect(() => {
        fetch(`http://127.0.0.1:3000/users/${window.sessionStorage.getItem("currentUserId")}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data)
                setUsername(data.username)
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

    function removeFavZip(id){
        const filteredFavZips = userData.favorited_zips.filter((zip) => zip.id !== id)
        setUserData({...userData, [userData.favorited_zips]: filteredFavZips})
        console.log(userData)

    }
    function addFavZip(favoriteZipObject){
        const favZips = {...userData.favorited_zips, favoriteZipObject}
        setUserData({...userData, [userData.favorited_zips]: favZips})
        console.log(userData)
    }

    const favoriteZipItems = userData.favorited_zips.map((zipData) => {
        return(
            <FavoriteZipItem 
                zipData = {zipData} 
                allZipCodes = {allZipCodes} 
                removeFavZip = {removeFavZip} 
                key={zipData.id}
            />
        )
    })


    return(
        <>
        {window.sessionStorage.getItem("currentUserId") === id ?
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
                <div id="job_searches-container">
                    {/* < JobSearchList /> */}
                </div>
                <div id="favorite-zip-container">
                    <FavoriteZipAdd allZipCodes= {allZipCodes} addFavZip = {addFavZip}/>
                    {favoriteZipItems}
                </div>
            </div>
        : <h1> Invalid address </h1>} </>
    )
}

export default UserShow;