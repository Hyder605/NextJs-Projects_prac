import Wrapper from '@/others/Wrapper'
import React from 'react'
import { WorkCompleted } from '@/Data/WorkCompleted'
import Image from 'next/image'
import Link from 'next/link'

export default function RecentWorks() {
    return (
        <Wrapper>
            <section>
                <div className=" flex flex-col bg-green-200 mt-16 h-auto
                bg-gradient-to-r from-secondary to-primary/90 ">
                    <div className='pl-2'>
                        <h2 className="text-2xl font-semibold">My Recent Works</h2>
                        <div className="rounded-full mx-20 w-16 h-2 bg-red-500" />
                    </div>
                    <div className='grid grid-columns-3 grid-flow-col gap-10 mx-10 border-2 border-black rounded-lg h-auto justify-items-center my-4'>

                        {WorkCompleted.map((i) => (
                            <div key={i.id} className="bg-slate-300  justify-center items-center my-4">
                                <Image src={i.images} alt="djd" width={400} height={400} />
                                <h2 className="text-2xl font-semibold">{i.title}</h2>
                                <div className='text-xl'>
                                    <Link href={i.link}>Visit</Link>
                                </div>
                            </div>

                        ))}

                    </div>


                </div>
            </section>
        </Wrapper>
    )
}
