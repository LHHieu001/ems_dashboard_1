import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { assets } from '@/assets/img';
import { weatherIcons } from '@/assets/data/data';

const WeatherCard = () => {

  const date = new Date();
  const today = new Date();
  const hour = date.getHours();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  interface WeatherData {
    date: string;
    temp: number;
    humid: number;
    wind: number;
    uv: number;
    conditions: string;
    feelslike: number;
    icon: keyof typeof weatherIcons;
  }

  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  
  const handleFlip = () =>{
    if(!isAnimating) {
        setIsFlipped(!isFlipped)
        setIsAnimating(true)
    }
  }

const weekDayOptions = {
    weekday: 'long' as 'long' | 'short' | 'narrow',
};

const dayOptions = {
    year: 'numeric' as 'numeric' | '2-digit' | undefined,
    month: 'long' as 'long' | 'short' | 'narrow' | 'numeric' | '2-digit' | undefined,
    day: 'numeric' as 'numeric' | '2-digit' | undefined
};

const formattedWeekDay = new Intl.DateTimeFormat('vi-VN', weekDayOptions).format(today);
const formattedDay = new Intl.DateTimeFormat('vi-VN', dayOptions).format(today);


  const getWeatherIcon = (icon: keyof typeof weatherIcons) => {
    return weatherIcons[icon] || assets.N_A; 
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(
        'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ho%20Chi%20Minh?unitGroup=metric&include=days&key=65GJMUMZKUSDFBD9U9GHFQ867&contentType=json'
    );
      const data = await response.json();

      const formattedData = data.days.slice(0, 5).map((dataset: any, index: number) => {
        const [year, month, day] = dataset.datetime.split('-');
        const formattedDate = `${day}/${month}`;

        return {
          date: formattedDate,
          temp: dataset.temp,
          humid: dataset.humidity,
          wind: dataset.windspeed,
          uv: dataset.uvindex,
          conditions: dataset.conditions,
          feelslike: dataset.feelslike,
          icon: dataset.icon
        };
      });
      setWeatherData(formattedData);
    };

    fetchWeatherData();
  }, []);

  return (

        <div className='flip-card m-3 cursor-pointer h-fit w-full' onClick={handleFlip}>
            <motion.div
                className='flip-card-inner flex justify-center'
                initial={false}
                animate={{rotateX: isFlipped ? 180 : 360}}
                transition={{ duration: 0.3, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                
                
                <div className={`${isFlipped ? '' : 'drop-shadow-lg'} flip-card-font dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl h-56 w-full p-8 pt-9 bg-white`}>
                    <p className='font-bold text-gray-400'>Hello, Good {hour < 12 ? "Morning" : "Evening"}</p>
                    <div className='flex justify-between items-center'>
                        <div className='hidden sm:block'>
                            <h5 className='text-3xl font-medium'>{formattedWeekDay}</h5>
                            <h5 className='mt-0'>{formattedDay}</h5>
                        </div>

                        <img
                                className=''
                                style={{
                                    width: '150px',
                                }}
                                src={getWeatherIcon(weatherData[0]?.icon)}
                        ></img>

                        {weatherData.length > 0 && (
                            <div className=''>
                                <h5 className='text-3xl font-medium'>{weatherData[0].temp}°C</h5>
                                <div className='flex flex-col'>
                                    <h5 className='text-sm'>Chỉ số uv: {weatherData[0].uv}</h5>
                                    <h5 className='text-sm'>Độ ẩm: {weatherData[0].humid}%</h5>
                                    <h5 className='text-sm'>Gió:  {weatherData[0].wind} km/h</h5>
                                </div>
                                {/* <div className='flex flex-col mt-3'>
                                    <h5 className='text-black'>{weatherData[0].conditions}</h5>
                                    <h5 className='text-sm -mt-2'>Feel like {weatherData[0].feelslike}°C</h5>
                                </div> */}
                            </div>
                        )}

                    </div>
                    
                </div>
                
                <div className={`${isFlipped ? 'drop-shadow-lg' : ''} flip-card-back flex flex-col justify-center dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl h-56 w-full p-8 pt-9 bg-white`}>
                    <p className='-mt-5 mb-7 font-bold'>Dự báo những ngày tiếp theo</p>
                    <div className='flex justify-between items-center'>
                        {weatherData.map((item, index) => (
                            <div className={`rounded-xl flex flex-col items-center`}>
                                <h5 className='-mt-2 pb-1 border-b-2 border-slate-600'>{item.date}</h5>
                                <img
                                    style={{
                                        width: '100px',
                                    }}
                                    src={getWeatherIcon(item?.icon)}
                                ></img>
                                <h5 className='text-base font-medium text-black dark:text-white'>{item.temp}°C</h5>
                            </div>
                        ))} 
                    </div>
                </div>
                

            </motion.div>
        </div>
        
    
  )
}

export default WeatherCard