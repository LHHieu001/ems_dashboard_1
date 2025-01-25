import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import logo from '@/assets/img/logo.png';
import { links } from '@/assets/data/data'
import { useStateContext } from '@/assets/contexts/contextProvider';
const SideBar = () => {

    const {activeMenu, setActiveMenu, screenSize, setScreenSize, currentColor } = useStateContext();
    const activeLink = 'flex items-center gap-3 p-3 rounded-lg text-[#30b444] text-sm m-2';
    const normalLink = 'flex items-center gap-3 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
    const handleCloseSideBar = () =>{
        if(activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }
  return (
    <>
        <div className='pb-10 h-full md:overflow-hidden overflow-auto md:hover:overflow-auto scrollbar-hide'>
            
                <>
                    <div className='flex justify-center items-center'>
                        
                        <Link to="/" onClick={handleCloseSideBar} className={`${activeMenu ? 'ml-3' : 'justify-center'} w-full flex items-center gap-x-4 mt-4 tracking-normal`}>
                            <img className='w-14' src={logo}></img>
                            <span style={{fontWeight: 600}} className={`${activeMenu ? 'flex' : 'hidden'} flex-row gap-x-1 text-2xl text-slate-950 dark:text-white`}>A9<span>I<span className='text-green-400'>O</span>T</span></span>
                        </Link>

                        {/* <button
                            type='button'
                            data-tooltip-id='Menu' data-tooltip-content="Menu" data-tooltip-place="right"
                            onClick={() => setActiveMenu((prev) => !prev)}
                            className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
                        >
                            <MdOutlineCancel />
                        </button> */}

                    </div>

                    <div className='mt-3'>
                        {links.map((item, index) => (
                            <div key={item.title} className={`${activeMenu ? '' : 'flex flex-col justify-center items-center'}`}>
                                {/* <p className='text-gray-400 m-3 mt-4 uppercase'>
                                    {item.title}
                                </p> */}
                                {item.links.map((link) => (
                                    <NavLink
                                      to={`/${link.name}`}  
                                      key={link.name}
                                      onClick={handleCloseSideBar}
                                      style={({isActive}) => ({backgroundColor: isActive ? '#c0e4bc' : '' })}
                                      className={( {isActive} ) => isActive ? activeLink : normalLink }
                                    >
                                        <div className='text-xl'>{link.icon}</div>
                                        <span className={`capitalize ${activeMenu ? '' : 'hidden'}`}>
                                            {link.display}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
        </div>

        <Tooltip id='Menu'/>
    </>

    
  )
}

export default SideBar