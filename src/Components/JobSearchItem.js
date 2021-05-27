import React from "react";

function JobSearchItem({id, remote, search_term, radius, job_type, experience_level, date_posted, number_of_posts, user, search_date, zip_code}) {

    return(
        <div id="job-search-item">
            <h4> Search Count: {number_of_posts} </h4>
            <p> Search Parameters: 
                <ul>
                    <li> Searched on: {search_date}</li>
                    <li> ZipCode: {zip_code.zip} </li>
                    <li>Remote: {remote === true ? "remote" : "not-remote"} </li>
                    {search_term !== null && <li>Search Term: {search_term} </li>}
                    <li>Radius: {radius} miles</li>
                    <li>Job Type: {job_type} </li>
                    {experience_level !== null && <li>Job Experience Level: {experience_level} </li>}
                    <li>Job Posted in the last: {date_posted} days </li>
                    {user && <li>User: {user.username} </li> }
                </ul>
            </p>
        </div> 

        // asdfjhlaskjdf
        // <tr key = {id}>
        //         <td>{number_of_posts}</td>
        //         <td>{remote}</td>
        //         <td>{radius}</td> 
        //         <td>{job_type}</td>
        //         <td>{date_posted}</td>
        //         <td>{user}</td>
        // </tr>
    )
}

export default JobSearchItem;