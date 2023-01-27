"use client";

import Header from '../components/Header';
import Pricing from '@/components/Pricing';
import {Features} from '@/components/Features';



export default function Home() {
  return (
    <>
    <Header/>
    <Pricing/>
    <Features/>
    
    </>
  )
}





    /* <div>
      
          <Button colorScheme='blue' _hover={{background:"red"}}>Hello World from Panaverse DAO!</Button><br/>
      <Flex justify="space-evenly" align="center">      
          <Box bgColor="yellow" w='120px' >This is a Box1</Box>
          <Box bgColor="green" w='120px' >This is a Box2</Box>
          <Box bgColor="blue" w='120px' >This is a Box3</Box>
      </Flex>

      <HStack spacing="30px" padding="20px">      
          <Box bgColor="yellow" w='120px' >This is a Box4-Stack</Box>
          <Box bgColor="green" w='120px' >This is a Box5-Stack</Box>
          <Box bgColor="blue" w='120px' >This is a Box6-Stack</Box>
      </HStack>
    </div>
    <div>
      <Text as="i">
      <p>This is a text </p>
      </Text>
      <div>
        <Heading as="h4" fontSize="20px" color="gray">This is a Heading part</Heading>
      </div>
    </div> */