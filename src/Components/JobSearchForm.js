import React, { useState } from "react";

function JobSearchForm({zipCodes, setZipCodes}) {
    const [formData, setFormData] = useState({
        search_term: "",
        remote: false,
        radius: 15,
        job_type: "fulltime",
        experience_level: "",
        date_posted: "7",
        zip_code: 0,
        user_id: Number(window.sessionStorage.getItem("currentUserId"))
        
    })

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(window.sessionStorage.getItem("currentUserId"))
    }

    function handleSubmit(e){
        e.preventDefault()
        //need the zipcode as well for the querey
        // find the zip_code_id
        // then fetch
        // remember to clear the form

        const zip_code_id = zipCodes.filter( (item) => item.zip === Number(formData.zip_code))[0].id

        fetch(`http://localhost:3000/job_searches`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({...formData, zip_code_id,})
        })
            .then(res => res.json())
            .then(console.log)

            //history thing to redirect

    }

    return(
        <div id="job-search-form">
            <h1> Search for a Job!</h1>
            <form onSubmit={handleSubmit}>

                <label> ZipCode - required: </label> 
                <input type = "number" name = "zip_code" value = {formData.zip_code} onChange={handleChange}/> <br/>

                <label> Search Term - optional: </label>
                <input type = "text" name = "search_term" value = {formData.search_term} onChange={handleChange}/> <br/>

                <label> Remote - boolean - required: </label>
                <input type = "text" name = "remote" value = {formData.remote} onChange={handleChange}/> <br/>

                <label> Radius - in miles: </label>
                <input type = "number" name = "radius" value = {formData.radius} onChange={handleChange}/> <br/>

                <label> Job-Type ex. Full-Time: </label>
                <input type = "text" name = "job_type" value = {formData.job_type} onChange={handleChange}/> <br/>

                <label> Experience Level - optional: </label> 
                <input type = "text" name = "experience_level" value = {formData.experience_level} onChange={handleChange}/> <br/>

                <label> Job Posted X days ago - default is alwasy 7 days: </label> 
                <input type = "text" name = "date_posted" value = {formData.date_posted} onChange={handleChange}/> <br/>

                <input className="login" type="submit" />

            </form>
        </div>
    )

}




export default JobSearchForm;