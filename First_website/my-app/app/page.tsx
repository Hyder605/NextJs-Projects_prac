'use client'
// import Image from 'next/image'
// import styles from './page.module.css'
import Landing from './components/landing'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
  <ChakraProvider>
    <div className="bg-primary-black overflow-hidden">

    
    <Landing/>
    </div>
  </ChakraProvider>  
    </>
  )
}
