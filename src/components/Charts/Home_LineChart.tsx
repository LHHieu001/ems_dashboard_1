import React from 'react'
import { FaRegSmile } from "react-icons/fa";
import ReactApexChart from 'react-apexcharts'
import { IoIosWarning } from "react-icons/io";


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
      <div className='grid grid-cols-12'>
        
        <div className='col-span-12'>
             <div className='w-full flex flex-row justify-between items-center p-5 border-b-2'>
                    <div className='flex items-center gap-x-3'>
                        <IoIosWarning className='text-white bg-green-500 text-4xl p-1 rounded-full'/>
                        <p className='text-lg font-bold'>Thống kê tổng số lượng cảnh báo theo thời gian</p>
                    </div>

                    <div className='flex items-center gap-x-5'>
                        <p className='p-2 rounded-lg text-base text-gray-400 font-semibold hover:bg-green-200 hover:text-green-600 hover:cursor-pointer'>Daily</p>
                        <p className='p-2 rounded-lg text-base text-gray-400 font-semibold hover:bg-green-200 hover:text-green-600 hover:cursor-pointer'>Weekly</p>
                        <p className='p-2 rounded-lg text-base text-gray-400 font-semibold hover:bg-green-200 hover:text-green-600 hover:cursor-pointer'>Monthly</p>
                    </div>
                    
                </div>
        </div>
        <div id="chart" className='col-span-9'>
            <ReactApexChart options={state.options} series={state.series} type="line" height={500} />
        </div>
        
        <div className='col-span-3 w-full border-l-2 p-2.5'>
            <div className='m-2 bg-emerald-50 dark:bg-emerald-200 rounded-tr-lg rounded-tl-lg rounded-br-3xl rounded-bl-3xl drop-shadow-lg'>
                <div className='w-full flex flex-col gap-y-5 p-3 ml-3'>
                    <div className='flex flex-col gap-y-1 pb-5 border-b-2'>
                        <p className='text-5xl font-bold'>200</p>
                        <p className='text-gray-600'>Tổng số cảnh báo</p>
                    </div>
                    <div className='flex flex-col gap-y-1 pb-5 border-b-2'>
                        <p className='text-5xl font-bold'>170</p>
                        <p className='flex items-center gap-x-2 text-gray-600'><div className='w-4 h-4 rounded-md bg-green-500' />Chỉ số 1</p>
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <p className='text-5xl font-bold'>30</p>
                        <p className='flex items-center gap-x-2 text-gray-600'><div className='w-4 h-4 rounded-md bg-pink-500' />Chỉ số 2</p>
                    </div>
                </div>
            </div>
            <p className='ml-3 flex items-center gap-x-3 font-bold mt-3'> 
                <FaRegSmile className='text-4xl rounded-full p-2 bg-green-50 text-green-600' /> You're doing good!
            </p>
            <p className='ml-3 text-sm text-gray-500 mt-1'>Hiệu suất xử lý cảnh báo tăng 12% so với cùng kỳ tháng trước</p>
        </div>
        
      </div>
    );
}

export default Home_LineChart