'use client'
import { Box, Button, Flex, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../public/logo.png"

export default function Navbar() {
  return (
    <>
    <Box boxShadow={"lg"} >

        <Flex  justifyContent="space-between">
            <Box ml={"5"}>
        <Image src={logo} alt={"Panaverse-logo"} height={50} width={85} ></Image>
            </Box>

            <HStack fontSize={18}  gap={10} fontWeight='semibold'>
                
                <Link href={""} >Home</Link>
                <Link href={""}>Courses</Link>
                <Link href={""}>About</Link>
                <Link href={""}>Contact Us</Link>
                
            </HStack>
            <Button  colorScheme={"facebook"}
            size='lg'height='30px' width='90px'
            float='right' borderRadius={"25"} bg={"#43c778"} justifyContent={"center"}
            marginTop={"auto"} marginBottom={"auto"} marginRight={"5"}
            >Apply</Button>
            
        </Flex>
        
        
    </Box>
    
    </>
    )

}
