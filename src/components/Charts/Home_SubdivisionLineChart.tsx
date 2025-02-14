import React from 'react'
import ReactApexChart from 'react-apexcharts'

// Function to generate day-wise time series data
const generateDayWiseTimeSeries = (baseval: number, count: number, yrange: { min: number, max: number }) => {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = baseval;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x, y });
    baseval += 86400000; // Increment by one day
    i++;
  }
  return series;
}

const Home_SubdivisionLineChart = () => {


    const [state, setState] = React.useState({
          
        series: [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 10, {
            min: 10,
            max: 60
          })
        }],
        options: {
          chart: {
            id: 'fb',
            group: 'social',
            type: 'line' as const,
            height: 360,
            toolbar: {
                show: false,
            }
          },
          colors: ['#008FFB'],
        //   dataLabels: {
        //     enabled: true,
        //   },
        markers: {
            size:7,
        },
        yaxis: {
            
        }
          

        },
      
        seriesLine2: [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 30
          })
        }],
        optionsLine2: {
          chart: {
            id: 'tw',
            group: 'social',
            type: 'line' as const,
            height: 160
          },
          colors: ['#546E7A']
        },
      
        seriesArea: [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
          })
        }],
        optionsArea: {
          chart: {
            id: 'yt',
            group: 'social',
            type: 'area' as 'area',
            height: 160
          },
          colors: ['#00E396']
        },
      
        seriesSmall: [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 10, {
            min: 10,
            max: 12
          })
        }],
        optionsSmall: {
          chart: {
            id: 'ig',
            group: 'social',
            type: 'area' as const,
            height: 160,
            width: 300
          },
          colors: ['#008FFB']
        },
      
        seriesSmall2: [{
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
          })
        }],
        optionsSmall2: {
          chart: {
            id: 'li',
            group: 'social',
            type: 'area' as const,
            height: 160,
            width: 300
          },
          colors: ['#546E7A']
        },
      
    });
    
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-7' id="wrapper">
            <div id="chart-line">
            <ReactApexChart options={state.options} series={state.series} type="line" height={360} />
            </div>
            {/* <div id="chart-line2">
            <ReactApexChart options={state.optionsLine2} series={state.seriesLine2} type="line" height={160} />
            </div>
            <div id="chart-area">
            <ReactApexChart options={state.optionsArea} series={state.seriesArea} type="area" height={160} />
            </div>
            <div className="columns">
                <div id="chart-small">
            <ReactApexChart options={state.optionsSmall} series={state.seriesSmall} type="area" height={160} width={300} />
            </div>
                <div id="chart-small2">
            <ReactApexChart options={state.optionsSmall2} series={state.seriesSmall2} type="area" height={160} width={300} />
            </div>
            </div> */}
            
        </div>
    </div>
  )
}

export default Home_SubdivisionLineChart


