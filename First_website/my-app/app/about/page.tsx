'use client'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Home from '../components/Home'
import presd from "../../public/President.webp"

export default function About() {
  return (
    <>
    <Home title="About" src="https://static.vecteezy.com/system/resources/previews/000/201/483/original/vector-inside-office-illustration.jpg"/>
    <Box >
      <Flex my={'50px'} px={{lg:"50px",base:"20px"}} gap={"20px"}display={{lg:"flex", base:'grid'}}>
        <Box flexBasis={"50%"}pl={"70px"}>
            <Image  src={presd} alt="President Image"/>
        </Box>
        <Box flexBasis={"50%"} pr={"40px"}>
          <Heading fontSize={"3xl"} fontWeight={"bold"}>Dr. Arif Alvi</Heading>
          <Text mt={"5px"}>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.<br/><br/>
                Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.<br/><br/>
                President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>

        </Box>
      </Flex>

    </Box>
    </>
  )
}
