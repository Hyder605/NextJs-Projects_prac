import { FC } from "react";

interface InterestProps {
  data: {
    title: string;
    hobbies: string[];
  };
}
export const Interests:FC<InterestProps> = ({ data }) => {
  const { title,hobbies } = data
  return (
    <>
          <div className='pl-8'>
            <h1 className='text-white'>{title}
              <div className="bg-green-200 h-1 drop-shadow-md rounded-full" />
            </h1>
          </div>
          <ul className='flex flex-col pl-12  items-start'>
            {hobbies.map((elm:string) => (
              <div  key={elm} className='flex'>
                <li>
                  {elm}
                  <div className="bg-green-200 h-1 drop-shadow-md rounded-full" />
                </li>
              </div>


            ))}
          </ul>
    </>


  )
}
