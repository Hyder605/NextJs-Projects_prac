'use client'
import { Variability } from '@/Data/Variablility'
import Wrapper from '@/others/Wrapper'
import React, { useState } from 'react'

export default function MainBox() {

    const [selecteditem, setselecteditem] = useState('bio')
    const selecteddata = Variability.find((items) => items.slug === selecteditem)

    return (

        <Wrapper>
            <section >
                <div >
                    <div className='flex justify-center mx-[5%] sm:mx-[10%] md:mx-[15%] lg:mx-[20%]'>
                        {Variability.map((items) => (
                            <div onClick={() => setselecteditem(items.slug)} className=' w-[35%] sm:w-[60%] mx-auto flex justify-center  space-x-2 sm:space-x-4 h-14'>
                                {items.butt}
                            </div>

                        ))}
                    </div>


                </div>

                <div className="px-2 sm:px-8 -mt-7 sm:-mt-8 rounded-t-[30px] shadow-2xl flex border-t-2">
                    <div className='mt-16 h-auto mb-4 w-full md:mx-1 lg:mx-32'>
                        <div>{selecteddata?.title}</div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
