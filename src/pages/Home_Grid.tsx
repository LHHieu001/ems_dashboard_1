import React, { useEffect, useState, useRef, useMemo } from 'react';
import { warningData} from '@/assets/data/data';
import WeatherCard from '@/components/Cards/WeatherCard';
import EventCard from '@/components/Cards/EventCard';
import { Responsive, WidthProvider } from "react-grid-layout";
import { Cursor } from '@/components/Cursor/Cursor';
import Home_GridLayOut from '@/components/Test/Home_GridLayOut';
import SubDivisionCard from '@/components/Cards/SubDivision';
import Home_SubdivisionLineChart from '@/components/Charts/Home_SubdivisionLineChart';
const Home = () => {


    const [openDiv, setOpenDiv] = React.useState(false);
    const toogleDiv = () =>{
        setOpenDiv(prev => !prev)
    }


  return (
    
    <div className='md:mt-12' id="mainDiv">

        <h5 className='font-bold tracking-tight' style={{color: '#14b02c'}}>TRANG TỔNG QUAN</h5>
        
        {/* <div className='flex flex-wrap lg:flex-nowrap justify-center'>
            <WeatherCard />
            <EventCard />
        </div> */}

        <div className='mt-10 overflow-x-scroll scrollbar-hide'>
            <div className='flex flex-row justify-center gap-x-3 items-center xl:min-w-0 py-3'>
                {warningData.map((item) => (
                    <SubDivisionCard props={item} func={toogleDiv}/>
                ))}
            </div>
        </div>
        
        <div className={`${openDiv ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'} mt-5 w-full transition-all duration-300 ease-in-out`}>
            <Home_SubdivisionLineChart />
        </div>

        <Home_GridLayOut />

 
    </div>
  )
}

export default Home