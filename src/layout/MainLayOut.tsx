import React, { useEffect, useRef, useState } from 'react'
import SideBar from '@/components/SideBar/SideBar'
import NavBar from '@/components/NavBar/NavBar'
import ThemeSetting from '@/components/Theme/ThemeSetting'
import Footer from '@/components/Footer/Footer'
import { useStateContext } from '@/assets/contexts/contextProvider'
import { FiSettings } from 'react-icons/fi'
import { Outlet } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import useWebSocket from 'react-use-websocket'
import throttle from 'lodash.throttle'

const MainLayOut = ({ useremail } : { useremail : string }) => {

  const { activeMenu, setActiveMenu, themeSettings, setThemeSettings, currentColor, currentMode, messages, setMessages } = useStateContext();

  const username = useremail
  const WS_URL = 'ws://127.0.0.1:8000'
  interface JsonMessage {
    type: string;
    messages?: any[];
    users?: { [key: string]: any };
  }

  const { sendJsonMessage, lastJsonMessage } = useWebSocket<JsonMessage>(WS_URL,{
    queryParams: { username },
    shouldReconnect: () => true,
  })

  const THROTTLE = 1000
  const sendJsonMessageThrottle = useRef(throttle(sendJsonMessage, THROTTLE))

  // useEffect(() => {

  //   sendJsonMessage({
  //     x: 0,
  //     y: 0
  //   })

  //   window.addEventListener('mousemove', e => {
  //     sendJsonMessageThrottle.current({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   })
  // }, [])

  useEffect(() => {
    if (lastJsonMessage) {
      if (lastJsonMessage.type === 'init') {
        setMessages(lastJsonMessage.messages || []);
      } else if (lastJsonMessage.type === 'update') {
        setMessages(lastJsonMessage.messages || []);
      }
    }
  }, [lastJsonMessage]);

  const sendMessage = (title?: string, message?: string, desc?: string) => {
    sendJsonMessage({ type: 'new_message', title, message, desc });
  };



    
  return (
        <div className='flex relative dark:bg-main-dark-bg bg-slate-50'>

            {/* Setting Button */}
            <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
              <button
                type='button'
                data-tooltip-id='Settings' data-tooltip-content="Settings" data-tooltip-place="top"
                className='text-3xl text-white p-3 rounded-full hover:drop-shadow-xl hover:bg-light-gray'
                style={{ background: currentColor}}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </div>

            {activeMenu &&<div className='top-0 right-0 bg-white/70 w-screen h-screen xl:w-0 xl:h-0 fixed z-40' onClick={() => setActiveMenu(false)}></div>}

            {/* Side Bar */}
            {activeMenu ? (
                <div className='h-[700px] w-48 xl:m-4 fixed sidebar rounded-xl bg-white dark:bg-secondary-dark-bg z-50'>
                  <SideBar />
                </div>
              ) : (
                <div className='h-[700px] w-0 xl:w-20 m-4  fixed sidebar rounded-xl bg-white dark:bg-secondary-dark-bg'>
                  <SideBar />
                </div>
              )}

              {/* Nav Bar & Routes */}
              <div className={`${activeMenu ? ' md:ml-56': ' md:ml-28 flex-1'} dark:bg-main-dark-bg min-h-screen w-full overflow-x-hidden scrollbar-hide`}>

                <div className='bg-white dark:bg-main-dark-bg navbar shadow-xl rounded-2xl xl:m-4 xl:shadow-none'>
                  <NavBar />
                </div>
              
                <div className='p-4'>
                    {themeSettings && <ThemeSetting />}
                    <Outlet context={{ useremail, lastJsonMessage, messages, sendMessage}}/>
                  <Footer />
                </div>
                
                
              </div>

                <Tooltip id='Settings'/>
              
          </div>
  )
}

export default MainLayOut