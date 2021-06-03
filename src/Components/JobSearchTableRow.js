import React from "react";
import { Link } from 'react-router-dom'


function JobSearchTableRow({id, number_of_posts, search_date, zip_code, remote, radius, job_type, experience_level, date_posted, search_term}) {

    return(

        <tr>
            <td><Link to={`/zipcodes/${zip_code.id}`}>{zip_code.zip} </Link> </td>
            <td>{search_date}</td>
            <td>{number_of_posts}</td>
            <td>{remote}</td>
            <td>{radius}</td>
            <td>{job_type}</td>
            <td>{date_posted}</td>
            <td>{search_term}</td>
        </tr>
    )
}

export default JobSearchTableRow;