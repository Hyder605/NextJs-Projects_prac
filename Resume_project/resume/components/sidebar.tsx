import Image from 'next/image'
import React, { useId } from "react";
import { Linkedin } from "./icons/linkedin"
import { Envelope } from './icons/envelope'
import Link from 'next/link'
import { AboutMe2 } from './aboutme-2';
import { aboutMe, Experience } from '@/app/data/page';
import { ExperienceP } from './experience';

export const SideBar = ({ data }: any) => {
  const { title, text } = data
  return (
    <>
      <div className='flex flex-col sm:flex-row'>
        <div className="flex flex-col bg-gray-600 h-screen gap-3  pt-2  sm:w-1/3 px-3 text-white">
          <div className='pl-8'>
            <h1 className='text-white'>{title}
              <div className="bg-green-200 h-1 drop-shadow-md rounded-full" />
            </h1>
          </div>
          <ul className='flex flex-col pl-12  items-start'>
            {text.map((elm: string) => (

              <li key={data}>{elm}
              </li>


            ))}
          </ul>
        </div>
        <div className='sm:w-2/3'>
          <AboutMe2 data={aboutMe} />
          <ExperienceP data={Experience} />
        </div>

      </div>
    </>


  )
}
