'use client'
import { Box, Button, Flex, VStack, Text, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../public/logo.png"


export default function Footer() {
  return (
    <Box boxShadow={"lg"} bg={"blackAlpha.300"} >

    <Flex  justifyContent={'space-evenly'}>
        <Box ml={"5"}  height={"200"} width={"30"} >
    <Image src={logo} alt={"Panaverse-logo"} height={100} width={170} ></Image>
    <Text fontWeight={"semibold"}>Certified Web 3.0 and Metaverse Developer:<br/> 
        A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</Text>
        </Box>
        <Flex  ml={'200'}>
        <VStack fontWeight={"normal"} pl={"3"} pt={"3"} 
         width={300}>
            <Heading fontSize={"22"} >Pages</Heading>
            <Link href={""} >Home</Link>
            <Link href={""}>Courses</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact Us</Link>
            
        </VStack>
        <VStack fontWeight={"normal"}  ml={"4"} mr={'0'} pt={"3"} 
        pl={""}  width={300} 
        >
            <Heading fontSize={"22"}>Programs</Heading>
            <Link href={""} >Home</Link>
            <Link href={""}>Courses</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact Us</Link>
            
        </VStack>
        </Flex>
       
        
    </Flex>
    
    
</Box>

  )
}
