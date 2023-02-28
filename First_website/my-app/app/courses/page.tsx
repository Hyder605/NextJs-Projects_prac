"use client"
import { Box, Center, Heading, Text , Flex} from '@chakra-ui/react'
import React from 'react'
import { cards } from '../components/database'
import Home from '../components/Home'

export default function Courses() {
  return (
    <>
    <Home title="Courses" src="https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?w=2000"/>
    <Box pt={"30px"}>
      <Center flexDir={"column"}>
        <Heading fontSize={"2xl"} fontWeight="extrabold">Courses Syllabus</Heading>
        <Text mt={"10px"} mx={"150px"} textAlign={"center"}>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>
      </Center>
      <Flex my={"20px"} gap={"10px"} justifyContent={"center"}>
        
        <Box textAlign={"center"} p={"50px"}  boxShadow={"dark-lg"} borderRadius={"20px"} width={"300px"}>
          <Heading fontSize={"2xl"} fontWeight={"bold"}>Quarter I</Heading>
          <Text>CS-101: Object-Oriented Programming using TypeScript and Typescript for Reac</Text>
        </Box>
        <Box textAlign={"center"} p={"50px"} boxShadow={"dark-lg"} borderRadius={"20px"} width={"300px"}>
        <Heading fontSize={"2xl"} fontWeight={"bold"}>Quarter II</Heading>
          <Text>W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Text>
        </Box>
        <Box textAlign={"center"} p={"50px"} boxShadow={"dark-lg"} borderRadius={"20px"} width={"300px"}>
        <Heading fontSize={"2xl"} fontWeight={"bold"}>Quarter III</Heading>
          <Text>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Text>
        </Box>

      </Flex>
    </Box>
    <Box py={"20px"}>
      <Center flexDir={"column"}>
          <Heading fontSize={"2xl"} fontWeight={"bold"}>Specialized Tracks</Heading>
          <Text>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>
      </Center>
    </Box>

    {cards.map((elm)=>(
    <Box my={"20px"} key={elm.id}>
      <Center flexDir={"column"} >
      <Heading fontSize={"2xl"} fontWeight={"bold"}>{elm.heading1}</Heading>
      <Text px={"50px"} textAlign={"center"}>{elm.text1}</Text>
      </Center>
      <Flex my={"20px"} gap={"10px"} justifyContent={"center"}>
        
        <Box textAlign={"center"} p={"50px"}  boxShadow={"dark-lg"} borderRadius={"20px"} width={"450px"}>
          <Heading fontSize={"2xl"} fontWeight={"bold"}>{elm.heading2}</Heading>
          <Text>{elm.text2}</Text>
        </Box>
        <Box textAlign={"center"} p={"50px"} boxShadow={"dark-lg"} borderRadius={"20px"} width={"450px"}>
        <Heading fontSize={"2xl"} fontWeight={"bold"}>{elm.heading3}</Heading>
          <Text>{elm.text3}</Text>
        </Box>
      </Flex>
    </Box>
     ))}
    </>
  )

}
