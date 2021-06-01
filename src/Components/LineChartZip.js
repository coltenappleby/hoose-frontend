import React from 'react';
import { Line } from 'react-chartjs-2';


function LineChartZip({zipData}) {
    
    let sum = 0
    for(let i = 0; i < zipData.housing_data.length; i++){sum+=zipData.housing_data[i].sales_count}
    sum = sum/zipData.housing_data.length
    
    let avg_sales_price = [];
    for(var i=0; i<(zipData.housing_data.length); i++){ avg_sales_price.push(sum)}
    
    const data = {
        labels: zipData.housing_data.map((instance) => instance.month+instance.year).reverse(),
        datasets: [
          {
            label: 'Housing_Value',
            data: zipData.housing_data.map((instance) => instance.sales_count).reverse(),
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'blue',
            yAxisID: 'prices',
          },
          {
            label: 'Average Sales Price',
            data: avg_sales_price,
            fill: false,
            backgroundColor: "red",
            borderColor: 'red',
            yAxisID: 'prices',
          },
          {
            label: 'Number of Listings',
            data: zipData.housing_data.map((instance) => instance.avg_price).reverse(),
            fill: false,
            backgroundColor: "green",
            borderColor: 'green',
            yAxisID: 'sales_count',
          }
        ],
    };
    const options = {
        scales: {
          yAxes: [
            {
              type: 'linear',
              display: false,
              position: 'left',
              id: 'prices',
            },
            {
              type: 'linear',
              display: false,
              position: 'right',
              id: 'sales_count',
              gridLines: {
                drawOnArea: false,
              },
            },
          ],
        },
      };

    return(
        <>
            <div className='header'>
            <h1 className='title'>{zipData.zip}'s Housing Data</h1>
            <div className='links'>
            </div>
            </div>
            <Line data={data} options={options} />
        </>
    );
};

export default LineChartZip;