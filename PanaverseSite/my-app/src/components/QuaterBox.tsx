import React, { FC } from 'react'

const QuaterBox:FC<{header:string,description:string,quarterNo:number}> = ({header,description,quarterNo}) => {
    return (
        <div className='border rounded-md w-full relative px-8 py-12'>
            <h4 className="font-bold text-lg">{header}</h4>
            <p className='mt-2 text-slate-600'>{description}</p>
            <span className='absolute top-0 right-14 text-9xl font-bold -z-10 text-gray-200'>{quarterNo}</span>
        </div>
    )
}

export default QuaterBox