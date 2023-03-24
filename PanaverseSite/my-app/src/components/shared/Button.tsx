import React, { FC } from 'react'

export const Button:FC<{text:string}> = ({text}) => {
  return (
    <button className='bg-teal-800 text-white px-8 py-4 hover:bg-red-400 duration-300 hover:scale-110 rounded-full shadow-lg text-xl font-medium'>{text}</button>
  )
}
