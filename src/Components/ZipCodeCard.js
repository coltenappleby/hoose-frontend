import React from "react"


function ZipCodeShow({zip, name, population, state, county}) {


    return (
        <> 
        <div> 
            Zip Code = {zip}
            Name = {name}
            Population = {population}
            {/* State = {state ? state : "not available"} */}
            County = {county ? county : "not available"}
        </div>
        </>
    )
}


export default ZipCodeShow;