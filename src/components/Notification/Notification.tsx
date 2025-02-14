import React, { useEffect, useState } from 'react'
import { notiData } from '@/assets/data/data'
import { useStateContext } from '@/assets/contexts/contextProvider'
import { useOutletContext } from 'react-router-dom';
import { format } from 'timeago.js';


const Notification = () => {

  const {messages} = useStateContext();

  
  return (
    <div className="nav-item absolute right-5 top-16 bg-white dark:bg-[#42464D] rounded-lg w-96 shadow-lg">
      <div className="flex justify-center items-center py-4 border-b-1">
        <div className="flex gap-x-1 items-center">
          <p className="font-bold text-lg dark:text-gray-200">Thông báo</p>
          {messages.length ? (<button type="button" className="text-xs rounded-xl p-1 px-2 bg-[#ffe0e8] text-[#ff3068]">{messages.length} mới</button>) : null}
        </div>
      </div>
      <div className="-mt-7 p-6">
        {messages.length ? (messages?.slice(0, 3).map((item, index) => (
          <div key={index} className="flex flex-col leading-8 border-b-1 border-color p-3">
            <div className='flex flex-row justify-between items-center'>
                <p className="font-semibold dark:text-gray-200">{item.title}</p>
                <p className='text-gray-500 text-xs dark:text-gray-400'>{format(item.timestamp)}</p>
            </div>
              <p className="text-gray-500 text-sm dark:text-gray-400 -mt-1">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400 mt-2"> {item.desc} </p>
          </div>
        ))) : <p className='mt-10 text-center'>Không có thông báo mới</p>}
        
        <div className="mt-5 flex justify-center items-center">
            <button className='text-green-500'>
              <p>Xem tất cả</p>
            </button>
        </div>
      </div>
    </div>
  );
  
}

export default Notification