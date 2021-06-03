import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import HousingDataTable from "./HousingDataTable.js";
import JobSearchTableRow from "./JobSearchTableRow.js";
import LineChartZip from "./LineChartZip.js";



function ZipCodeShow() {

    const [zipData, setZipData] = useState({job_searches: [], housing_data: []})
    const [showChart, setShowChart] = useState(false)

    let {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/zip_codes/${id}`)
            .then(res => res.json())
            .then(data => {
                setZipData(data)
            })
    }, [])

    console.log(zipData.job_searches)
    
    const jobSearchTableRows = zipData.job_searches.map((jobSearchInstance) => { 
        return(
            <JobSearchTableRow {...jobSearchInstance} key = {jobSearchInstance.id}/>
        )
    })

    function handleShowChartClick(){
        setShowChart(!showChart)
    }

    return(
        <div id='zip-code-show-container'>
            <h1> {zipData.zip}'s Information Page</h1>
            <div id='zip-code-information'>
                <ul>
                    <li> City Name: {zipData.name} </li>
                    <li> Population: {zipData.population ? zipData.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "NA"} </li>
                    <li> County: {zipData.county} </li>
                    <li> Number of Job Searches: {zipData.job_searches.length} searches </li>
                </ul>
            </div>
            <div id='housing-data-table-container'>
                <h3> House Listings</h3>
                <HousingDataTable housingData = {zipData.housing_data} />
            </div>
            <div id="housing-data-chart-container">
                <button onClick={handleShowChartClick}> {!showChart ? "Show Chart" : "Hide Chart"} </button>
                {showChart && 
                    <LineChartZip zipData = {zipData} />
                }
            </div>
            <div className='job-search-container'>
                <h3> Job Searches </h3>
                <table className="job-search-table">
                    <tr>
                        <th>Zip Code</th>
                        <th>Search Date</th>
                        <th>Number of Postings</th>
                        <th>Remote</th>
                        <th>Radius</th>
                        <th>Job Type</th>
                        <th>Date Posted</th>
                        <th>Search Term</th>
                    </tr>
                    <tbody>
                        {jobSearchTableRows}
                    </tbody>
                </table>
            </div>
            


        </div>
    )
}


export default ZipCodeShow;