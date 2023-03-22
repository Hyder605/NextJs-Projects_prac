import Wrapper from '@/others/Wrapper'
import React from 'react'

export default function Biography() {
  return (
    <Wrapper>
      <section>

        <div className=' flex flex-col sm:flex-row border-2 border-black '>
          <div className=' w-1/2 flex sm:space-x-10 items-center sm:justify-center '>
            <div className='flex flex-col m-2 sm:m-4 '>
              <h3>Name</h3>
              <h3>Phone</h3>
            </div>
            <div className='flex flex-col m-4'>
              <h3>Name</h3>
              <h3>Phone</h3>
            </div>
          </div>
          <div className='w-1/2 flex  sm:justify-start items-center'>
            <div className='flex flex-col m-2 sm:m-4'>
              <h3>Email</h3>
              <h3>LinkedIn</h3>
            </div>
            <div className='flex flex-col m-4'>
              <h3>Name</h3>
              <h3>Phone</h3>
            </div>
          </div>
        </div>

      </section>
    </Wrapper>
  )
}
