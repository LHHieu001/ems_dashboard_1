import React from 'react'
import { FaRegSmile } from "react-icons/fa";
import ReactApexChart from 'react-apexcharts'
import { IoIosWarning } from "react-icons/io";
import { IoPieChartSharp } from "react-icons/io5";


const Home_LineChart = () => {
    const [state, setState] = React.useState({
          
        series: [{
            name: "Số lượng cảnh báo",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 150, 100, 200]
        }],

        options: {
          chart: {
            height: 350,
            type: "line" as const,
            zoom: {
              enabled: false
            }
          },
          forecastDataPoints: {
            count: 3
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "straight" as const,
            colors: ["#ec4899"],
          },
        //   title: {
        //     text: 'Product Trends by Month',
        //     align: 'left' as const
        //   },
          grid: {
            column: {
              colors: ['#f1f5f9', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            tickAmount: 9,
            tickPlacement: 'between',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          }
        },
      
      
    });

    

    return (
      <div className=''>
        
        <div className='w-full border-b-2'>
             <div className='w-full flex flex-col gap-y-3 xl:flex-row xl:justify-between items-center py-1 px-2'>
                    <div className='flex items-center gap-x-3'>
                        <IoPieChartSharp className='text-white bg-green-500 h-fit w-fit text-2xl p-1 rounded-full '/>
                        <p className='text-lg font-bold'>Thống kê tổng số lượng cảnh báo theo thời gian</p>
                    </div>

                    <div className='flex items-center gap-x-5'>
                        <p className='p-2 rounded-lg text-base text-gray-400 font-semibold hover:bg-[#e8f4ec] hover:text-[#189c24] hover:cursor-pointer'>Daily</p>
                        <p className='p-2 rounded-lg text-base text-gray-400 font-semibold hover:bg-[#e8f4ec] hover:text-[#189c24] hover:cursor-pointer'>Weekly</p>
                        <p className='p-2 rounded-lg text-base text-gray-400 font-semibold hover:bg-[#e8f4ec] hover:text-[#189c24] hover:cursor-pointer'>Monthly</p>
                    </div>
                    
              </div>
        </div>

        <div className='w-full flex flex-row'>
          <div id="chart" className='w-full xl:w-[82%]'>
              <ReactApexChart options={state.options} series={state.series} type="line" height={600} />
          </div>
          
          <div className='w-[18%] border-l-2 p-1.5 flex flex-col items-center'>

              <div className='bg-[#e8f4ec] w-fit rounded-3xl drop-shadow-lg flex flex-col h-4/6 justify-evenly'>
            
                <div className='flex flex-col gap-y-1 border-b-2 p-2'>
                    <p className='text-4xl font-bold'>200</p>
                    <p className='text-gray-600 text-sm'>Tổng số cảnh báo</p>
                </div>
                <div className='flex flex-col gap-y-1 border-b-2 p-2'>
                    <p className='text-4xl font-bold'>170</p>
                    <p className='flex items-center gap-x-2 text-gray-600 text-sm'><div className='w-3 h-3 rounded-md bg-green-500' />Chỉ số 1</p>
                </div>
                <div className='flex flex-col gap-y-1 p-2'>
                    <p className='text-4xl font-bold'>30</p>
                    <p className='flex items-center gap-x-2 text-gray-600 text-sm'><div className='w-4 h-4 rounded-md bg-pink-500' />Chỉ số 2</p>
                </div>
            
              </div>

              {/* <div className='flex flex-col'>
                <p className='ml-3 flex items-center gap-x-3 font-bold mt-3'> 
                    <FaRegSmile className='text-4xl rounded-full p-2 bg-green-50 text-green-600' /> You're doing good!
                </p>
                <p className='ml-3 text-sm text-gray-500 mt-1'>Hiệu suất xử lý cảnh báo tăng 12% so với cùng kỳ tháng trước</p>
              </div> */}
              

          </div>
        </div>

        
        
      </div>
    );
}

export default Home_LineChart