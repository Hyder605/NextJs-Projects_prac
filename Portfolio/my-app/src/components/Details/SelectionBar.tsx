import Wrapper from '@/others/Wrapper'
import React from 'react'

export default function SelectionBar() {
  return (
    <Wrapper >
    <section >
        <div>
            <div className='w-[90%] sm:w-[60%] mx-auto flex justify-between  space-x-2 sm:space-x-4 h-14'>
                <div className='rounded-full w-1/3 bg-blue-500 my-2 flex flex-col justify-center items-center'>
                  <div>Biography</div>
                </div>
                <div className='rounded-full w-1/3 bg-blue-500 my-2 flex flex-col justify-center items-center'>
                  <div>Skills</div>
                </div>
                <div className='rounded-full w-1/3 bg-blue-500 my-2 flex flex-col justify-center items-center'>
                  <div>Education</div>
                </div>
            </div>

        </div>
    </section>
    </Wrapper>
  )
}
