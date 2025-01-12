import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import logo from '@/assets/img/logo.png';
import { links } from '@/assets/data/data'
import { useStateContext } from '@/assets/contexts/contextProvider';
const SideBar = () => {

    const {activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext();
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
    const handleCloseSideBar = () =>{
        if(activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }
  return (
    <>
        <div className='pb-10 ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto'>
            {activeMenu && (
                <>
                    <div className='flex justify-between items-center'>
                        
                        <Link to="/" onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex tracking-tight'>
                            <img className='w-16' src={logo}></img>
                            <span className='flex flex-row gap-x-1 font-bold text-2xl text-slate-900 dark:text-white'>A9<span>I<span className='text-orange-400'>O</span>T</span></span>
                        </Link>

                        <button
                            type='button'
                            data-tooltip-id='Menu' data-tooltip-content="Menu" data-tooltip-place="right"
                            onClick={() => setActiveMenu((prev) => !prev)}
                            className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
                        >
                            <MdOutlineCancel />
                        </button>

                    </div>

                    <div className='mt-10'>
                        {links.map((item, index) => (
                            <div key={item.title}>
                                <p className='text-gray-400 m-3 mt-4 uppercase'>
                                    {item.title}
                                </p>
                                {item.links.map((link) => (
                                    <NavLink
                                      to={`/${link.name}`}  
                                      key={link.name}
                                      onClick={handleCloseSideBar}
                                      className={( {isActive} ) => isActive ? activeLink : normalLink }
                                    >
                                        {link.icon}
                                        <span className='capitalize'>
                                            {link.name}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>

        <Tooltip id='Menu'/>
    </>

    
  )
}

export default SideBar