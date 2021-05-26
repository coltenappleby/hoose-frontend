import React from "react";

function JobSearchItem({id, remote, search_term, radius, job_type, experience_level, date_posted, number_of_posts, user}) {

    return(
        <div id="job-search-item">
            <h4> Search Count: {number_of_posts} </h4>
            <h5> Search Parameters: 
                <li>
                    <ul>Remote: {remote === true ? "remote" : "not-remote"} </ul>
                    {search_term !== null && <ul>Search Term: {search_term} </ul>}
                    <ul>Radius: {radius} miles</ul>
                    <ul>Job Type: {job_type} </ul>
                    {experience_level !== null && <ul>Job Experience Level: {experience_level} </ul>}
                    <ul>Job Posted in the last: {date_posted} days </ul>
                    <ul>User: {user.username} </ul>
                </li>
            </h5>

        </div> 
    )
}

export default JobSearchItem;