import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { TiHomeOutline } from "react-icons/ti";
import { FaMessage } from "react-icons/fa6";
import { assets } from '../img';
import { IoWaterOutline } from "react-icons/io5";
import { FaWater } from "react-icons/fa";
import { GiWaterTank } from "react-icons/gi";
import { GiWaterTower } from "react-icons/gi";
import { GiSpeedometer } from "react-icons/gi";
import { FaWind } from "react-icons/fa";



export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'home',
          display: 'Trang chủ',
          icon: <TiHomeOutline />,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'users',
          display: 'Người dùng',
          icon: <IoMdContacts />,
        },
        {
          name: 'notifications',
          display: 'Thông báo',
          icon: <FaMessage />,
        },
        // {
        //   name: 'customers',
        //   icon: <RiContactsLine />,
        // },
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          name: 'event',
          display: 'Sự kiện',
          icon: <AiOutlineCalendar />,
        },
        // {
        //   name: 'kanban',
        //   icon: <BsKanban />,
        // },
        {
          name: 'editor',
          display: 'Văn bản',
          icon: <FiEdit />,
        },
        // {
        //   name: 'color-picker',
        //   icon: <BiColorFill />,
        // },
      ],
    },
    {
      title: 'Charts',
      links: [
        {
          name: 'Nước thải',
          display: 'Nước thải',
          icon: <IoWaterOutline />,
        },
        {
          name: 'Nước ngầm',
          display: 'Nước ngầm',
          icon: <FaWater />,
        },
  
        {
          name: 'Nước mặt loại A',
          display: 'Nước mặt loại A',
          icon: <GiWaterTank />,
        },
        {
          name: 'Nước cấp',
          display: 'Nước cấp',
          icon: <GiWaterTower />,
        },
        {
          name: 'Đồng hồ nước',
          display: 'Đồng hồ nước',
          icon: <GiSpeedometer />,
        },
        {
          name: 'Không khí',
          display: 'Không khí',
          icon: <FaWind />,
        },
        {
          name: 'Không khí QL1A',
          display: 'Không khí QL1A',
          icon: <FiStar />,
        },
        // {
        //   name: 'stacked',
        //   icon: <AiOutlineBarChart />,
        // },
      ],
    },
  ];

  export const warningData = [
    {
      icon: <IoWaterOutline />,
      amount: '39',
      percentage: '-4%',
      title: 'Nước thải',
      type:'wasteWater',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'text-green-600',
    },
    {
      icon: <FaWater />,
      amount: '4',
      percentage: '+23%',
      title: 'Nước ngầm',
      type:'groundWater',
      iconColor: '#fdba74',
      iconBg: '#ffedd5',
      pcColor: 'text-red-600',
    },
    {
      icon: <GiWaterTank />,
      amount: '42',
      percentage: '+38%',
      title: 'Nước mặt loại A',
      type:'aWater',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
      pcColor: 'text-red-600',
    },
    {
      icon: <GiWaterTower />,
      amount: '4',
      percentage: '-12%',
      title: 'Nước cấp',
      type:'supplyWater',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: 'text-green-600',
    },
    {
      icon: <GiSpeedometer />,
      amount: '12',
      percentage: '+5%',
      title: 'Đồng hồ nước',
      type:'smartWater',
      iconColor: 'rgb(255, 99, 132)',
      iconBg: 'rgb(255, 205, 210)',
      pcColor: 'text-red-600',
    },
    {
      icon: <FaWind />,
      amount: '8',
      percentage: '+10%',
      title: 'Không khí',
      type:'Air',
      iconColor: 'rgb(54, 162, 235)',
      iconBg: 'rgb(227, 242, 253)',
      pcColor: 'text-red-600',
    },
    {
      icon: <FiStar />,
      amount: '8',
      percentage: '+8%',
      title: 'Không khí QL1A',
      type:'1aAir',
      iconColor: 'rgb(255, 206, 86)',
      iconBg: 'rgb(255, 247, 205)',
      pcColor: 'text-red-600',
    },
  ];

  export const SparklineAreaData = [
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },
  
  ];

  export const ecomPieChartData = [
    { x: '2018', y: 18, text: '35%' },
    { x: '2019', y: 18, text: '15%' },
    { x: '2020', y: 18, text: '25%' },
    { x: '2021', y: 18, text: '25%' },
  ];

  export const weatherIcons = {
          'rain': assets.rain,
          'cloudy': assets.cloudy,
          'partly-cloudy-day': assets.partly_cloudy_day,
  };


  export const employeeData = [
    {
        id: 1,
        img: assets.boss,
        name: 'Phạm Khải',
        role: 'Admin',
        email: 'pham.khai@example.com',
        status: 'Active',
    },
    {
        id: 2,
        img: assets.Cocogoat,
        name: 'Phụng Hoàng',
        role: 'User',
        email: 'phung.hoang@example.com',
        status: 'Active',
    },
    {
        id: 3,
        img: assets.Linh,
        name: 'Quang Lĩnh',
        role: 'User',
        email: 'quang.linh@example.com',
        status: 'Inactive',
    },
    {
        id: 4,
        img: assets.Quan,
        name: 'Minh Quân',
        role: 'User',
        email: 'minh.quan@example.com',
        status: 'Active',
    },
    {
        id: 5,
        img: assets.user_avatar,
        name: 'Hoàng Hiếu',
        role: 'User',
        email: 'hoang.hieu@example.com',
        status: 'Inactive',
    },
    {
        id: 6,
        img: assets.Nhan,
        name: 'Thành Nhân',
        role: 'User',
        email: 'thanh.nhan@example.com',
        status: 'Inactive',
    },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#22c55e',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];