import { Box, Container, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function Landing() {
  return (
    <Flex>
    <Box borderStyle={"groove"} bg={"aqua"} 
    borderWidth={"thick"} w={300} height={500} placeContent={"end"} >
      Hello

    </Box>
    <Spacer/>
    <Box borderStyle={"groove"} bg={"aqua"} 
    borderWidth={"thick"} w={300} height={500} 
    transition={"ease-in"} transitionDuration={"5"}
    placeContent={"end"} >
      Hello

    </Box>
    </Flex>

  )
}
