import React, { useEffect, useState, useRef } from 'react';
import { warningData} from '@/assets/data/data';
import { useStateContext } from '@/assets/contexts/contextProvider';
import WeatherCard from '@/components/Cards/WeatherCard';
import EventCard from '@/components/Cards/EventCard';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { RxCross1 } from "react-icons/rx";
import Home_LineChart from '@/components/Charts/Home_LineChart';
import Home_PieChart from '@/components/Charts/Home_PieChart';
import Home_Modal_LineChart from '@/components/Charts/Home_Modal_LineChart';
import Home_Modal_Table from '@/components/Tables/Home_Modal_Table';
import Home_Table from '@/components/Tables/Home_Table';
import Home_Map from '@/components/Maps/Home_Map';
import GridLayout from "react-grid-layout";


const Home = () => {

    // const { currentColor, currentMode } = useStateContext();
    const [style, setStyle] = useState({
        title: '',
        icon: undefined as JSX.Element | undefined,
        color: '',
        bgcolor: '',
      });
    const [open, setOpen] = React.useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalType, setModalType] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const layout = [
        { i: "b", x: 0, y: 0, w: 8, h: 2},
        { i: "c", x: 8, y: 0, w: 4, h: 2}
      ];

    const Maindiv = document.querySelector('#mainDiv') as HTMLElement;
    const width : number = Maindiv ? Maindiv.offsetWidth : 0;
    console.log(width)

  return (
    
    <div className='mt-10 md:mt-12' id="mainDiv">

        <h5 className='m-3 text-green-500 font-bold'>Trang tổng quan</h5>

        {/* <div className='flex flex-wrap lg:flex-nowrap justify-center'>
            <WeatherCard />
            <EventCard />
        </div> */}

        <div className='mt-3 p-3 overflow-x-scroll scrollbar-hide'>
                <div className='flex flex-row justify-center gap-x-3 items-center min-w-max xl:min-w-0'>
                {warningData.map((item) => (
                    <div
                        key={item.title}
                        className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 w-44 p-4 pt-9 rounded-2xl'
                    >
                            <button
                                type='button'
                                style={{ color: item.iconColor, backgroundColor: item.iconBg}}
                                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                                onClick={() => {handleOpen(), setStyle((prev) => ({...prev, title: item.title, icon: item.icon, color: item.iconColor, bgcolor: item.iconBg}))
                                                setModalTitle(`${item.title}`), setModalType(item.type)    }}
                            >   
                                    {item.icon}
                                    
                            </button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box className={`bg-white rounded-xl h-fit w-11/12 p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                                <div id="modal-modal-title" className='flex flex-row items-center justify-between'>
                                        <div className='flex flex-row items-center gap-x-2'>
                                            <button
                                                    type='button'
                                                    style={{ color: style.color, backgroundColor: style.bgcolor}}
                                                    className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                                                >   
                                                    {style.icon}
                                            </button>
                                            <div className='flex flex-col'>
                                                <p className='hidden md:block text-slate-900 text-xl dark:text-white font-semibold'>Biểu đồ lưu lượng {style.title}</p>
                                                <p className='text-gray-400'>Trong 24h</p>
                                            </div>
                                            
                                        </div>
                                        <button onClick={handleClose}>
                                            <RxCross1 className='text-2xl mr-3 hover:cursor-pointer'/>
                                        </button>
                                             
                                </div>

                                <div id="modal-modal-description" className='mt-4 flex flex-col md:flex-row gap-4 overflow-auto scrollbar-hide' style={{maxHeight: '500px'}}>
                                    {/* <ModalSparked
                                        bgColor = {color}
                                    /> */}
                                    <Home_Modal_LineChart title={modalTitle} type={modalType} />
                                    <Home_Modal_Table type={modalType} />
                                    {/* <ModalTable /> */}
                                </div>
                                </Box>
                            </Modal>
                        <p className='mt-3'>
                            <span className='text-lg font-semibold'>{item.amount}</span>
                            <span className={`text-sm ${item.pcColor} ml-2`}>{item.percentage}</span>
                        </p>
                        <p className='text-sm text-gray-400 mt-1'>{item.title}</p>

                        

                    </div>
                ))}
            </div>
        </div>

        {/* <div className='flex gap-10 flex-wrap justify-center'>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg m-3 p-4 rounded-2xl md:w-780'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-xl'>Updates</p>
                    <div className='flex items-center gap-4'>
                        <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                            <span><GoDotFill /></span>
                            <span>Normal</span>
                        </p>
                        <p className='flex items-center gap-2 hover:drop-shadow-xl' style={{color:currentColor}}>
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
                            color={currentColor}
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
                        warningColor={currentColor}
                    />
                </div>
            </div>
            </div>

        </div> */}

        {/* <div className='grid grid-cols-12 p-3 mt-3 gap-4'>

            <div className='col-span-12 xl:col-span-8 bg-white rounded-xl drop-shadow-xl'>
                <Home_LineChart />
            </div>

            <div className='col-span-12 xl:col-span-4 bg-white rounded-xl drop-shadow-xl'>
                <Home_PieChart />
            </div>

        </div> */}

        <GridLayout
            className="layout"
            autoSize={true}
            layout={layout}
            cols={12}
            rowHeight={300}
            width={1220}
        >
            <div key="b" className='bg-white p-3 rounded-lg drop-shadow-lg'>
                <Home_LineChart />
            </div>


            <div key="c" className='bg-white p-3 rounded-lg drop-shadow-lg'>
                <Home_PieChart />
            </div>

        </GridLayout>

        {/* <div className='grid grid-cols-12 mt-10 p-3 gap-4'>

            <div className='col-span-7 bg-white rounded-br-xl rounded-bl-xl drop-shadow-xl'>
                <Home_Table />
            </div>

            <div className='col-span-5 bg-white rounded-br-xl rounded-bl-xl drop-shadow-xl'>
                <Home_Map />
            </div>
            
        </div> */}
 
    </div>
  )
}

export default Home