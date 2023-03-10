import {AboutMe} from "@/components/aboutme"
import { AboutMe2 } from "@/components/aboutme-2"
import Link from "next/link"
import { SideBar } from '@/components/sidebar'

import { aboutMe, PersonalData,Skills } from "./data/page"


export default function Home() {
  return (
   <>
    <SideBar data={Skills} />


    <Link href={"/new"}>clcik</Link>
   
   
   </>
  )
}
