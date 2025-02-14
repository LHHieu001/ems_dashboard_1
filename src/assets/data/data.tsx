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
import { BsGrid1X2Fill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { FaFileExport } from "react-icons/fa";
import { RiBriefcase4Fill } from "react-icons/ri";
import { MdOutlineWaterDamage } from "react-icons/md";
import { MdOutlineWater } from "react-icons/md";
import { MdOutlineTsunami } from "react-icons/md";
import { CgDropInvert } from "react-icons/cg";
import { CgDropOpacity } from "react-icons/cg";
import { FaCarSide } from "react-icons/fa";
import { MdOutlineTraffic } from "react-icons/md";



export const links = [
    {
      name: 'home',
      display: 'Trang tổng quan',
      icon: <BsGrid1X2Fill />,
    },
    {
      name: 'notifications',
      display: 'Thông báo',
      icon: <IoMdNotifications />,
    },
    {
      name: 'dataExport',
      display: 'Xuất dữ liệu',
      icon: <FaFileExport />,
    },
    // {
    //   name: 'monitor',
    //   display: 'Quản lý phân hệ',
    //   icon: <RiBriefcase4Fill />,
    // },
]

export const subdivisionLinks = [
  {
    name: 'wasteWater',
    display: 'Nước thải',
    icon: <MdOutlineWaterDamage />,
  },
  {
    name: 'groundWater',
    display: 'Nước ngầm',
    icon: <MdOutlineWater />,
  },
  {
    name: 'surfaceAWater',
    display: 'Nước mặt loại A',
    icon: <MdOutlineTsunami />,
  },
  {
    name: 'supplyWater',
    display: 'Nước cấp',
    icon: <CgDropInvert />,
  },
  {
    name: 'smartWater',
    display: 'ĐH nước',
    icon: <CgDropOpacity />,
  },
  {
    name: 'Air',
    display: 'Không khí',
    icon: <FaCarSide />,
  },
  {
    name: '1aAir',
    display: 'Không khí QL1A',
    icon: <MdOutlineTraffic />,
  },
  // {
  //   name: 'monitor',
  //   display: 'Quản lý phân hệ',
  //   icon: <RiBriefcase4Fill />,
  // },
]
  
  

  export const warningData = [
    {
      icon: <MdOutlineWaterDamage />,
      amount: '39',
      percentage: '4%',
      title: 'Nước thải',
      type: 'wasteWater',
      iconColor: 'white',
      iconBg: '#ff5c7c',
      pcColor: 'text-blue-600',
      status: 'decrease',
      shadowColor: '#ff5c7c',
      hoverColor: '#ffe4e4',
    },
    {
      icon: <MdOutlineWater />,
      amount: '4',
      percentage: '23%',
      title: 'Nước ngầm',
      type: 'groundWater',
      iconColor: 'white',
      iconBg: '#c080f8',
      pcColor: 'text-red-600',
      status: 'increase',
      shadowColor: '#c080f8',
      hoverColor: '#f8ecfc'
    },
    {
      icon: <MdOutlineTsunami />,
      amount: '42',
      percentage: '38%',
      title: 'Nước mặt loại A',
      type: 'aWater',
      iconColor: 'white',
      iconBg: '#ff74f4',
      pcColor: 'text-red-600',
      status: 'increase',
      shadowColor: '#ff74f4',
      hoverColor: '#ffd4fc'
    },
    {
      icon: <CgDropInvert />,
      amount: '4',
      percentage: '12%',
      title: 'Nước cấp',
      type: 'supplyWater',
      iconColor: 'white',
      iconBg: '#ff947a',
      pcColor: 'text-blue-600',
      status: 'decrease',
      shadowColor: '#ff947a',
      hoverColor: '#fff4dc'
    },
    {
      icon: <CgDropOpacity />,
      amount: '12',
      percentage: '5%',
      title: 'ĐH nước',
      type: 'smartWater',
      iconColor: 'white',
      iconBg: '#6064e4',
      pcColor: 'text-red-600',
      status: 'increase',
      shadowColor: '#6064e4',
      hoverColor: '#c8ccfc'
    },
    {
      icon: <FaCarSide />,
      amount: '8',
      percentage: '10%',
      title: 'Không khí',
      type: 'Air',
      iconColor: 'white',
      iconBg: '#3ce054',
      pcColor: 'text-red-600',
      status: 'increase',
      shadowColor: '#3ce054',
      hoverColor: '#e0fce4'
    },
    {
      icon: <MdOutlineTraffic />,
      amount: '8',
      percentage: '8%',
      title: 'Không khí QL1A',
      type: '1aAir',
      iconColor: 'white',
      iconBg: '#3ce054',
      pcColor: 'text-red-600',
      status: 'increase',
      shadowColor: '#3ce054',
      hoverColor: '#c8ecc4'
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

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const notiData = [
  {
    title: 'Hệ thống cảnh báo',
    message: 'Lỗi kết nối cơ sở dữ liệu',
    desc: 'Phân hệ quản lý dữ liệu gặp sự cố kết nối. Vui lòng kiểm tra lại.',
    time: '9:08 AM',
  },
  {
    title: 'Cập nhật hệ thống',
    message: 'Phiên bản mới đã sẵn sàng',
    desc: 'Phiên bản 2.3.0 đã được phát hành. Nhấp để cập nhật.',
    time: '11:56 AM',
  },
  {
    title: 'Cảnh báo bảo mật',
    message: 'Đăng nhập từ thiết bị lạ',
    desc: 'Một thiết bị lạ đã đăng nhập vào tài khoản của bạn từ IP 192.168.1.100.',
    time: '4:39 AM',
  },
  {
    title: 'Thông báo từ quản trị viên',
    message: 'Bảo trì hệ thống',
    desc: 'Hệ thống sẽ tạm ngừng hoạt động từ 2:00 AM đến 4:00 AM để bảo trì.',
    time: '1:12 AM',
  },
  {
    title: 'Cảnh báo hiệu suất',
    message: 'CPU quá tải',
    desc: 'Mức sử dụng CPU vượt quá 90%. Vui lòng kiểm tra các tiến trình đang chạy.',
    time: '3:45 PM',
  },
  {
    title: 'Thông báo từ người dùng',
    message: 'Yêu cầu hỗ trợ mới',
    desc: 'Người dùng "Nguyễn Văn A" đã gửi yêu cầu hỗ trợ về lỗi thanh toán.',
    time: '10:20 AM',
  },
  {
    title: 'Cảnh báo hệ thống',
    message: 'Ổ cứng sắp đầy',
    desc: 'Dung lượng ổ cứng chỉ còn 5%. Vui lòng dọn dẹp hoặc thêm dung lượng.',
    time: '7:30 PM',
  },
  {
    title: 'Thông báo từ ứng dụng',
    message: 'Cập nhật cài đặt',
    desc: 'Cài đặt bảo mật đã được cập nhật. Vui lòng xem lại các thay đổi.',
    time: '6:15 AM',
  },
];