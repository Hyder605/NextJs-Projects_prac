import CoreTrack from "../../src/app/components/sections/CoreTrack"
import { Hero } from "../../src/app/components/sections/Hero";
import Outcome from "../app/components/sections/Outcome";
import SpecialTracks from "../app/components/sections/SpecialTracks"


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
