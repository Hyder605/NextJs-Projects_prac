import Image from 'next/image'
import React from 'react'
import js from '@/images/js.png'
import Wrapper from '@/others/Wrapper'

export default function Expertise() {
    return (
        <Wrapper>
        <section className='2xl:w-[1500px] xl:w-[1200px] lg:w-[1000px] md:w-[720px] sm:w-[600px] mx-auto lg:-mt-16 xl:-mt-24 h-auto shadow-2xl rounded-lg bg-[rgba(76,102,160,0.3)]'>
            {/* Header */}
            <div className='flex justify-center mt-6'>
                <div className='flex flex-col text-center mt-4'>
                    <h2 className="text-2xl font-semibold">My Expertise</h2>
                    <h1 className="font-extrabold text-5xl">What I Do</h1>
                    <div className="rounded-full mx-20 mt-2 w-16 h-2 bg-red-500" />
                </div>
            </div>
            {/* Expertise section */}
            <div className='grid lg:grid-cols-3 gap-3 mt-4' >
                
                <div className=' flex flex-col items-center h-auto mt-2'>
                    <div className='w-20 h-20 mt-4'>
                        <Image src={js} alt="javascript"/>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <h2 className="text-2xl font-semibold">Website Design</h2>
                        <p className="px-10 mt-2 font-medium pb-4">Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse. Deal say over you age comparison new ham melancholy.</p>


                    </div>
                </div>    

                <div className=' flex flex-col items-center h-auto mt-2'>
                    <div className='w-20 h-20 mt-4'>
                        <Image src={js} alt="javascript"/>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <h2 className="text-2xl font-semibold">Website Design</h2>
                        <p className="px-10 mt-2 font-medium pb-4">Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse. Deal say over you age comparison new ham melancholy.</p>


                    </div>
                </div>  

                <div className=' flex flex-col items-center h-auto mt-2'>
                    <div className='w-20 h-20 mt-4'>
                        <Image src={js} alt="javascript"/>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <h2 className="text-2xl font-semibold">Website Design</h2>
                        <p className="px-10 mt-2 font-medium pb-4">Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse. Deal say over you age comparison new ham melancholy.</p>


                    </div>
                </div>            
            </div>

        </section>
        </Wrapper>
    )
}
