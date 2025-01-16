import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { IoIosWarning } from "react-icons/io";

const Home_PieChart = () => {

    const [state, setState] = React.useState({
          
        series: [55, 30, 17],


        
        options: {

            
            labels: ['Aqi', 'Nước cấp', 'Khác'],

            dataLabels: {
                enabled: false,
            },

            chart: {
                type: 'donut' as 'donut',
            },

            colors : 
                ['#16a34a', '#bbf7d0', '#dcfce7']
            ,

            legend: {
                show: false
            },

            plotOptions: {
                pie :{
                    expandOnClick: true,
                    donut: {
                        labels:{
                            show: true,
                            name: {
                                show: true,
                                offsetY: 20,
                                color: '#020617',
                            },
                            value :{
                                show: true,
                                offsetY: -20,
                                fontWeight: 700,
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                fontSize: '20px',
                                color: '#020617',
                              },
                        }
                        
                    }
                }
            }


        
          
          
        //   responsive: [{
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         width: 200
        //       },
        //       legend: {
        //         position: 'bottom'
        //       }
        //     }
        //   }]
        },
      
      
    });

    const getFormattedDate = (): string => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0'); // Ensure 2 digits
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = String(today.getFullYear()); // Get last 2 digits of the year
      
        return `${day}/${month}/${year}`;
      };

  return (
    <div className='w-full flex flex-col gap-y-2 p-3'>

        <div className='w-full flex flex-row items-center p-2 border-b-1 gap-x-2'>
            <IoIosWarning className='text-white bg-green-500 text-4xl p-1 rounded-full'/>
            <p className='text-lg font-bold'>Thống kê cảnh báo theo phân hệ</p>
        </div>
    
        <div className='flex flex-col'>

            <div className='flex flex-row justify-between items-center'>

                <div className='flex flex-col'>
                    <p className='text-lg font-semibold'>Cập nhật cuối</p>
                    <p className='text-gray-400 text-xs'>{getFormattedDate()}</p>
                </div>

                <button className='p-3 text-base rounded-lg bg-green-100 text-green-500 font-bold hover:shadow-lg' onClick={() => {}}>
                    View Report
                </button>

            </div>

            <div>
                <ReactApexChart options={state.options} series={state.series} height={200} type="donut" />
            </div>

            <div className='flex flex-row mt-2 gap-x-2 border-b-1 pb-2'>
                <p className='border-1 py-1 px-1 rounded-lg flex flex-1 flex-row items-center gap-x-2 text-xs font-bold'>
                    <div style={{ backgroundColor: '#16a34a'}} className='h-3 w-3 rounded-full'/>
                    Aqi (60%)
                </p>
                <p className='border-1 py-1 px-1 rounded-lg flex flex-row items-center gap-x-2 text-xs font-bold'>
                    <div style={{ backgroundColor: '#bbf7d0'}} className='h-3 w-3 rounded-full'/>
                    Nước cấp (30%)
                </p>
                <p className='border-1 py-1 px-1 rounded-lg flex flex-1 flex-row items-center gap-x-2 text-xs font-bold'>
                    <div style={{ backgroundColor: '#dcfce7'}} className='h-3 w-3 rounded-full'/>
                    Khác (10%)
                </p>
            </div>

            <div className='flex flex-col mt-1 p-2'>
                <p className='font-bold'>Các phân hệ khác</p>
                <div className='flex flex-col mt-1'>
                    
                    <div className='flex flex-row h-2 gap-x-1'>
                        <div style={{ width: '27%', backgroundColor: '#ec4899' }} className='rounded-lg'/>
                        <div style={{ width: '40%', backgroundColor: '#3b82f6' }} className='rounded-lg'/>
                        <div style={{ width: '24%', backgroundColor: '#10b981' }} className='rounded-lg'/>
                        <div style={{ width: '9%', backgroundColor: '#7c3aed' }} className='rounded-lg'/>
                    </div>

                    <div className='flex flex-col gap-y-3 mt-4'>

                        <div className='flex flex-row justify-between items-center'>
                            <p className='flex flex-row gap-x-2 text-sm font-bold items-center'>
                                <div style={{backgroundColor: '#ec4899' }} className='h-3 w-3 rounded-full'/>
                                Nước ngầm
                            </p>

                            <p className='flex flex-row gap-x-3 items-center'>
                                <p className='font-bold'>21</p>
                                <p className='text-green-500 bg-green-100 rounded-full text-xs p-1'>27%</p>
                            </p>
                        </div>

                        <div className='flex flex-row justify-between items-center'>
                            <p className='flex flex-row gap-x-2 text-sm font-bold items-center'>
                                <div style={{backgroundColor: '#3b82f6' }} className='h-3 w-3 rounded-full'/>
                                Nước thải
                            </p>

                            <p className='flex flex-row gap-x-3 items-center'>
                                <p className='font-bold'>64</p>
                                <p className='text-green-500 bg-green-100 rounded-full text-xs p-1'>40%</p>
                            </p>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='flex flex-row gap-x-2 text-sm font-bold items-center'>
                                <div style={{backgroundColor: '#10b981' }} className='h-3 w-3 rounded-full'/>
                                Nước mặt loại A
                            </p>

                            <p className='flex flex-row gap-x-3 items-center'>
                                <p className='font-bold'>18</p>
                                <p className='text-green-500 bg-green-100 rounded-full text-xs p-1'>16%</p>
                            </p>
                        </div>

                        <div className='flex flex-row justify-between items-center'>
                            <p className='flex flex-row gap-x-2 text-sm font-bold items-center'>
                                <div style={{backgroundColor: '#7c3aed' }} className='h-3 w-3 rounded-full'/>
                                AQI - 1a
                            </p>

                            <p className='flex flex-row gap-x-3 items-center'>
                                <p className='font-bold'>8</p>
                                <p className='text-green-500 bg-green-100 rounded-full text-xs p-1'>8%</p>
                            </p>
                        </div>

                    </div>


                </div>
            </div>

        </div>
        

        


    </div>
  )
}

export default Home_PieChart