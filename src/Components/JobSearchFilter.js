import React from "react";



function JobSearchFilter({searchTerm, setSearchTerm}) {

    function handleChange(e){
        setSearchTerm(e.target.value)
    }

    const filterPlaceholder = "Enter a zipcode"


    return(
        <div className="filter-container">
            <label>Search Zip Codes</label>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder={filterPlaceholder} />
        </div>
    )
}






export default JobSearchFilter;