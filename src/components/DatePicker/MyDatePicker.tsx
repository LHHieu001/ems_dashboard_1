import React, { useEffect, useState } from 'react';
import '@/assets/css/DatePicker.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Moment } from 'moment';


type PickerProps = {
  handleSearch: (date1: Moment, date2: Moment) => void;
}

const MyDatePicker = (props : PickerProps) => {
 
  
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [startDay, setStartDay] = useState<string | null>(null);
  const [endDay, setEndDay] = useState<string | null>(null);

  useEffect(() =>{
    if (startDate !== null){
      setStartDay(startDate.toString())
    } 
    if (endDate !== null){
      setEndDay(endDate.toString())
    }
  }, [startDate, endDate])


  return (
    <ul className="navbar-nav flex flex-wrap justify-content-around">
      {/* <li className="nav-item">{props.GWselection}</li>
      <li className="nav-item">{props.selection}</li> */}
      <li className="nav-item">
        <div className="InputFromTo">
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker 
              label="Ngày bắt đầu" 
              onChange={(date) => {
                setStartDate(date);
                if (date && endDate) {
                  props.handleSearch(date, endDate);
                }
              }}
              maxDate={endDate || undefined}
            />
          </LocalizationProvider>
          —
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker 
              label="Ngày kết thúc"
              onChange={(date) => {setEndDate(date);
                                if (startDate && date){
                                    props.handleSearch(startDate, date);
                                }    
              }}
              minDate={startDate || undefined}
            />
          </LocalizationProvider>
        </div>
      </li>

      
    </ul>

  );
};

export default MyDatePicker;
