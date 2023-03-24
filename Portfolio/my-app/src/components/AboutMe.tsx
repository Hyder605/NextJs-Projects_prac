import Wrapper from '@/others/Wrapper'
import Image from 'next/image'
import React from 'react'
import profilePic from "@/images/profile.png"

export default function AboutMe() {
    return (
        <Wrapper>
            <section>
                <div className='grid grid-rows md:grid-cols-2 m-[30px] gap-3 '>
                    <div className=' md:block hidden '>
                        <Image src={profilePic} alt="profilePic" />
                    </div>
                    <div>
                        <div className='flex flex-col px-6 lg:p-20 md:h-3/4 justify-center'>
                            <h2 className="text-2xl font-semibold">About Me</h2>
                            <div className="rounded-full mx-5 mt-1 w-16 h-2 bg-red-500" />
                            <p className='mt-3 font-medium'>Hi, my name is Alex and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites. One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique</p>
                        </div>
                    </div>
                </div>

            </section>
        </Wrapper>
    )
}
