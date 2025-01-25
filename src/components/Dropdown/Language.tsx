import React, { useState } from 'react'
import { Dropdown } from "flowbite-react";
import { assets } from '@/assets/img';


const languages = [
    {
      label: 'Tiếng Việt',
      flag: assets.Vietnam,
      value: 'vi',
    },
    {
      label: 'English',
      flag: assets.England,
      value: 'en',
    },
];

const Language = () => {

    
    
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const handleLanguageChange = (languageCode : string) => {
        const selected = languages.find((lang) => lang.value === languageCode);
        if (selected) {
            setSelectedLanguage(selected);
        }
    };

  return (
    <div className='w-36'>
        <Dropdown 
            label={
                <p className='flex flex-row gap-x-3'>
                    <img src={selectedLanguage.flag} style={{ height: '20px' }} />
                    {selectedLanguage.label}
                </p>
            }
            dismissOnClick={false} 
            inline 
            className='text-slate-950 dark:text-white rounded-lg'
        >
            {languages.map((lang) => (
                <Dropdown.Item
                    key={lang.value}
                    className='flex flex-row gap-x-3'
                    onClick={() => handleLanguageChange(lang.value)}
                >
                    <img src={lang.flag} style={{ height: '20px' }} />
                    {lang.label}
                </Dropdown.Item>
                ))}
        </Dropdown>
    </div>
    
  )
}

export default Language