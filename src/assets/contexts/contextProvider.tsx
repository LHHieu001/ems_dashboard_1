import React, { createContext, useContext, useState} from 'react'
import { assets } from '../img';

interface StateContextProps {
    activeMenu: boolean;
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
    isClicked: ClickState;
    handleClick: (key: keyof ClickState) => void;
    screenSize: number;
    setScreenSize: React.Dispatch<React.SetStateAction<number>>;
    currentColor: string;
    setColor: any;
    currentMode: string;
    setMode: any;
    themeSettings: boolean;
    setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>
    messages: any[];
    setMessages: React.Dispatch<React.SetStateAction<any[]>>;
}

interface ClickState {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
}
 

const initialState: ClickState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}



const StateContext = createContext<StateContextProps | undefined>(undefined);

import { ReactNode } from 'react';

export const ContextProvider = ({ children }: { children: ReactNode }) =>{

    const [activeMenu, setActiveMenu] = useState<boolean>(true);
    const [isClicked, setIsClicked] = useState<ClickState>(initialState);
    const [screenSize , setScreenSize] = useState<number>(0);
    const [currentColor, setCurrentColor] = useState('#22c55e')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    
    const setMode = (mode : string) => {
      setCurrentMode(mode);
      localStorage.setItem('themeMode', mode);
    }

    const setColor = (color : string) => {
      setCurrentColor(color);
      localStorage.setItem('colorMode', color);
    }


    const handleClick = (key: keyof ClickState) => {
        setIsClicked((prev) => ({
          ...initialState, 
          [key]: !prev[key],
        }));
      };


    return(
        <StateContext.Provider
            value={{ 
                activeMenu,
                setActiveMenu,
                isClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setColor,
                setMode,
                themeSettings,
                setThemeSettings,
                messages,
                setMessages
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => {
    const context = useContext(StateContext);
    if (!context) {
      throw new Error('useStateContext must be used within a ContextProvider');
    }
    return context;
  };

  

