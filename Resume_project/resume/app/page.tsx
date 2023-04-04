import {AboutMe} from "@/app/components/aboutme"
import { AboutMe2 } from "@/app/components/aboutme-2"
import Link from "next/link"
import { SideBar } from '@/app/components/sidebar'

import {Skills } from "./data/page"


export default function Home() {
  return (
   <>
    <SideBar data={Skills} />  
   
   </>
  )
}
