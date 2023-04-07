import React, { FC } from 'react'

const QuaterBox:FC<{header:string,description:string,quarterNo:number}> = ({header,description,quarterNo}) => {
    return (
        <div className='border rounded-md w-full md:relative px-12 py-16 shadow-lg flex flex-col items-center'>
            <h4 className="font-bold text-lg">{header}</h4>
            <p className='mt-2 text-slate-600'>{description}</p>
            <span className='md:absolute md:-top-3 md:right-14 md:text-9xl md:font-bold -z-10  text-gray-200'>{quarterNo}</span>
        </div>
    )
}

export default QuaterBox