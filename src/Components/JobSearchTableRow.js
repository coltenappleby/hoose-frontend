import React from "react";

function JobSearchTableRow({id, number_of_posts, search_date, zip_code, remote, radius, job_type, experience_level, date_posted}) {

    return(

        <tr>
            <td>{zip_code.zip}</td>
            <td>{search_date}</td>
            <td>{number_of_posts}</td>
            <td>{remote}</td>
            <td>{radius}</td>
            <td>{job_type}</td>
            <td>{date_posted}</td>
        </tr>
    )
}

export default JobSearchTableRow;