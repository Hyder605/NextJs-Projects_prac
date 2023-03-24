import { FC } from "react";


export const ButtonType2:FC<{text:string}>=({text})=>{
    return (
        <div className='hover:bg-green-300 cursor-pointer rounded-full w-[90%] lg:h-10 bg-blue-500 my-2 flex flex-col justify-center items-center'>
            <button>{text}</button>
        </div>

    )
}