import React, {useState} from "react";
import ZipCodeFilter from "./ZipCodeFilter";
import { Link } from 'react-router-dom'



function ZipCodeList({zipCodes, setZipCodes}) {

    const [searchTerm, setSearchTerm] = useState('')

    const filteredZipCodes = zipCodes.filter((zipcodeInstance) => zipcodeInstance.zip.toString().includes(searchTerm.toString()))

    const zipCodeCards = filteredZipCodes.map((zipcodeInstance) => {
        return(
                <li key = {zipcodeInstance.id}> 
                    <Link to={`/zipcodes/${zipcodeInstance.id}`}> Zip Code = {zipcodeInstance.zip} </Link>
                    -- Name = {zipcodeInstance.name}
                    Population = {zipcodeInstance.population}
                    {/* State = {state ? state : "not available"} */}
                    County = {zipcodeInstance.county ? zipcodeInstance.county : "not available"}
                </li>
        )
    })

    return (
        <div id="zip-code-list-container">
            <h1>ZipCode List</h1>
            <div id="zip-code-filter-container">
               <ZipCodeFilter searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
            </div>
            <div id="zip-code-list">
                <ul>
                    {zipCodeCards}
                </ul>
            </div>
        </div>
    )
}

export default ZipCodeList;