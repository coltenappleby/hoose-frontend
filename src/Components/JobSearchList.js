import React, { useEffect, useState } from "react"
import JobSearchTableRow from "./JobSearchTableRow"


function JobSearchList() {
    const [jobSearchData, setJobSearchData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/job_searches`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setJobSearchData(data)})
    }, [])


    const jobSearchTableRows = jobSearchData.map((jobSearchInstance) => { 
        return(
            <JobSearchTableRow {...jobSearchInstance} key = {jobSearchInstance.id}/>
        )
    })


    return(
        <div className="job-search-container">
            <table >
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