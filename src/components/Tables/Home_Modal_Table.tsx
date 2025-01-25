import React, { useState, useEffect } from 'react';
import FillData from '@/assets/data/FillData';


interface Props {
    type : string
}



const Home_Modal_Table = ({type} : Props) => {

    const plotData = FillData(7, type).plotData;

    const [tableFactors, setTableFactors] = useState<{
        header: string[][],
        body: (string | number)[][]
    }>({
        header: [["#", "Chỉ số", "Giá trị", "Đơn vị", "Trạng thái"]],
        body: [],
    });

    useEffect(() => {
        const body = plotData.datasets.map((data, idx) => [
            idx + 1, 
            data.desc || data.label, 
            data.data[data.data.length - 1],
            data.units,
            data.status === "True" ? "ON" : "OFF"
        ]);

        setTableFactors(prev => ({ ...prev, body }));
    }, [plotData]);




  return (
        <table className="w-full md:w-2/5 h-fit">
                    <thead>
                        <tr className='text-white px-3 h-10' style={{backgroundColor: '#16a34a'}}>
                            {tableFactors.header[0].map((header, idx) => (
                                <th className='text-center' key={idx}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className=''>
                        {tableFactors.body.map((row, idx) => (
                            <tr className='hover:bg-slate-100 h-10 border-b-2 border-gray-100' key={idx}>
                                {row.map((cell, cellIdx) => (
                                    <td className='text-center font-normal text-sm' key={cellIdx}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
        </table>
  )
}

export default Home_Modal_Table