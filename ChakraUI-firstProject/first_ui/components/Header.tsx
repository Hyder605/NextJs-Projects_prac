"use client";


import React from 'react'
import {Box } from "@chakra-ui/react";
import {Text} from "@chakra-ui/react";
import {Heading} from "@chakra-ui/react";


 export default function Header(){
    return(
      <Box pb="112px" as="section">
        <Box color="gray.50" bg="purple.600" pt="90px" pb="198px" px="8" textAlign={["left","left","center"]}>
      <Heading fontWeight="extrabold" fontSize={["3xl","3xl","5xl"]} textAlign="center">Simple pricing for your business</Heading>
    <Text fontWeight="medium" fontSize={["lg","lg","2xl"]} textAlign="center" pt="16px">Plans that are carefully crafted to suit your business.</Text>
    </Box>
    </Box>

    )
 }

    