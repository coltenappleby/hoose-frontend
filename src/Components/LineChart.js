import React from 'react';
import { Line } from 'react-chartjs-2';
import {useEffect, useState} from "react";

// const data = {
//   labels: ['1', '2', '3', '4', '5', '6'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       fill: false,
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgba(255, 99, 132, 0.2)',
//     },
//   ],
// };


function LineChart() {
    
    const [zipData, setZipData] = useState({job_searches: [], housing_data: []})
    
    useEffect(() => {
        fetch(`http://localhost:3000/zip_codes/${110}`)
        .then(res => res.json())
        .then(data => {
            setZipData(data)
        })
    }, [])
    
    let national_average_value = 540000
    let national_average_value_list = [];
    for(var i=0; i<(zipData.housing_data.length); i++){ national_average_value_list.push(national_average_value)}
    
    // let zip_average_value = [];
    // let prices = zipData.housing_data.map((instance) => instance.sales_count);

    // for(var i=0; i<(zipData.housing_data.length); i++){ zip_average_value.push(national_average_value)}
    // get the average and create another line
   

    const data = {
        labels: zipData.housing_data.map((instance) => instance.month+instance.year).reverse(),
        datasets: [
          {
            label: 'Housing_Value',
            data: zipData.housing_data.map((instance) => instance.sales_count).reverse(),
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'blue',
          },
          {
            label: 'National_Average',
            data: national_average_value_list,
            fill: false,
            backgroundColor: "red",
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        //   {
        //     label: 'Zip_Code_Average',
        //     data: average_list,
        //     fill: false,
        //     backgroundColor: "red",
        //     borderColor: 'rgba(255, 99, 132, 0.2)',
        //   }
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
        <>
            <div className='header'>
            <h1 className='title'>Line Chart</h1>
            <div className='links'>
                <a
                className='btn btn-gh'
                href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
                >
                Github Source
                </a>
            </div>
            </div>
            <Line data={data} options={options} />
        </>
    );
};

export default LineChart;