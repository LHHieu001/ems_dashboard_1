import React, { useEffect, useState } from 'react'
import { assets } from '@/assets/img'
import { motion } from 'framer-motion'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const EventCard = () => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () =>{
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }

    const items = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        title: `Event ${i + 1}`,
        description: `Description for item ${i + 1}`,
        time: `${i + 1}:00 AM`
    }))

    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
        clearInterval(interval);
        };
    }, []);

  return (
    <div className='hidden xl:flex w-full bg-white dark:bg-secondary-dark-bg m-3 rounded-xl justify-center items-center gap-x-3 drop-shadow-lg h-56'>
        <div className='flip-card hidden 2xl:block w-1/5 p-3 border-r-2'>
            <motion.div
                onClick={handleFlip}
                className='flip-card-inner flex justify-center'
                initial={false}
                animate={{rotateY: isFlipped ? 180 : 360}}
                transition={{ duration: 0.3, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimating(false)}
    
            >
                
                <img className='flip-card-font' src={assets.user_avatar} style={{width: '100px'}}/>
                <div className='flip-card-back-clock bg-white dark:bg-secondary-dark-bg'>
                    <Clock size={100} value={value} />
                </div>

            </motion.div>
            
        </div>

        <div className='w-4/5 h-full p-3'>
            <p className='text-md font-bold dark:text-white'>Today's Event</p>
            <div className="space-y-4 h-40 overflow-y-scroll py-10">
                {items.map((item) => (
                <motion.div
                    key={item.id}
                    // initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-secondary-dark-bg rounded-lg p-4 flex flex-row items-center gap-x-40"
                >
                    <div>
                        <h2 className="dark:text-white text-lg font-semibold mb-2">{item.title}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                    <p className='text-xl font-light text-gray-400'>{item.time}</p>
                </motion.div>
                ))}
            </div>
        </div>
                    
    </div>
  )
}

export default EventCard