import { AboutMe2 } from './aboutme-2';
import { aboutMe, Experience } from '@/app/data/page';
import { ExperienceP } from './experience';

export const Interests = ({ data }: any) => {
  const { title,hobbies } = data
  return (
    <>
          <div className='pl-8'>
            <h1 className='text-white'>{title}
              <div className="bg-green-200 h-1 drop-shadow-md rounded-full" />
            </h1>
          </div>
          <ul className='flex flex-col pl-12  items-start'>
            {hobbies.map((elm) => (
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
