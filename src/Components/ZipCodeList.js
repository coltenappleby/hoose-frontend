import React, {useEffect, useState} from "react";
import ZipCodeCard from "./ZipCodeCard.js"



function ZipCodeList() {

    const [zipCodes, setZipCodes] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/zip_codes')
            .then(res => res.json())
            .then(zipData => setZipCodes(zipData))
    }, [] )

    const zipCodeCards = zipCodes.map((zip) => {
        return(
            <ZipCodeCard {...zip} key = {zip.id+zip.name} />
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