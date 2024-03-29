import React from 'react'

export default function HireMe() {
    return (
        <section>
            <div className=' h-64 md:h-64 py-8' id="hireme">
                <div className='bg-gradient-to-t bg-emerald-300 h-full flex flex-col rounded-full md:mx-5 lg:mx-24 xl:mx-44 justify-center items-center'>
                    <h1 className="md:font-extrabold sm:font-bold font-semibold text-[20px] sm:text-4xl md:text-4xl lg:text-5xl text-white">Available For Freelance Work</h1>
                    <button className="bg-red-500 hover:bg-green-300 rounded-full border-2 border-red-300 w-48 h-14 font-semibold text-2xl mt-3 text-white">Hire Me</button>
                </div>
            </div >

        </section >
    )
}
