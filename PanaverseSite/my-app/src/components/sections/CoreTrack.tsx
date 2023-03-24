import React from 'react'
import QuaterBox from '../QuaterBox'
import { Button } from '../shared/Button'
import { Wrapper } from '../shared/Wrapper'

const CoreTrack = () => {
    return (
        <section className='mt-16 lg:mt-28'>
            <Wrapper>
                <div className='max-w-screen-sm'>
                    <h4 className='text-teal-800 font-semibold text-lg'>Program of Studies</h4>
                    <h2 className="text-4xl font-bold ">Core Courses (Common in All Specializations):</h2>
                    <p className='mt-3 text-lg text-slate-600'>Every participant of the program will start by completing the following three core courses:</p>
                    <div className='mt-5'>
                        <Button text={"Learn More"} />
                    </div>

                </div>
                {/* BOXES */}

                <div className='my-20 flex flex-col gap-y-6 md:flex-row md:gap-x-4'>
                    {/* Transfering this to Component QuarterBox for reuseability  */}
                    {/* <div className='border rounded-md w-4/12 relative px-8 py-12'>
                        <h4 className="font-bold text-lg">Quarter I</h4>
                        <p className='mt-2 text-slate-600'>CS-101: Object-Oriented Programming using TypeScript</p>
                        <span className='absolute top-0 right-14 text-9xl font-bold -z-10 text-gray-200'>1</span>
                    </div> */}
                    <QuaterBox header={"Quarter I"} description={"CS-101: Object-Oriented Programming using TypeScript"} quarterNo={1}/>
                    <QuaterBox header={"Quarter II"} description={"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"} quarterNo={2}/>
                    <QuaterBox header={"Quarter III"} description={"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"} quarterNo={3}/>


                </div>

            </Wrapper>
        </section>
    )
}

export default CoreTrack