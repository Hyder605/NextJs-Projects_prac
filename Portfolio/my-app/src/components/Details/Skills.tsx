import Wrapper from '@/others/Wrapper'
import React from 'react'

export default function Skills() {
    return (
        <Wrapper>
            <section>

                <div className='flex justify-center mt-6'>
                    <div className='flex flex-row  items-center justify-center w-full border-2 border-black '>
                        <div className='flex flex-col w-full sm:items-center justify-center space-y-2 my-4 '>
                            <div className='px-2 text-sm sm:text-lg space-y-3 sm:space-y-2'>
                            <h3>Object Oriented Programing</h3>
                            <h3>Front End Development</h3>
                            <h3>Data Analytics</h3>
                            </div>
                        </div>
                        <div className='flex flex-col w-full justify-center space-y-3 sm:space-y-2 my-4 '>
                            <div className=' rounded-full w-[90%] border-2 border-black '>
                                <div className='bg-blue-500 rounded-full w-[80%] flex justify-center'>
                                    <p>80%</p>
                                    </div>
                            </div>
                            <div className=' rounded-full w-[90%] border-2 border-black'>
                                <div className='bg-blue-500 rounded-full w-[60%] flex justify-center'>
                                    <p>60%</p>
                                    </div>
                            </div>
                            <div className='rounded-full w-[90%] border-2 border-black'>
                                <div className='bg-blue-500 rounded-full w-[70%] flex justify-center'>
                                    <p>70%</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </Wrapper>
    )
}
