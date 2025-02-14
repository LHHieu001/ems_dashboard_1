import React from 'react'

const SubDivisionCard = ({ props, func }: { props: any, func: () => void }) => {
  return (
    <div
        key={props.title}
        className={`cursor-pointer flex flex-col bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-fit flex-1 p-5 rounded-2xl`}
        style={{boxShadow: `0px 5px 8px -5px ${props.shadowColor}`, transition: 'box-shadow 0.1s ease-in-out, background-color 0.1s ease-in-out',}}
        onClick={func}
        onMouseEnter={(e) =>{
            e.currentTarget.style.boxShadow = `0px 8px 12px -4px ${props.shadowColor}`;
            e.currentTarget.style.backgroundColor = `${props.hoverColor}`
        }}
            onMouseLeave={(e) =>{
            e.currentTarget.style.boxShadow = `0px 5px 8px -5px ${props.shadowColor}`;
            e.currentTarget.style.backgroundColor = ``
        }}
    >
            <div className='flex flex-row items-center justify-between h-10'>
                <div
                    style={{ color: props.iconColor, backgroundColor: props.iconBg}}
                    className='text-3xl opacity-0.9 rounded-full p-1'
                >   
                        {props.icon}
                        
                </div>

                <p className={`text-base text-center font-bold mt-1`} style={{color: props.iconBg}}>{props.title}</p>

            </div>
            
            <div className='mt-5 flex flex-col gap-y-1'>
                <p className='text-2xl font-semibold'>{props.amount}</p>
                <p className='text-sm font-semibold text-[#485464]'>Tổng số cảnh báo</p>
                <p className={`${props.pcColor} text-xs`}>{props.status === 'increase' ? 'Tăng' : 'Giảm'} {props.percentage} trong 24h</p> 
            </div>

    </div>
  )
}

export default SubDivisionCard