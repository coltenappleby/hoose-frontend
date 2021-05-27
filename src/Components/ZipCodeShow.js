import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import HousingDataTable from "./HousingDataTable.js";
import JobSearchItem from "./JobSearchItem.js";



function ZipCodeShow() {

    const [zipData, setZipData] = useState({job_searches: [], housing_data: []})

    let {id} = useParams()

    useEffect(() => {

        fetch(`http://localhost:3000/zip_codes/${id}`)
            .then(res => res.json())
            .then(data => {
                setZipData(data)
            })
    }, [])

    const jobSearchItems = zipData.job_searches.map((oneSearch) => <JobSearchItem {...oneSearch} key={oneSearch.id}/> )

    return(
        <div id='zip-code-show-container'>
            <h1> {zipData.zip}</h1>
            <div id='zip-code-information'>
                <ul>
                    <li> City Name: {zipData.name} </li>
                    <li> Population (if available): {zipData.population ? zipData.population : "NA"} </li>
                    <li> County: {zipData.county} </li>
                    <li> Number of Job Searches: {zipData.job_searches.length} searches </li>
                </ul>
            </div>
            <div id='housing-data-results-list'>
                <h3> House Listings</h3>
                <HousingDataTable housingData = {zipData.housing_data} />
            </div>

            <div id='job-search-results-list'>
                <h3> Job Search Listings </h3>
                {jobSearchItems}
            </div>
            

        </div>
    )
}


export default ZipCodeShow;