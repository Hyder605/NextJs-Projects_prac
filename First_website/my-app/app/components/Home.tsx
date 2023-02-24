import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home(hello:any) {
  return (
    <Box bgImage={hello.src} py="200px" bgSize={"cover"} bgAttachment={"fixed"}>
        <Heading pl="30px"color={"black"} fontSize={"5xl"}>{hello.title}</Heading>
    </Box>
  )
}
