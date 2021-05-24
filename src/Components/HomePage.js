import React, { useState } from "react"
import Login from "./Login.js";

function HomePage() {

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
        </div>



    )

}

export default HomePage;