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

            {/* <div id='job-search-results-list'>
                <h3> Job Search Listings </h3>
                {jobSearchItems}
            </div> */}
            <table className="job-search-table">
                <tr>
                    <th>Zip Code</th>
                    <th>search_date</th>
                    <th>number_of_posts</th>
                    <th>remote</th>
                    <th>radius</th>
                    <th>job_type</th>
                    <th>date_posted</th>
                </tr>
                <tbody>
                    {jobSearchTableRows}
                </tbody>
            </table>
            <div id="housing-value-chart-container">
                <button onClick={handleShowChartClick}> {!showChart ? "Show Chart" : "Hide Chart"} </button>
                {showChart && 
                    <LineChartZip zipData = {zipData} />
                }

            </div>


        </div>
    )
}


export default ZipCodeShow;