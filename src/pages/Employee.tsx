import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Checkbox,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'keep-react'
import Header from '@/components/Header/Header'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { employeeData } from '@/assets/data/data';

const Employee = () => {
  return (
    <div className='m-3 mt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header 
            title="Users"
            category="Page"
        />

        <Table className="w-full border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <TableCaption>
            <div className="flex items-center justify-between p-4 bg-gray-100">
              <div className="flex items-center gap-5 ">
                <p className="text-gray-700 font-semibold">6 Members</p>
              </div>
            </div>
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-50 text-gray-600 uppercase text-sm font-bold tracking-wider">
              <TableHead>
                <div className="w-[200px] p-3">Members</div>
              </TableHead>
              <TableHead className="p-3">Status</TableHead>
              <TableHead className="p-3">Role</TableHead>
              <TableHead className="p-3">Email</TableHead>
              <TableHead className="p-3">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employeeData.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50">
                <TableCell className="p-3">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        style={{ width: '40px', height: '40px' }}
                        className="rounded-full object-cover"
                        src={item.img}
                      />
                    </Avatar>
                    <div>
                      <p className="text-gray-800 font-medium">{item.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-3">
                  <p
                    className={`${
                      item.status === 'Active'
                        ? 'text-white bg-green-600 font-semibold text-center rounded-xl w-28'
                        : 'text-white bg-red-600 font-semibold text-center rounded-xl w-28'
                    }`}
                  >
                    {item.status}
                  </p>
                </TableCell>
                <TableCell className="p-3">
                  <p className="text-gray-700">{item.role}</p>
                </TableCell>
                <TableCell className="p-3">
                  <p className="text-blue-600 underline">{item.email}</p>
                </TableCell>
                <TableCell className="p-3">
                  <Dropdown>
                    <DropdownAction asChild>
                      <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                        <HiDotsHorizontal className="w-5 h-5" />
                      </button>
                    </DropdownAction>
                    <DropdownContent
                      align="end"
                      className="w-[200px] bg-white border border-gray-200 shadow-md p-3 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    >
                    
                      <DropdownItem className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        Move
                      </DropdownItem>
                      <DropdownItem className="hover:bg-gray-100 text-red-600 dark:hover:bg-gray-700">
                        Delete
                      </DropdownItem>
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

export default Employee