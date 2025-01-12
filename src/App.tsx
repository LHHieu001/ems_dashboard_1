import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { Tooltip } from 'react-tooltip'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import NavBar from './components/NavBar/NavBar'
import { useStateContext } from './assets/contexts/contextProvider'
import Home from './pages/Home'

function App() {

  const context = useStateContext();
  const activeMenu = context ? context.activeMenu : false;
  
  return(
    <>
      <div>
        <BrowserRouter>
          <div className='flex relative dark:bg-main-dark-bg'>

            {/* Setting Button */}
            <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
              <button
                type='button'
                data-tooltip-id='Settings' data-tooltip-content="Settings" data-tooltip-place="top"
                className='text-3xl text-white p-3 rounded-full hover:drop-shadow-xl hover:bg-light-gray'
                style={{ background: 'blue'}}
              >
                <FiSettings />
              </button>
            </div>

            {/* Side Bar */}
            {activeMenu ? (
                <div className='w-72 fixed sidebar bg-white dark:bg-secondary-dark-bg'>
                  <SideBar />
                </div>
              ) : (
                <div className='w-0 dark:bg-secondary-dark-bg'>
                  <SideBar />
                </div>
              )}

              {/* Nav Bar */}
              <div className={`${activeMenu ? ' md:ml-72': 'flex-2'} dark:bg-main-dark-bg bg-main-bg min-h-screen w-full`}>
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                  <NavBar />
                </div>
              </div>

              {/* Routes */}
              <div>
                <Routes>

                  {/* DashBoard */}
                  <Route path='/' element={<Home />} />
                  <Route path='/main' element={<Home />} />

                  {/* Pages */}
                  <Route path='/users' element="User" />
                  <Route path='/notifications' element="Notification" />
                  <Route path='/customers' element="Not used" />

                  {/* Apps */}
                  <Route path ='/kanban' element='Kanban'/>
                  <Route path ='/editor' element='Editor'/>
                  <Route path ='/event' element='Event'/>
                  <Route path ='/color-picker' element='ColorPicker'/>

                  {/* Detail/Monitor */}
                  <Route path="/line" element="Line" />
                  <Route path="/area" element="Area" />
                  <Route path="/bar" element="Bar" />
                  <Route path="/pie" element="Pie" />
                  <Route path="/financial" element="Financial" />
                  <Route path="/color-mapping" element="ColorMapping" />
                  <Route path="/pyramid" element="Pyramid" />
                  <Route path="/stacked" element="Stacked" />
                
                
                </Routes>
              </div>
              
          </div>
        </BrowserRouter>
      </div>

      <Tooltip id='Settings'/>
    </>
    
  )
}

export default App
