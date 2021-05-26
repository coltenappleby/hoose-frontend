import React, {useEffect, useState} from "react";



function ZipCodeList({zipCodes, setZipCodes}) {

    // const [zipCodes, setZipCodes] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/zip_codes')
    //         .then(res => res.json())
    //         .then(zipData => setZipCodes(zipData))
    // }, [] )

    // const zipCodeCards = zipCodes.map((zip) => {
    //     return(
    //         <ZipCodeCard {...zip} key = {zip.id+zip.name} />
    //     )
    // })

    const zipCodeCards = zipCodes.map((zipcodeInstance) => {
        return(
            <div key = {zipcodeInstance.id}> 
                Zip Code = {zipcodeInstance.zip}
                Name = {zipcodeInstance.name}
                Population = {zipcodeInstance.population}
                {/* State = {state ? state : "not available"} */}
                County = {zipcodeInstance.county ? zipcodeInstance.county : "not available"}
            </div>
        )
    })
    

    return (
        <>
        <h1>ZipCode List</h1>

        <div>
            {zipCodeCards}
        </div>

        </>
    )

}

export default ZipCodeList;