import React, { useEffect, useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosMore } from 'react-icons/io';
import { GoDotFill } from "react-icons/go";
import { warningData, SparklineAreaData, ecomPieChartData } from '@/assets/data/data';
import Stacked from '@/components/Charts/Stacked';
import Button from '@/components/Button/Button';
import Sparked from '@/components/Charts/Sparked';
import { useStateContext } from '@/assets/contexts/contextProvider';
import WeatherCard from '@/components/Cards/WeatherCard';
import { assets } from '@/assets/img';
import EventCard from '@/components/Cards/EventCard';
import PieChartCustom from '@/components/Charts/PieChartCustom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
  };

const Home = () => {

    const { currentColor } = useStateContext();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className='mt-24 md:mt-12'>

        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
            <WeatherCard />
            <EventCard />
        </div>

        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
            <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
                {warningData.map((item) => (
                    <div
                        key={item.title}
                        className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
                    >
                        <div>
                            <button
                                type='button'
                                style={{ color: item.iconColor, backgroundColor: item.iconBg}}
                                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                                onClick={handleOpen}
                                >   
                                    {item.icon}
                            </button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {item.icon}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                                </Box>
                            </Modal>
                        </div>
                        

                        <p className='mt-3'>
                            <span className='text-lg font-semibold'>{item.amount}</span>
                            <span className={`text-sm ${item.pcColor} ml-2`}>{item.percentage}</span>
                        </p>
                        <p className='text-sm text-gray-400 mt-1'>{item.title}</p>

                    </div>
                ))}
            </div>
        </div>

        <div className='flex gap-10 flex-wrap justify-center'>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg m-3 p-4 rounded-2xl md:w-780'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-xl'>Updates</p>
                    <div className='flex items-center gap-4'>
                        <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                            <span><GoDotFill /></span>
                            <span>Normal</span>
                        </p>
                        <p className='flex items-center gap-2 text-blue-600 hover:drop-shadow-xl'>
                            <span><GoDotFill /></span>
                            <span>Warnings</span>
                        </p>
                    </div>
                </div>

                <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                <div className='border-r-1 border-color m-4 pr-10'>
                    <div>
                        <p>
                            <span className='text-3xl font-semibold'>120</span>
                            <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>-10%</span>
                        </p>
                        <p className='text-gray-400 mt-1'>Warning</p>
                    </div>

                    <div className='mt-8'>
                        <p className='text-3xl font-semibold'>300</p>
                        <p className='text-gray-400 mt-1'>Normal</p>
                    </div>

                    <div className='mt-5'>
                        <Sparked
                            height="150px"
                            width="250px"
                            color="blue"
                        />
                    </div>

                    <div className='mt-10'>
                        <Button 
                            color='white'
                            bgColor={currentColor}
                            text='Download Report'
                            borderRadius="10px"
                        />
                    </div>
                </div>
                <div>
                    <Stacked 
                        width="320px"
                        height="360px"
                    />
                </div>
            </div>
            </div>

        </div>
        
        
    </div>
  )
}

export default Home