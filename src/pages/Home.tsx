import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosMore } from 'react-icons/io';
import { earningData, SparklineAreaData, ecomPieChartData } from '@/assets/data/data';
import Stacked from '@/components/Charts/Stacked';
import PieChart from '@/components/Charts/PieChart';
import Button from '@/components/Button/Button';
import Sparked from '@/components/Charts/Sparked';
import { useStateContext } from '@/assets/contexts/contextProvider';
import WeatherCard from '@/components/Cards/WeatherCard';
const Home = () => {

  

  return (
    <div className='mt-24 md:mt-12'>

        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
            <WeatherCard />
        </div>

        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
            <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
                {earningData.map((item) => (
                    <div
                        key={item.title}
                        className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
                    >
                        <button
                            type='button'
                            style={{ color: item.iconColor, backgroundColor: item.iconBg}}
                            className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                        >
                            {item.icon}
                        </button>
                        <p className='mt-3'>
                            <span className='text-lg font-semibold'>{item.amount}</span>
                            <span className={`text-sm ${item.pcColor} ml-2`}>{item.percentage}</span>
                        </p>
                        <p className='text-sm text-gray-400 mt-1'>{item.title}</p>

                    </div>
                ))}
            </div>
        </div>
        
        
    </div>
  )
}

export default Home