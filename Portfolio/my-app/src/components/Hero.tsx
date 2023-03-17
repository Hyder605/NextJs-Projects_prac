import Wrapper from "@/others/Wrapper"
import Image from "next/image"
import profilePic from "@/images/profile.png"


export default function Hero() {
    return (
        <Wrapper>
            <section>
                <div className=" flex justify-between bg-green-200 pl-[180px] mt-16 h-[600px]
                bg-gradient-to-r from-secondary to-primary/90 z-0">
                    <div className="pt-[138px] space-y-3">
                        <h1 className="font-extrabold text-5xl">Hey I am Haider Ali</h1>
                        <h2 className="text-2xl font-semibold">Mechanical Engineer</h2>
                        <button className="bg-red-500 rounded-full border-2 border-red-300 w-24">Resume</button>
                    </div>
                    <div className="mr-52">
                    <Image src={profilePic} alt="profile"/>
                    </div>

                </div>
                

            </section>
        </Wrapper>
    )
}
