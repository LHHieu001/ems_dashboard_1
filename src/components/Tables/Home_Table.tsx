import React, { useState } from 'react'
import { IoIosWarning } from 'react-icons/io';


const Home_Table = () => {

    const [tableFactors, setTableFactors] = useState({
        header: [["#", "Tên Phân Hệ", "Tên Chỉ Số", "Giá Trị", "Đơn Vị", "Ngày", "% Tăng"]],
        body: [
            [1, "Quản lý nước thải", "Nhu cầu Oxy hóa học", 45, "mg/s", "2024-12-01", "↑ 5%"],
            [2, "Quản lý nước cấp", "Áp suất", 78, "KpA", "2024-12-02", "↑ 3%"],
            [3, "Quản lý không khí", "Chỉ số hướng gió giật", 150, "Deg", "2024-12-03", "↑ 7%"],
            [4, "Quản lý đồng hồ nước", "Tòa nhà Telecom", 23, "m3", "2024-12-04", "↑ 2%"],
            [5, "Quản lý nước ngầm", "Chỉ số mực nước động", 90, "m3", "2024-12-05", "↑ 8%"],
            [6, "Quản lý không khí QL1A", "Chỉ số bụi PM10.0", 90, "ug/m3", "2024-12-05", "↑ 8%"],
            [7, "Quản lý nước mặt loại A", "Chỉ số oxi hòa tan", 90, "PPM", "2024-12-05", "↑ 8%"],
        ],
    });

    
  return (
    <div className='flex flex-col p-3 text-sm'>
        
        <div className='flex items-center gap-x-3'>
            <IoIosWarning className='text-white bg-green-500 text-4xl p-1 rounded-full'/>
            <p className='text-lg font-bold'>Thống kê chỉ số có giá trị tăng cao nhất</p>
        </div>

        <div className='mt-3'>
            <table className="w-full">
                <thead>
                    <tr className='text-white px-3 h-10' style={{backgroundColor: '#16a34a'}}>
                        {tableFactors.header[0].map((header, idx) => (
                            <th className='text-center' key={idx}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableFactors.body.map((row, idx) => (
                        <tr className='hover:bg-slate-100 h-10 border-b-2 border-gray-100' key={idx}>
                            {row.map((cell, cellIdx) => (
                                <td className='text-center font-normal text-sm last:text-red-400 last:font-bold' key={cellIdx}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>
    
  )
}

export default Home_Table