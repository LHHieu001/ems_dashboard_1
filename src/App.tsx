import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { Tooltip } from 'react-tooltip'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import NavBar from './components/NavBar/NavBar'
import { useStateContext } from './assets/contexts/contextProvider'
// import Home from './pages/Home'
import Home from './pages/Home_Grid'
import Notification from './pages/Notification'
import Users from './pages/Employee'
import Employee from './pages/Employee'
import Event from './pages/Event'
import Editors from './pages/Editor'
import ThemeSetting from './components/Theme/ThemeSetting'
import Translation from './pages/Translation'
import Footer from './components/Footer/Footer'
function App() {

  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  
  return(
    <>
      <div className={`${currentMode === 'Dark' ? 'dark' : ''}`}>
        <BrowserRouter>
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

            {/* Side Bar */}
            {activeMenu ? (
                <div className='h-96 w-48 m-4 fixed sidebar rounded-xl bg-white dark:bg-secondary-dark-bg'>
                  <SideBar />
                </div>
              ) : (
                <div className='h-96 w-20 m-4 fixed sidebar rounded-xl bg-white dark:bg-secondary-dark-bg'>
                  <SideBar />
                </div>
              )}

              {/* Nav Bar & Routes */}
              <div className={`${activeMenu ? ' md:ml-56': ' md:ml-32 flex-1'} dark:bg-main-dark-bg min-h-screen w-full overflow-x-hidden scrollbar-hide m-4`}>

                <div 
                  className='bg-white dark:bg-main-dark-bg navbar rounded-xl w-full'
                >
                  <NavBar />
                </div>
              
                <div>
                  {themeSettings && <ThemeSetting />}
                  <Routes>

                    {/* DashBoard */}
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/Translate' element={<Translation />} />

                    {/* Pages */}
                    <Route path='/users' element={<Employee />} />
                    <Route path='/notifications' element={<Notification />} />
                    <Route path='/customers' element="Not used" />

                    {/* Apps */}
                    <Route path ='/kanban' element='Kanban'/>
                    <Route path ='/editor' element={<Editors />}/>
                    <Route path ='/event' element={<Event />}/>
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
                
                <Footer />
              </div>
          </div>
        </BrowserRouter>
      </div>

      <Tooltip id='Settings'/>
    </>
    
  )
}

export default App
