import Image from 'next/image'
import React from 'react'
import { Linkedin} from "./icons/linkedin"
import { Envelope } from './icons/envelope'
import Link from 'next/link'

export const Head=({data}:any)=>{
    const{name,education}=data
  return (
    <div className=" flex bg-gray-600  h-screen justify-center pt-12 sm:justify-around sm:w-1/3 sm:fixed">
        <div >
            <Image src="/a.png" 
              alt="DP" width={"150"} height={"150"}/>
            <h1>{name}</h1>
            <h2>{data.role}</h2>
            <p>{education}</p>
        <div>
            <h3>Contact Me</h3>
            <h3 className='flex space-x-3' >
            <Link href={""} ><Linkedin/></Link>
            <Link href={""} ><Envelope/></Link>
            </h3>

            
            
        </div>

            
        </div>


    </div>
  )
}
