"use client";

import { HStack, Box,StackProps, Stack } from "@chakra-ui/react";
import React from "react";
import { Icon } from '@chakra-ui/react';
import {Text} from "@chakra-ui/react";
import { MoneybackGuranteeIcon,MonthlySubscriptionIcon,HassleFreeIcon } from "../icon/Icon";


interface FeatureProps extends StackProps{
    icon:React.ElementType;
}

export default function Feature(props:FeatureProps){
    const { icon, children, ...rest}=props
    return(
        <HStack spacing="6">
            <Icon  as={icon} boxSize="48px"/>
                <Text textAlign="left" fontSize="18px"
                 fontWeight="700" >{children}</Text>
        </HStack>
    )
}
export function Features(){
    return(
        <Box as="section" maxW="1024px" m="auto" pt="60px" pb="32px">
            <Stack px="48px" spacing="20px" direction={['column', 'column', 'row']}>
                <Feature icon={MoneybackGuranteeIcon}>30 days money back Gurantee</Feature>
                <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
                <Feature icon={MonthlySubscriptionIcon}>No monthly subscription Pay once and for all</Feature>


            </Stack>
        </Box>
    )
}