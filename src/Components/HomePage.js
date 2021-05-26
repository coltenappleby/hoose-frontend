import React, { useState } from "react"
import JobSearchForm from "./JobSearchForm.js";
import Login from "./Login.js";

function HomePage({setZipCodes, zipCodes}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)


    return(
        <div>
            <div>
                Welcome to Hoose!!
            </div>
            {!isLoggedIn &&
            <div>
                <Login isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
            </div> }
            <div id="job-search-form-container">
               <JobSearchForm setZipCodes = {setZipCodes} zipCodes = {zipCodes} /> 
            </div>
        </div>



    )

}

export default HomePage;