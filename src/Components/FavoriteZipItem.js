import React from "react";
import { Link } from 'react-router-dom';

function FavoriteZipItem({zipData, allZipCodes, removeFavZip}) {

    // zipData is the favorite zip code in question 
    // looks like this:
    // {
    //     id: 7,
    //     user_id: 46,
    //     zip_code_id: 91,
    //     created_at: "2021-05-25T17:13:28.752Z",
    //     updated_at: "2021-05-25T17:13:28.752Z"
    // }
    // allZipCodes are all of the zip codes that are in the system


    function handleDelete(e) {
        fetch(`http://localhost:3000/favorited_zips/${zipData.id}`, {method: 'DELETE'})
        removeFavZip(zipData.id)
    } 
  
    // const willTheRealZipCodePleaseStandUp = allZipCodes.filter(zipCode => zipCode.id === zipData.zip_code_id)[0]
    // const willTheRealZipCodePleaseStandUp = zipData

    return(
        <li>
            {zipData && <li> <Link to={`/zipcodes/${zipData.zip_code_id}`}> {zipData.zip}</Link> <button onClick={handleDelete}>🗑️</button> </li>}
        </li>
    )
}
// 🗑️

export default FavoriteZipItem;