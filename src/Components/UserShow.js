import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import FavoriteZipAdd from "./FavoriteZipAdd";
import FavoriteZipItem from "./FavoriteZipItem";
import JobSearchTableRow from "./JobSearchTableRow";



function UserShow({allZipCodes}) {

    const [renderChangeUsername, setRenderChangeUsername] = useState(false) //what a horrible name! give me '?'
    const [userData, setUserData] = useState({favorited_zips:[], job_searches:[]})
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
        setUserData({...userData, favorited_zips: filteredFavZips})
    }
    function addFavZip(favoriteZipObject){
        const favZips = [...userData.favorited_zips, favoriteZipObject]
        setUserData({...userData, favorited_zips: favZips})
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


    const jobSearchTableRows = userData.job_searches.map((jobSearchInstance) => { 
        return(
            <JobSearchTableRow {...jobSearchInstance} key = {jobSearchInstance.id}/>
        )
    })


    return(
        <>
        {window.sessionStorage.getItem("currentUserId") === id ?
            <div id="profile-page">
                <div> 
                    <h1> {userData.username}'s Profile Page</h1>
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

                <div id="favorite-zip-container">
                <h3> {userData.username}'s Saved Zip Codes </h3>
                    <FavoriteZipAdd allZipCodes= {allZipCodes} addFavZip = {addFavZip}/>
                    <ul> {favoriteZipItems} </ul>
                </div>
                <div className="job-search-container">
                    <h3>Job Searches </h3>
                    <table >
                        <tr>
                            <th>Zip Code</th>
                            <th>search_date</th>
                            <th>number_of_posts</th>
                            <th>remote</th>
                            <th>radius</th>
                            <th>job_type</th>
                            <th>date_posted</th>
                            <th>Search Term</th>
                        </tr>
                        <tbody>
                            {jobSearchTableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        : <div> <h1> Invalid address </h1> </div>} </>
    )
}

export default UserShow;

