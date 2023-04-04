import Image from "next/image"
import profilePic from "../images/profileGirl.png"
import Wrapper from "../others/Wrapper"


export default function Hero() {
    return (
        <Wrapper>
            <section>
                <div id="home" className=" flex flex-col-reverse md:flex-row justify-between bg-green-200 px-3 lg:px-32 md:pl-[150px] md:mt-16
                bg-gradient-to-r from-secondary to-primary/90">
                    <div className="pt-10 flex flex-col items-center md:items-stretch md:pt-[138px] space-y-3">
                        <h1 className="font-extrabold  text-4xl md:text-5xl ">Hey I am Marina</h1>
                        <h2 className="text-2xl font-semibold"> A Web Developer</h2>
                        <button className="bg-red-500 rounded-full border-2 border-red-300 w-28 hover:bg-green-300">Resume</button>
                    </div>
                    <div className="flex justify-center">
                    <div className="mt-8" >
                    <Image src={profilePic} alt="profile"/>
                    </div>
                    </div>

                </div>
                

            </section>
        </Wrapper>
    )
}
