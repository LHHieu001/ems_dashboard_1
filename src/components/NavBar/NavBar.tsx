import React, { CSSProperties, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import userAvatar from '@/assets/img/user_avatar.png'
import Cart from '../Cart/Cart';
import Chat from '../Chat/Chat';
import Notification from '../Notification/Notification';
import UserProfile from '../User/UserProfile';
import { useStateContext } from '@/assets/contexts/contextProvider';
import { IoMdNotifications } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import DarkLight from '../Button/DarkLight';
import Language from '../Dropdown/Language';
import SearchBar from '../SearchBar/SearchBar';
import SearchBarMobile from '../SearchBar/SearchBarMobile';

type NavButtonProps = {
  title: string;
  customFunc: () => void;
  icon: JSX.Element;
  color?: CSSProperties['color'];
  noti?: boolean;
};

const NavButton = ({title, customFunc, icon, color, noti} : NavButtonProps) => {
  return(
    <button
      type='button'
      data-tooltip-id='NavButton' data-tooltip-content={title} data-tooltip-place="top"
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      {noti && 
        <div style={{background: 'white'}} className='absolute flex justify-between items-center h-fit w-fot p-1 rounded-full top-2 right-2'>
          <span
            style={{ background: '#f41474'}}
            className='flex rounded-full h-2 w-2'
          />
        </div>}
      
      
      {icon}
    </button>
  )
};

const NavBar = () => {

  const { currentColor, activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, messages  } = useStateContext();

  useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleSize);
    handleSize();
    return () => window.removeEventListener('resize', handleSize)
  }, [])

  useEffect(() =>{
    if (screenSize <= 900){
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize])


  return (
    <>

      
      <div className='relative flex justify-between items-center p-3 shadow-sm'>

        <NavButton 
          title="Menu" 
          customFunc={() => setActiveMenu((prev) => !prev)}
          icon={<IoMenu style={{fontSize: '24px'}}/>}
          color={'#3c445c'}
        />

        <SearchBar />


        <div className='flex items-center'>

          {/* <NavButton 
            title="Chat" 
            customFunc={() => handleClick('chat')}
            icon={<BsChatLeft />}
            color={currentColor}
            dotColor='#03C9D7'
          /> */}

          <SearchBarMobile />
          <Language />
          <DarkLight />

          <NavButton 
            title="Notifications" 
            customFunc={() => handleClick('notification')}
            icon={<IoMdNotifications style={{fontSize: '25px'}} />}
            color={'#5c6c84'}
            noti={messages.length ? true : false}
          />

          <div
            data-tooltip-id='NavButton' data-tooltip-content='Profile' data-tooltip-place="top"
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-full'
            onClick={() => handleClick('userProfile')}
          >
            <img 
              src={userAvatar}
              className='w-8 h-8 rounded-full'
            />
            {/* <p>
              <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Hieu</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/> */}
          </div>


          {(isClicked.cart) && <Cart /> }
          {(isClicked.chat) && <Chat /> }
          {(isClicked.notification) && <Notification /> }
          {(isClicked.userProfile) && <UserProfile /> }

        </div>

        


      </div>

      {/* <Tooltip id='NavButton'/> */}

    </>
  )
}

export default NavBar