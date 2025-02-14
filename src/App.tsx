import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import { useStateContext } from './assets/contexts/contextProvider'
// import Home from './pages/Home'
import Home from './pages/Home_Grid'
import Notification from './pages/Notification'
import MainLayOut from './layout/MainLayOut'
import Login from './pages/Login'
import './App.css'

function App() {

  const { currentMode } = useStateContext();
  const [userEmail, setUserEmail] = useState('');
  console.log(userEmail);

  return userEmail ? (
    <>
      <div className={`${currentMode === 'Dark' ? 'dark' : ''}`}>
        <BrowserRouter>
            <Routes>
              {/* <Route path='/login' element={<Login onSubmit={setUserEmail} />} /> */}
              
              <Route element={<MainLayOut useremail = { userEmail }/>}>
                  {/* DashBoard */}
                  <Route path='/' element={<Home />} />
                  <Route path='/home' element={<Home />} />

                  {/* Pages */}
                  <Route path='/notifications' element={<Notification />} />


              </Route>
            </Routes>
          
        </BrowserRouter>
      </div>

      <Tooltip id='Settings'/>
    </>
    
  ) : <Login onSubmit={setUserEmail}/>
}

export default App
