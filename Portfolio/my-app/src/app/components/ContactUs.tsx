import React from 'react'
import Wrapper from '../others/Wrapper'

export default function ContactUs() {
    return (
        <Wrapper>
            <section className='2xl:w-[1500px] xl:w-[1200px] lg:w-[1000px] md:w-[720px] sm:w-[600px] mx-auto h-auto shadow-2xl rounded-lg bg-[rgba(76,102,160,0.3)]'>
                {/* Header */}
                <div className='ml-4 pt-5 mb-5'>
                    <h1 className="font-extrabold  text-3xl sm:text-5xl text-white">Let's Connect</h1>
                </div>

                <div className='h-auto'>
                    <div className="w-[90%] mx-auto mt-4">
                        <input type={'text'} placeholder='Name' className='w-full bg-gray-700 border-black border-3 text-white text-xl font-bold' />
                    </div>
                    <div className="flex gap-7 w-[90%] mx-auto mt-4">
                        <input type={'text'} placeholder='Email' className='w-full bg-gray-700 border-black border-3 text-white text-xl font-bold' />
                        <input type={'text'} placeholder='Phone' className='w-full bg-gray-700 border-black border-3 text-white text-xl font-bold' />
                    </div>
                    <div className="flex  w-[90%] mx-auto mt-4">
                        <textarea  placeholder='Message' className=' w-full whitespace-normal h-40 flex-wrap placeholder:top-0 bg-gray-700 border-black border-3 text-white text-xl font-bold' />
                    </div>

                </div>
                <div className='ml-[5%] my-4'>
                <button className="bg-red-500 rounded-full border-2 border-red-300 w-28 mb-2 hover:bg-green-300">Submit</button>
                </div>



            </section>
        </Wrapper>
    )
}
