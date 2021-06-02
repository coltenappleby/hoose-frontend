import React from 'react';
import { Scatter } from 'react-chartjs-2';

// const rand = () => Math.round(Math.random() * 20 - 10);





function  ScatterChart({allZipCodes}) { 


    const housing_delta = allZipCodes.map((zipCode) => {
        let bothAprils
        if (zipCode["housing_data"]) {
            bothAprils = zipCode["housing_data"].filter((monthInstance) => monthInstance.month === "04")
        } else {
            bothAprils = 0
        }
        let delta
        if(bothAprils.length === 2) { // 
            delta = bothAprils[0]["sales_count"] - bothAprils[1]["sales_count"]
        } else {
            delta = 0 
        }
        return(
            delta
        )
    })
    const job_search_listing_counts = allZipCodes.map((zipCode) => {
        let mostRecent
        if(zipCode["job_searches"].length !== 0){
            mostRecent = zipCode["job_searches"][zipCode["job_searches"].length-1]["number_of_posts"]
        }
        if (mostRecent === undefined){
            mostRecent = null
        }
        return(
            mostRecent
        )
    })
    let cleanData = []

    for(let i = 0; i < housing_delta.length; i++){
        if(housing_delta[i] !== 0 && job_search_listing_counts[i] !== null){
            cleanData.push({x: housing_delta[i], y: job_search_listing_counts[i]})
        }
    }

    console.log(cleanData)

    const data = {
        datasets: [
          {
            label: 'A dataset',
            data: [
              cleanData,
              
            ],
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      };

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    return(
        <div id = "comp-chart-container">
            <div className='header'>
            <h1 className='title'>Scatter Chart</h1>
            <div className='links'>
                <a
                className='btn btn-gh'
                href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Scatter.js'
                >
                Github Source
                </a>
            </div>
            </div>
            <Scatter data={data} options={options} />
        </div>
    )
}

export default ScatterChart;