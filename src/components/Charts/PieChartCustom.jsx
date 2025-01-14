import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const PieChartCustom = ({title}) =>{

    const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
      }));

    const PieCenterLabel = ({ number, label }) => {

        const { width, height, left, top } = useDrawingArea();
      
        return (
            <StyledText y={150} textAnchor="middle" dominantBaseline="middle">
            <tspan className="font-bold text-4xl" x={153} dy="0em">{number}</tspan> 
            <tspan className="text-xl" x={153} dy="1.2em">{label}</tspan> 
          </StyledText>
        );
      };
      
      const pieData = [
        { value: 5, label: 'Nước Thải', color:'Crimson' },
        { value: 10, label: 'Nước Cấp', color: 'MediumSeaGreen' },
        { value: 15, label: 'Không Khí', color: 'SlateBlue' },
        { value: 20, label: 'ĐH Nước', color: 'DodgerBlue' },
        { value: 20, label: 'Nước Ngầm', color: 'orange' },
        { value: 20, label: 'Nước MLA', color: 'violet' },
        { value: 20, label: 'QL1A', color: 'DarkBlue' },
  
      ];

      const pieSeries = [
        {
          data: pieData,
          innerRadius: 77,
          outerRadius: 120,
          paddingAngle: 1,
          cornerRadius: 6,
          startAngle: -45,
          endAngle: 360,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 50, additionalRadius: -20 },
          cx: 150,
          cy: 150,
        }
      ]


      const totalValue = pieData.reduce((sum, item) => sum + item.value, 0);

      return(
        <>
        {/* <div className='flex flex-wrap justify-between'>
          <h5 className='text-base font-bold ml-3'>Thống Kê - {title}</h5>
          <div className="inline-flex items-center gap-x-0 rounded-md bg-transparent h-6">
              <button className="rounded text-blue-600 py-1 px-3 text-xs font-medium hover:bg-slate-200">
                Today
              </button>
              <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-slate-200">
                7d
              </button>
              <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-slate-200">
                1m
              </button>
              <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-slate-200">
                1q 
              </button>
          </div>
        </div> */}
        <div className='flex flex-col mt-2 bg-white dark:bg-secondary-dark-bg p-3 rounded-xl'>
            <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                <PieChart series={pieSeries} slotProps={{legend: {hidden: true},}}>
                    <PieCenterLabel number={totalValue} label="Total" />
                </PieChart>
            </div>
            

            <table className="table-auto w-full border-collapse">
                <thead>
                    <tr>
                      <th className="text-sm font-light border-b-2 border-slate-500 pl-5">Phân Hệ</th>
                      <th className="text-sm font-light border-b-2 border-slate-500 text-center">Cảnh Báo</th>
                      <th className="text-sm font-light border-b-2 border-slate-500 text-center">%</th>
                    </tr>
                </thead>
                <tbody>
                    {pieData.map((item, index) => (
                    <tr key={index}>
                        <td className="px-4 py-2 items-center flex flex-row">
                        <div
                            style={{
                            width: '13px',
                            height: '13px',
                            backgroundColor: item.color,
                            marginRight: '10px',
                            borderRadius: '50%',
                            }}
                        ></div>
                        <span className="font-medium">{item.label}</span>
                        </td>
                        <td className="font-medium text-center">{item.value}</td>
                        <td className="font-medium px-3 text-center">{((item.value / totalValue) * 100).toFixed(2)}%</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            
        </div>
        </>
            
      )
}

export default PieChartCustom