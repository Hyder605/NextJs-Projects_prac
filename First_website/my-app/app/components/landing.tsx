'use client'
import { Box, Container, Flex, Spacer } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import cover from "../../public/cover.png"
// import '../globals.css';


export default function Landing() {
  return (
    <Box width="500" bg={"darkkhaki"}>
      <Flex >
        <Box bg={"green.300"} width={500}>hekkkkk</Box>
        <Spacer></Spacer>
        <Image src={cover} alt={"cover"} height="600" width={"400"}></Image>
        

      </Flex>
    </Box>
    
  )
}
