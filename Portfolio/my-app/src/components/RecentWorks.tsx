import Wrapper from '@/others/Wrapper'
import React from 'react'

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
                    <div className='grid grid-columns-3 grid-flow-col gap-4 bg-red-200 h-20 justify-items-center mt-4'>
                        <div>
                            <h1>ee</h1>
                        </div>
                        <div>
                            sjsas                            
                        </div>
                        <div>
                            asdsad
                        </div>
                    </div>
                    
                    
                </div>
            </section>
        </Wrapper>
    )
}
