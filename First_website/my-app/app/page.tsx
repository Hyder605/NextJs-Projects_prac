'use client'
// import Image from 'next/image'
// import styles from './page.module.css'
import Navbar from './components/navbar'
import Landing from './components/landing'
import Footer from './components/footer'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
  <ChakraProvider>
    <div className="bg-primary-black overflow-hidden">

    <Navbar/>
    <Landing/>
    <Footer/>
    </div>
  </ChakraProvider>  
    </>
  )
}
