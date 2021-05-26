import React, { useState } from "react";

function FavoriteZipAdd({allZipCodes, addFavZip}) {

    const [errors, setErrors] = useState('')
    const [zipcode, setZipcode] = useState('')

    const user_id = Number(window.sessionStorage.getItem("currentUserId"))

    function handleChange(e){
        setZipcode(Number(e.target.value))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(allZipCodes)
        console.log(zipcode)
        const zip_code_id =  allZipCodes.filter((zipcodeInstance) => zipcodeInstance.zip === zipcode)[0].id
        console.log(zip_code_id)

        fetch(`http://localhost:3000/favorited_zips`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({user_id, zip_code_id})
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if (data.id){
                    addFavZip(data)
                } else {
                    setErrors(data)
                }
            })
    }

    let displayErrors
    if (errors.length > 0) {
        displayErrors = errors.map((error, idx) => <p key={error + idx} style={{color: "red"}}>{error}</p>)
    }

    return(
        <div>
            {errors.length > 0 && <div> {displayErrors} </div>}
            <form onSubmit = {handleSubmit} >
            <label> Add a new favorite Zip code: </label> <br/>
            <input type = "number" name = "zipcode" value = {zipcode} onChange={handleChange}/>
            <input className="login" type="submit" />
            </form>
        </div>
    )
}


export default FavoriteZipAdd;