import Wrapper from '@/others/Wrapper'
import React from 'react'
import Biography from './Biography'
import Education from './Education'
import Skills from './Skills'

export default function MainBox() {
    return (
        <Wrapper>
            <section >
                <div className="px-2 sm:px-8 sm:-mt-8 rounded-t-[30px] shadow-2xl flex border-t-2">
                    <div className='mt-16 h-auto mb-4 w-full md:mx-1 lg:mx-32'>
                        <Biography />
                        <Skills/>
                        <Education/>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
