import Image from 'next/image'
import React, { FC, useId } from "react";

import { AboutMe2 } from './aboutme-2';
import { aboutMe, Experience, Skills,contactMe, interest } from '@/app/data/page';
import { ExperienceP } from './experience';
import { ContactMe } from './contact';
import { Interests } from './interests';

interface SideBarProps {
  data: {
    title: string;
    text: string[];
  };
}

export const SideBar:FC<SideBarProps> = ({ data }) => {
  const { title, text } = data
  return (
    <>
      <div className='flex flex-col sm:flex-row'>
        <div className="flex flex-col bg-gray-600 gap-3  pt-2  sm:w-1/3 px-3 text-white">
          <div className='pl-8'>
            <h1 className='text-white'>{title}
              <div className="bg-green-200 h-1 drop-shadow-md rounded-full" />
            </h1>
          </div>
          <ul  className='flex flex-col pl-12  items-start'>
            {text.map((elm:string) => (
              <div key={elm} className='flex'>
                <li >
                  {elm}
                  <div className="bg-green-200 h-1 drop-shadow-md rounded-full" />
                </li>
              </div>


            ))}
          </ul>
          <ContactMe data={contactMe}/>
          <Interests data={interest}/>
        </div>
        <div className='sm:w-2/3'>
          <AboutMe2 data={aboutMe} />
          <ExperienceP data={Experience} />
        </div>

      </div>
      
    </>


  )
}
