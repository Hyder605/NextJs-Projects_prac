import Image from 'next/image'
import React from 'react'
import { Linkedin } from "./icons/linkedin"
import { Envelope } from './icons/envelope'
import Link from 'next/link'
import DP from "../../public/dp.png"

export const AboutMe = ({ data }: any) => {
  const { name, education } = data
  return (
    <div className='flex flex-col sm:flex-row justify-between shadow-2xl rounded-3xl'>
      <div className='flex '>
        <Image src={DP}
        alt="DP" className='h-62' /></div>
      <div className='flex items-center mt-3 w-full justify-center'>
        <div className='flex flex-col md:p-3 '>
          <h1 className='text-3xl'>{name}</h1>
          <p className='text-2xl sm:text-xl md:text-2xl'>{education}</p>
          <div className='text-xs sm:text-2xl'>
            <h3 className='text-lg sm:text-lg'>Contact Me</h3>
            <div className='flex space-x-3 text-lg sm:text-lg mb-2' >
              <Link href={""} ><Linkedin /></Link>
              <Link href={""} ><Envelope /></Link>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}
