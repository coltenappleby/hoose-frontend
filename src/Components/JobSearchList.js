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
                console.log(data)
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
            <div className="job-search-list-filter-container">
                <br/>
                <JobSearchFilter searchTerm= {searchTerm} setSearchTerm ={setSearchTerm} />
            </div>
            <br/>
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
        </div>
    )
}

export default JobSearchList;