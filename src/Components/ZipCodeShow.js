import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'



function ZipCodeShow() {

    const [zipData, setZipData] = useState([])

    let {id} = useParams()

    useEffect(() => {

        fetch(`http://localhost:3000/zip_codes/${id}`)
            .then(res => res.json())
            .then(data => {
                setZipData(data)
            })
    }, [])

    return(
        <div id='zip-code-show-container'>
            <h1> {zipData.zip}</h1>
            <div id='zip-code-information'>
                <p> City Name: {zipData.name} </p>
                <p> Population (if available): {zipData.population ? zipData.population : "NA"} </p>
                <p> County: {zipData.county} </p>
            </div>
            <div id='job-search-results-list'></div>
            <div id='home-value-results-list'></div>

        </div>
    )
}


export default ZipCodeShow;