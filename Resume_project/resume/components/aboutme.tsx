import Image from 'next/image'
import React from 'react'
import { Linkedin} from "./icons/linkedin"
import { Envelope } from './icons/envelope'
import Link from 'next/link'

export const AboutMe=({data}:any)=>{
    const{name,education}=data
  return (
    <div className='flex justify-between'>
        <Image src="/a.png" 
              alt="DP" width={"150"} height={"150"}/>
        <div className='flex flex-col p-3 '>
            <h1 className='text-heading'>{name}</h1>
            <p className='text-xs sm:text-2xl'>{education}</p>
        <div className='text-xs sm:text-2xl'>
            <h3>Contact Me</h3>
            <div className='flex space-x-3 ' >
            <Link href={""} ><Linkedin/></Link>
            <Link href={""} ><Envelope/></Link>
            </div>

            
        </div>
        </div>


    </div>
  )
}
