'use client'
import { Box, Button, Flex, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../public/logo.png"
import { RevealWrapper } from  'next-reveal'

export default function Navbar() {
  return (
    <>
    <RevealWrapper delay={200} duration={1000} distance='500px' reset={true}>
    <Box boxShadow={"dark-lg"} backgroundColor={"white"} >

        <Flex  justifyContent="space-between">
            <Box ml={"5"}>
        <Image src={logo} alt={"Panaverse-logo"} height={50} width={85} ></Image>
            </Box>

            <HStack display={{base:"none", lg:"flex"}} fontSize={18}  gap={10} fontWeight='semibold'>
                
                <Link href={"/"} >Home</Link>
                <Link href={"./courses"}>Courses</Link>
                <Link href={"./about"}>About</Link>
                <Link href={"./contactus"}>Contact Us</Link>
                
            </HStack>
           
            <Button  colorScheme={"facebook"} 
            size='lg'height='30px' width='90px'
            float='right' borderRadius={"25"} bg={"#43c778"} justifyContent={"center"}
            marginTop={"auto"} marginBottom={"auto"} marginRight={"10"}
            >Apply</Button>
            
            
        </Flex>
        
        
    </Box>
    </RevealWrapper>
    
    </>
    )

}
