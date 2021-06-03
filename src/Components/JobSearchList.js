import React, { useEffect, useState } from "react"
import JobSearchTableRow from "./JobSearchTableRow.js"
import JobSearchFilter from "./JobSearchFilter.js";


function JobSearchList() {
    const [jobSearchData, setJobSearchData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/job_searches`)
            .then(res => res.json())
            .then(data => {
                setJobSearchData(data)})
    }, [])

    const filteredSearches = jobSearchData.filter((jobSearchInstance) => jobSearchInstance.zip_code.zip.toString().includes(searchTerm))

    const jobSearchTableRows = filteredSearches.map((jobSearchInstance) => { 
        return(
            <JobSearchTableRow {...jobSearchInstance} key = {jobSearchInstance.id}/>
        )
    })





    return(
        <div className="job-search-container">
            <h1> All Job Searches </h1>
            <div className="job-search-list-filter-container">
                <br/>
                <JobSearchFilter searchTerm= {searchTerm} setSearchTerm ={setSearchTerm} />
            </div>
            <br/>
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
    )
}

export default JobSearchList;