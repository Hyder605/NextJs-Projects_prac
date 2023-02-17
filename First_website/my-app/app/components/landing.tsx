'use client'
import { Box, Container, Flex, Heading, Spacer,Text} from '@chakra-ui/react'
import Image from 'next/image'
import cover from "../../public/cover.png"


export default function Landing() {
  return ( 
    <>
    <Box bgImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fweb3&psig=AOvVaw2E5WKNCArGYgg28W2YbZf1&ust=1676730797883000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPiB8IvjnP0CFQAAAAAdAAAAABAS">
      <Flex >
        <Box width={450} height={"350"} my={"25px"} mr={"25px"} bg={"blue.400"} borderRightRadius={"30px"}>
         <Heading fontSize={"40px"} px={"60px"} pt={"75px"} textAlign={"center"}>Web 3.0 Metaverse</Heading>
         <Text fontSize={"20px"}textAlign={"center"}>Earn as you Learn Program</Text>
         
        
        </Box>
        <Spacer></Spacer>
        <Image src={cover} alt={"cover"} height="600" width={"400"}></Image>
        

      </Flex>
    </Box>
    </>
    
  )
}
