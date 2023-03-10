import { AboutMe2 } from './aboutme-2';
import { aboutMe, Experience } from '@/app/data/page';
import { ExperienceP } from './experience';
import Link from 'next/link';

export const ContactMe = ({ data }: any) => {
  const { title,Phone, Email,LinkedIn } = data
  return (
    <>
          <div className='pl-8'>
            <h1 className=' text-white w-full'>{title}
              <div className="bg-green-200 h-1 drop-shadow-md rounded-full" />
            </h1>
          </div>
          <ul  key={data} className='flex flex-col pl-12  items-start'>
            <li >
                <span className='flex '>
                   <p className='font-bold'>Phone: </p>
                    {Phone}
                </span>
                <span className='flex '>
                   <p className='font-bold'>Email: </p>
                    {Email}
                </span>
                <span className='flex '>
                   <Link  href={"https://www.linkedin.com/in/haider-ali605/ target='_blank' rel='noopener'"} className='font-bold'>LinkedIn: </Link>
                    {LinkedIn}
                </span>
            </li>
          </ul>
    </>


  )
}
