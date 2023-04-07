import Image from "next/image"
import { Wrapper } from "../components/shared/Wrapper"
import { CoreTrackData } from "../data/CoreTrackData"
import { CourseSpecializeData } from "../data/CourseSpecializeData"
const Courses = () => {
    return (
        
        <section>
            <Wrapper>
                <div>
                    <h1 className="text-2xl font-extrabold text-center">Courses Syllabus</h1>
                    <p className="mt-3 mx-4 md:mx-36 text-center">The first three quarters are
                        shared by all specialties and are dedicated to studying Object-Oriented Programming
                        and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long
                        hybrid program that includes both onsite and online classes and is divided into five quarters
                        of 13 weeks each</p>

                </div>

                <div className='my-5 flex flex-col gap-y-3 md:flex-row md:gap-x-3 justify-center'>
                    {CoreTrackData.map((item) => {
                        return (
                            <div key={item.id} className='md:relative  flex flex-col text-center p-12 md:w-[300px] border rounded-3xl shadow-xl shadow-slate-400 '>
                                <h4 className="font-bold text-lg">{item.header}</h4>
                                <p className='mt-2 text-slate-600'>{item.description}</p>
                                <span className='md:absolute md:-top-3 md:right-14 md:text-9xl md:font-bold -z-10  text-gray-200'>{item.quarterNo}</span>
                            </div>
                        )
                    })}


                </div>

                <div>
                    <h1 className="text-2xl font-extrabold text-center">Specialized Tracks</h1>
                    <p className="mt-3 mx-4 md:mx-36 text-center">After completing the first two quarters the participants will select
                        one or more specializations consisting of two courses each:</p>

                </div>
                {CourseSpecializeData.map((items) => {
                    return (


                        <div className="my-7" key={items.id}>
                            <div>
                                <h1 className="text-2xl font-bold text-center">{items.heading1}</h1>
                                <p className="px-2 md:px-12 text-center ">{items.text1}</p>
                            </div>
                            <div className="my-5 gap-2 justify-center flex flex-col md:flex-row">
                                <div className="text-center p-6 md:p-12 md:w-[450px] border rounded-3xl shadow-xl shadow-slate-400 ">
                                    <h1 className="text-2xl font-bold text-center">{items.heading2}</h1>
                                    <p className="px-2 md:px-12 md:text-center ">{items.text2}</p>
                                </div>
                                <div className="text-center p-6 md:p-12 md:w-[450px] border rounded-3xl shadow-xl shadow-slate-400 ">
                                    <h1 className="text-2xl font-bold text-center">{items.heading3}</h1>
                                    <p className="px-2 md:px-12 md:text-center ">{items.text3}</p>
                                </div>

                            </div>
                        </div>
                    )
                })}


            </Wrapper>
        </section>
    
    
    )

}
export default Courses