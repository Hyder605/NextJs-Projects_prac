import AboutMe from "@/components/AboutMe"
import ContactUs from "@/components/ContactUs"
import MainBox from "@/components/Details/MainBox"
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
    <MainBox/>
    <HireMe/>  
    <ContactUs/>
    </>  
   
  )
}
