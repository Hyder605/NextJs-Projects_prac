'use client'
import { Box,Flex, VStack, Text, Heading, Container } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../public/logo.png"


export default function Footer() {
  return (
    <Container maxW={"1400"}>
      <Box boxShadow={"dark-lg"} bg={"blackAlpha.700"}>

        <Flex>
          <Box ml={{ lg: "5", base: "8" }} height={"200"} width={{ lg: "30", base: "50%" }} >
            <Image src={logo} alt={"Panaverse-logo"} height={100} width={170} ></Image>
            <Text fontWeight={"semibold"}>Certified Web 3.0 and Metaverse Developer:<br />
              A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</Text>
          </Box>
          
          <Flex ml={{ lg: '200', base: "12" }} display={{ lg: "flex", base: "grid" }} columnGap={"100px"}>
            <VStack fontWeight={"normal"} pl={"3"} pt={"3"}
              width={{ lg: "300", base: "0" }} textColor={"white"} >
              <Heading fontSize={"22"} fontWeight={"bold"}>Pages</Heading>
              <Link href={"/"}>Home</Link>
              <Link href={"./courses"}>Courses</Link>
              <Link href={"./about"}>About</Link>
              <Link href={"./contactus"}>Contact Us</Link>

            </VStack>
            <VStack fontWeight={"normal"} ml={"4"} mr={'0'} pt={"3"}
              pl={""} width={{ lg: "300", base: "2px" }} textColor={"white"}
            >
              <Heading fontSize={"22"} fontWeight={"bold"}>Follow US</Heading>
              <Link href={""} >FaceBook</Link>
              <Link href={""}>Twitter</Link>
              <Link href={""}>LinkedIn</Link>
              <Link href={""}>Youtube</Link>

            </VStack>
          </Flex>


        </Flex>


      </Box>
    </Container>

  )
}
