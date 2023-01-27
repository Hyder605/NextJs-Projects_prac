"use client";


import React from 'react'
import { Button, StackProps} from '@chakra-ui/react';
import {Box } from "@chakra-ui/react";
import{Flex} from "@chakra-ui/react";
import{Stack, VStack,HStack} from "@chakra-ui/react";
import {Text}  from "@chakra-ui/react";
import {Heading} from "@chakra-ui/react";
import CheckIcon from '@/icon/Icon';
import { Icon } from '@chakra-ui/react';



export const ListItem=(props:StackProps)=>{
    const {children, ...rest}=props;
    return(
        <HStack as="li" spacing="20px" {...rest} alignItems="start">
            <Icon as={CheckIcon} w="22px" h="22px"/>
            <Text textAlign={["left","left","center"]}>{children}</Text>

        </HStack>

    )
}

export default function Pricing(){
    return(
    
    <Box mx="6" as='section' >
    <Box    
     maxW="994px" margin="auto" mt="-256px" borderRadius="12px"
     overflow="hidden" boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'>
    <Flex direction={['column', 'column', 'row']}>
        <Box bg="#F0EAFB" p="60px" textAlign="center">
          <Text fontSize="24px" fontWeight="800">Premium PRO</Text>
          <Heading as='h3' fontSize={["5xl","5xl","6xl"]} mt="16px">$329</Heading>
          <Text color="#171923" fontSize="18px" fontWeight="500" mt="8px">billed just once</Text>
          <Button colorScheme="purple" size="lg" w={["auto","282px","282px"]} mt="24px">Get Started</Button>
        </Box>
    
        
        <Box
            maxW="994px" height={['425px', '350px', '300px']}
            p='60px' fontSize="16px" bg="white">
            <Text>
                Access these features when you get this pricing package for your buisness.
            </Text>
            <Stack as="ul" spacing='5' pt='6'>
                <ListItem>International Calling and messaging API</ListItem>
                <ListItem>Additional phone numbers</ListItem>
                <ListItem>Automated messages via Zapier</ListItem>
                <ListItem>24/7 support and consulting</ListItem>

            </Stack>
        </Box>
        </Flex>
    </Box>
    </Box>
    

    )
 }


