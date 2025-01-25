import React from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {

  return (
    <div className='flex flex-row items-center gap-x-1 w-400 p-1.5 h-fit bg-slate-50 rounded-2xl shadow-sm border-1 hover:cursor-pointer'>
        <IoIosSearch className='text-gray-500 text-xl font-semibold'/>
        <p className='text-gray-500 text-xs'>Tìm kiếm</p>
    </div>
  )
}

export default SearchBar