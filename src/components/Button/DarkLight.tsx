import React, { useState } from 'react'
import Switch from "react-switch";
import { HiSun } from "react-icons/hi";
import { AiFillMoon } from "react-icons/ai";
import { useStateContext } from '@/assets/contexts/contextProvider';


const DarkLight = () => {

    const [checked, setChecked] = useState(false);
    const {currentMode, setMode} = useStateContext();

    const handleChange = () => {
        setChecked((prev) => !prev);
        setMode(currentMode === 'Light' ? 'Dark' : 'Light');
    };
    

  return (
    <Switch
        onChange={handleChange}
        checked={checked}
        className="react-switch"
        offColor="#fce8b0"
        onColor='#8088a8'
        uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
                color: "orange",
                paddingRight: 2
              }}
            >
              <AiFillMoon className='text-white'/>
            </div>
        }
        checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
                color: "orange",
                paddingRight: 2
              }}
            >
              <HiSun className='text-white'/>
            </div>
          }
        uncheckedHandleIcon={
            <div
              className='rounded-full'
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
                backgroundColor: '#fcac04'
              }}
            >
              <HiSun className='text-white'/>
            </div>
          }
          checkedHandleIcon={
            <div
              className='rounded-full'
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "red",
                fontSize: 20,
                backgroundColor: '#40445c'
              }}
            >
              <AiFillMoon className='text-white'/>
            </div>
          }
    />
  )
}

export default DarkLight