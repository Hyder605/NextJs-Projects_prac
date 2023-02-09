'use client'
import { Box, Button, Flex, HStack,SimpleGrid,Container } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { getParseTreeNode } from 'typescript'
import logo from "../../public/logo.png"

export default function Navbar() {
  return (
    <>
    <Box >

        <Flex  justifyContent="space-between">
            <Box ml={"5"}>
        <Image src={logo} alt={"Panaverse-logo"} height={50} width={85} ></Image>
            </Box>

            <HStack fontSize={18}  gap={10} fontWeight='semibold'>
                
                <Link href={""}>Home</Link>
                <Link href={""}>Courses</Link>
                <Link href={""}>About</Link>
                <Link href={""}>Contact Us</Link>
                
            </HStack>
            <Button 
            size='lg'height='27px' width='85px'
            float='right' borderRadius={"25"} bg={"#43c778"} placeContent={"center"}
            marginTop={"auto"} marginBottom={"auto"} marginRight={"5"}
            >Apply</Button>
            
        </Flex>
        
        
    </Box>
    
    </>
    )

}
