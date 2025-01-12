import React, { createContext, useContext, useState} from 'react'

interface StateContextProps {
    activeMenu: boolean;
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
    isClicked: ClickState;
    handleClick: (key: keyof ClickState) => void;
    screenSize: number;
    setScreenSize: React.Dispatch<React.SetStateAction<number>>;

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