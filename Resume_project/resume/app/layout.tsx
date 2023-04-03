import './globals.css'
import { PersonalData, Skills } from './data/page'
import { AboutMe } from '@/components/aboutme'
export const metadata = {
  title: 'Resume',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col'>
      <main className=' bg-[#3cc0e88b]  w-full  p-8 sm:p-8  ml-auto'>
      <AboutMe data={PersonalData}/>
        </main>
      
      {/* <div className="bg-white h-5 ${sm:bg-green-300}"></div>
        <main className=' bg-yellow-400  w-full sm:w-2/3 p-8 sm:p-8  ml-auto'> */}
					{children}
				{/* </main> */}
      </body>
    </html>
  )
}
