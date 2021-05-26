import React, { useEffect, useState } from "react"
import JobSearchItem from "./JobSearchItem"


function JobSearchList() {
    const [jobSearchData, setJobSearchData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/job_searches`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setJobSearchData(data)})
    }, [])

    const jobSearchItems = jobSearchData.map((oneSearch) => <JobSearchItem {...oneSearch} key={oneSearch.id}/> )

    return(
        <div>{jobSearchItems}</div>
    )
}

export default JobSearchList;