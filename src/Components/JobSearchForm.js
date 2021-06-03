import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


function JobSearchForm({zipCodes, setZipCodes}) {
    let history = useHistory()
    const [formData, setFormData] = useState({
        search_term: "",
        remote: false,
        radius: 15,
        job_type: "fulltime",
        experience_level: "",
        date_posted: "7",
        zip_code: '',
        user_id: Number(window.sessionStorage.getItem("currentUserId"))
    })
    const [errors, setErrors] = useState('')

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        //need the zipcode as well for the querey
        // find the zip_code_id
        // then fetch
        // remember to clear the form

        // if(formData.job_type===""){
        //     setFormData((formData) => ({...formData, ["job_type"]: "fulltime"}))
        //     console.log("here")
        // }
        console.log(formData.zip_code.length)
        if(formData.zip_code.length !== 5){
            setErrors(["Not a valid Zip Code"])
        } else {
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
                .then((search) => {
                    if(search){
                        history.push(`/zipcodes/${search.zip_code.id}`)
                    } else {
                        setErrors(search)
                    }
                })

                //history thing to redirect

        }
    }


    let displayErrors
    if (errors.length > 0) {
        displayErrors = errors.map((error, idx) => <p key={error + idx} style={{color: "red"}}>{error}</p>)
    }

            

    return(
        <div id="job-search-form">
            <h1> Search for a Job!</h1>
            <div className='errors' >
                {errors.length > 0 && <div> {displayErrors} </div>}
            </div>
            <form onSubmit={handleSubmit}>

                <label> ZipCode - required: </label> 
                <input type = "text" name = "zip_code" value = {formData.zip_code} onChange={handleChange} placeholder = 'required'/> <br/>

                <label> Search Term - optional: </label>
                <input type = "text" name = "search_term" value = {formData.search_term} onChange={handleChange} placeholder = 'optional'/> <br/>

                <label> Remote - boolean - required: </label>
                <input type = "text" name = "remote" value = {formData.remote} onChange={handleChange}/> <br/>
                {/* <select id="remote" name="remote">
                    <option value={false}> Not Remote </option>
                    <option value={true}> Remote </option>
                </select> */}

                <label> Radius - in miles: </label>
                <input type = "number" name = "radius" value = {formData.radius} onChange={handleChange}/> <br/>

                <label> Job-Type ex. Full-Time: </label>
                <input type = "text" name = "job_type" value = {formData.job_type} onChange={handleChange} placeholder = 'optional - default is full-time'/> <br/>
                {/* <select id="remote" name="remote">
                    <option value={false}> Not Remote </option>
                    <option value={true}> Remote </option>
                </select> */}

                <label> Experience Level - optional: </label> 
                <input type = "text" name = "experience_level" value = {formData.experience_level} onChange={handleChange} placeholder = 'optional'/> <br/>

                <label> Job Posted X days ago: </label> 
                <input type = "text" name = "date_posted" value = {formData.date_posted} onChange={handleChange}/> <br/>

                <input className="login" type="submit" />

            </form>
        </div>
    )

}




export default JobSearchForm;