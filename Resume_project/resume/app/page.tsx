
import {Head} from "@/components/head"
import { PersonalData } from "./data/page"
export default function Home() {
  return (
   <>
   
   <Head data={PersonalData}/>
   <h1 className="bg-green-300">Hello world</h1>
   </>
  )
}
