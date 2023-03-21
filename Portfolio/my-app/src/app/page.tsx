import AboutMe from "@/components/AboutMe"
import SelectionBar from "@/components/Details/SelectionBar"
import Expertise from "@/components/Expertise"
import Hero from "@/components/Hero"
import HireMe from "@/components/HireMe"
import RecentWorks from "@/components/RecentWorks"

export default function Home() {
  return (
    <>
    <Hero/>
    <Expertise/> 
    <RecentWorks/>
    <AboutMe/> 
    <SelectionBar/>
    {/* <HireMe/>   */}
    </>  
   
  )
}
