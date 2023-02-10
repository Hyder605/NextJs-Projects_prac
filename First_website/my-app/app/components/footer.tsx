'use client'
import { Box, Button, Flex, VStack, Text, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../public/logo.png"


export default function Footer() {
  return (
    <Box boxShadow={"lg"} bg={"yellow.200"} >

    <Flex  justifyContent='normal'>
        <Box ml={"5"}  height={"200"} width={"30"} bg={"gray.100"}>
    <Image src={logo} alt={"Panaverse-logo"} height={100} width={170} ></Image>
    <Text>Certified Web 3.0 and Metaverse Developer:<br/> 
        A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</Text>
        </Box>

        <VStack fontSize={18}  fontWeight='semibold' pl={"3"} bg={"green.300"} width={300}>
            <Heading>Pages</Heading>
            <Link href={""} >Home</Link>
            <Link href={""}>Courses</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact Us</Link>
            
        </VStack>
        <VStack fontSize={18} ml={"4"} mr={'0'} fontWeight='semibold' 
        pl={""} bg={"yellow.300"} width={300} 
        placeContent={"center"}>
            <Heading>Programs</Heading>
            <Link href={""} >Home</Link>
            <Link href={""}>Courses</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact Us</Link>
            
        </VStack>
       
        
    </Flex>
    
    
</Box>

  )
}
