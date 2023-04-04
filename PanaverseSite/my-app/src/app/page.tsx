import CoreTrack from "@/app/components/sections/CoreTrack";
import { Hero } from "@/app/components/sections/Hero";
import Outcome from "@/app/components/sections/Outcome";
import SpecialTracks from "@/app/components/sections/SpecialTracks";


export default function Home() {
  return (
    <>
    <Hero/>
    <CoreTrack/>
    <SpecialTracks/>
    <Outcome/>
    </>
  )
}
