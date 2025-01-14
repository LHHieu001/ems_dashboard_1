import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Dropdown, DropdownAction, DropdownContent, DropdownItem } from 'keep-react'
import Header from '@/components/Header/Header'
import { HiDotsHorizontal } from "react-icons/hi";



interface notification {
    id: number;
    message: string;
    timestamp: string;
}

const Notification = () => {

    const notificationData = [
        {
            id: 1,
            message: 'This is notification 1.',
            timestamp: '09:00:00 13/01/2025',
        },
        {
            id: 2,
            message: 'This is notification 2.',
            timestamp: '14:30:00 12/01/2025',
        },
        {
            id: 3,
            message: 'This is notification 3.',
            timestamp: '12:00:00 12/01/2025',
        },
        {
            id: 4,
            message: 'This is notification 4.',
            timestamp: '08:45:00 13/01/2025',
        },
        {
            id: 5,
            message: 'This is notification 5.',
            timestamp: '16:15:00 11/01/2025',
        },
        {
            id: 6,
            message: 'This is notification 6.',
            timestamp: '10:20:00 10/01/2025',
        },
        {
            id: 7,
            message: 'This is notification 7.',
            timestamp: '11:50:00 09/01/2025',
        },
        {
            id: 8,
            message: 'This is notification 8.',
            timestamp: '15:00:00 08/01/2025',
        },
        {
            id: 9,
            message: 'This is notification 9.',
            timestamp: '13:30:00 07/01/2025',
        },
        {
            id: 10,
            message: 'This is notification 10.',
            timestamp: '09:45:00 06/01/2025',
        },
        {
            id: 11,
            message: 'This is notification 11.',
            timestamp: '18:30:00 05/01/2025',
        },
        {
            id: 12,
            message: 'This is notification 12.',
            timestamp: '20:10:00 04/01/2025',
        },
        {
            id: 13,
            message: 'This is notification 13.',
            timestamp: '21:45:00 03/01/2025',
        },
        {
            id: 14,
            message: 'This is notification 14.',
            timestamp: '08:15:00 02/01/2025',
        },
        {
            id: 15,
            message: 'This is notification 15.',
            timestamp: '22:30:00 01/01/2025',
        },
    ];
    

   

  return (
    <div className='m-3 mt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header 
            title="Notifications"
            category="Page"
        />
        <Table className="min-w-full border-collapse border border-gray-300 shadow-lg rounded-md">
            <TableHeader className="bg-gray-100 border-b border-gray-300">
                <TableRow>
                    <TableHead className="p-4 text-left text-sm font-semibold text-gray-700">
                        <div className="max-w-[250px]">Notification</div>
                    </TableHead>
                    <TableHead className="p-4 text-left text-sm font-semibold text-gray-700">
                        <div className="w-[120px]">Time</div>
                    </TableHead>
                    <TableHead className="p-4 text-left text-sm font-semibold text-gray-700">
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {notificationData.map((item) => (
                    <TableRow key={item.id} className="hover:bg-gray-50">
                        <TableCell className="p-4 border-t border-gray-300">
                            <div className="max-w-[250px] truncate text-sm text-gray-900">{item.message}</div>
                        </TableCell>
                        <TableCell className="p-4 border-t border-gray-300 text-sm text-gray-600">
                            {item.timestamp}
                        </TableCell>
                        <TableCell>
                            <Dropdown>
                                <DropdownAction asChild>
                                <button>
                                    <HiDotsHorizontal className="size-4 fill-metal-900 dark:fill-white" />
                                </button>
                                </DropdownAction>
                                <DropdownContent align="center" className="w-[200px] flex flex-col gap-y-1 border border-metal-100 p-3 dark:border-metal-800">
                                    <DropdownItem className='text-blue-500'>Move</DropdownItem>
                                    <DropdownItem className='text-red-500'>Delete</DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                            </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

        
    </div>
  )
}

export default Notification