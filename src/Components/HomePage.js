import React, { useState } from "react"
import JobSearchForm from "./JobSearchForm.js";
import Login from "./Login.js";
import { Link } from 'react-router-dom';


function HomePage({setZipCodes, zipCodes}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)


    return(
        <div>
            <div>
                <h1> Welcome to Hoose!! </h1>
            </div>
            {(!window.sessionStorage.getItem("currentUserId")) ?
                <div>
                    <Login isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
                </div> 
                :
                <div>
                    <Link to={`/users/${window.sessionStorage.getItem("currentUserId")}`}> Click Here to View your profile </Link>
                    <div id="job-search-form-container">
                        <JobSearchForm setZipCodes = {setZipCodes} zipCodes = {zipCodes} /> 
                    </div> 
                </div>
            }
        </div>



    )

}

export default HomePage;