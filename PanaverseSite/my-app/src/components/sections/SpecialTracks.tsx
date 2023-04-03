'use client'
import React, { useState } from 'react'
import QuaterBox from '../QuaterBox'
import { Button } from '../shared/Button'
import { Wrapper } from '../shared/Wrapper'
import { data } from '@/data/SpecialCoreData'
import Image from 'next/image'





const SpecialTracks = () => {

    const [selecteditems,setselecteditems]=useState("wmd")

    const selecteditemData =data.find((item)=> item.slug===selecteditems)
    return (

        <section>
            <Wrapper>
                {/* Header */}
                <div>
                    <h2 className="text-4xl font-bold ">Specialized Tracks:</h2>
                    <p className='mt-3 text-lg text-slate-600'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
                </div>
                <div className='mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8'>
                    {/* Left side content */}
                    <div className='shadow-xl basis-8/12 rounded-xl border border-teal-300 py-8 px-8 '>
                        <h4 className='text-teal-600  text-lg'>Specialized Program</h4>
                        <h3 className='text-2xl font-semibold'>{selecteditemData?.header}</h3>
                        <p className='text-xl mt-3 text-teal-700'>{selecteditemData?.description} </p>
                        <button className='text-xl text-teal-600 mt-4 underline flex gap-x-2 items-center '>Learn More
                            <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
                            </svg>
                        </button>
                        <div className='flex flex-col sm:flex-row mt-6  gap-x-2'>
                            {selecteditemData?.quaters.map((i)=> 
                            <QuaterBox header={i.header} description={i.description}
                                quarterNo={i.number} key={i.number} />
                        
                            )}

                        </div>
                    </div>
                    {/* Right Side Content */}
                    <div className='px-4 py-6 basis-4/12 space-y-5'>
                        {data.map((item) => (
                            <div onClick={()=> setselecteditems(item.slug)}  className='flex gap-x-4 items-center cursor-pointer' key={item.id}>
                                <div className='flex shrink-0'>
                                <Image src={item.image} alt={item.header} className={"h-20 w-32 object-cover rounded-md"} />
                                </div>
                               
                                <div>
                                    <h4 className='text-primary font-medium'>Specialized Program</h4>
                                    <h3 className='text-xl font-semibold'>{item.header}</h3>
                                </div>




                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </section>

    )
}

export default SpecialTracks