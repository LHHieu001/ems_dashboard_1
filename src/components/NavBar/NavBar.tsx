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


type NavButtonProps = {
  title: string;
  customFunc: () => void;
  icon: JSX.Element;
  color?: CSSProperties['color'];
  dotColor?: CSSProperties['color'];
};

const NavButton = ({title, customFunc, icon, color, dotColor} : NavButtonProps) => {
  return(
    <button
      type='button'
      data-tooltip-id='NavButton' data-tooltip-content={title} data-tooltip-place="top"
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{ background: dotColor}}
        className='absolute flex rounded-full h-2 w-2 right-2 top-2'
      />
        {icon}
    </button>
  )
};

const NavBar = () => {

  const { activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize  } = useStateContext();

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

      <div className='flex justify-between p-2 md:mx-6 relative'>

        <NavButton 
          title="Menu" 
          customFunc={() => setActiveMenu((prev) => !prev)}
          icon={<AiOutlineMenu />}
          color='blue'
        />

        <div className='flex'>

          <NavButton 
            title="Cart" 
            customFunc={() => handleClick('cart')}
            icon={<FiShoppingCart />}
            color='blue'
          />

          <NavButton 
            title="Chat" 
            customFunc={() => handleClick('chat')}
            icon={<BsChatLeft />}
            color='blue'
            dotColor='#03C9D7'
          />

          <NavButton 
            title="Notifications" 
            customFunc={() => handleClick('notification')}
            icon={<RiNotification3Line />}
            color='blue'
            dotColor='#03C9D7'
          />

          <div
            data-tooltip-id='NavButton' data-tooltip-content='Profile' data-tooltip-place="top"
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray roudned-lg'
            onClick={() => handleClick('userProfile')}
          >
            <img 
              src={userAvatar}
              className='w-8 h-8 rounded-full'
            />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Hieu</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>


          {(isClicked.cart) && <Cart /> }
          {(isClicked.chat) && <Chat /> }
          {(isClicked.notification) && <Notification /> }
          {(isClicked.userProfile) && <UserProfile /> }

        </div>

        


      </div>

      <Tooltip id='NavButton'/>

    </>
  )
}

export default NavBar