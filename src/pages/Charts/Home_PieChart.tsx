import React from 'react'
import ReactApexChart from 'react-apexcharts'


const Home_PieChart = () => {

    const [state, setState] = React.useState({
          
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut' as 'donut',
          },
          
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
            //   legend: {
            //     position: 'bottom'
            //   }
            }
          }]
        },
      
      
    });

  return (
    <div className='w-full'>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="donut" />
        </div>
    </div>
  )
}

export default Home_PieChart