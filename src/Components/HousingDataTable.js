import React from "react";

function HousingDataTable({housingData}){



    const table = housingData.map((instance) => {
        return(
            <tr key = {instance.year+instance.month}>
                <td>{instance.year}</td>
                <td>{instance.month}</td>
                <td>{instance.sales_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td> 
                <td>{instance.avg_price}</td>
                {/* {sales_count and avg_price were seeded incorrectly} */}
            </tr>
        )
    })


    return (

        <div>
            <table >
                <tr>
                    <th>Year</th>
                    <th>Month</th>
                    <th>Price</th>
                    <th>Count</th>
                </tr>
                {table}
            </table>

        </div>
    )


}


export default HousingDataTable;