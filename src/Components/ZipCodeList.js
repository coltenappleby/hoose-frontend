import React, {useState} from "react";
import ZipCodeFilter from "./ZipCodeFilter";
import { Link } from 'react-router-dom'



function ZipCodeList({zipCodes, setZipCodes}) {

    const [searchTerm, setSearchTerm] = useState('')

    const filteredZipCodes = zipCodes.filter((zipcodeInstance) => zipcodeInstance.zip.toString().includes(searchTerm.toString()))

    const zipCodeCards = filteredZipCodes.map((zipcodeInstance) => {
        return(
            <tr>
                <td><Link to={`/zipcodes/${zipcodeInstance.id}`}>{zipcodeInstance.zip} </Link></td>
                <td>{zipcodeInstance.name}</td>
                <td>{zipcodeInstance.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                <td>{zipcodeInstance.county ? zipcodeInstance.county : "NA"}</td>
            </tr>
        )
    })

    return (
        <div id="zip-code-list-container">
            <h1>All Zip Codes</h1>
            <div id="zip-code-filter-container">
               <ZipCodeFilter searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
            </div>
            <div>
                <table>
                    <tr>
                        <th>Zip Code</th>
                        <th>City Name</th>
                        <th>Population</th>
                        <th>County</th>
                    </tr>
                    <tbody>
                        {zipCodeCards}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ZipCodeList;