import AboutMe from "@/app/components/AboutMe"
import ContactUs from "@/app/components/ContactUs"
import MainBox from "@/app/components/Details/MainBox"
import Expertise from "@/app/components/Expertise"
import Hero from "@/app/components/Hero"
import HireMe from "@/app/components/HireMe"
import Navbar from "@/app/components/Navbar"
import RecentWorks from "@/app/components/RecentWorks"

export default function Home() {
  return (
    <>
    <Navbar/>
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
