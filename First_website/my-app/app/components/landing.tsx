'use client'
import { Box,Flex, Heading, Spacer,Text, VStack,Stack,CardBody,Divider,CardFooter,Button,Card,ButtonGroup} from '@chakra-ui/react'
import Image from 'next/image'
import "/styles/styles.css"
import cover from "../../public/cover.png"


export default function Landing() {
  return ( 
    <>
    <Box>
      <Flex >
        <Box width={450} height={"350"} my={"25px"} mr={"25px"} bg={"blue.400"} borderRightRadius={"30px"}>
         <Heading fontSize={"40px"} px={"60px"} pt={"75px"} textAlign={"center"}>Web 3.0 Metaverse</Heading>
         <Text fontSize={"20px"}textAlign={"center"}>Earn as you Learn Program</Text>
         
        
        </Box>
        {/* <Spacer></Spacer>
        <Image src={cover} alt={"cover"} height="600" width={"400"}></Image> */}
        

      </Flex>
    </Box>

    <Box>
      <Flex >
        <Box>
          
        </Box>
        <Spacer></Spacer>
        <Box width={700} height={"350"} my={"25px"} ml={"25px"} bg={"blue.400"} borderLeftRadius={"30px"}>
          <Flex>
         <Heading fontSize={"40px"} px={"60px"} pt={"75px"} textAlign={"center"}>The Panaverse Community</Heading>
         <Text textAlign={"center"} px={"50px"} pt={"25px"}>Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand 
         the internet as we know it by introducing novel features and advancements.In this brand-new type of
          curriculum. In which students will learn how to make money and boost exports in the classroom 
          and will begin doing so within six months of the program's beginning. It resembles a cross 
          between a corporate venture and an educational project.</Text>
          </Flex>
        </Box>
        
        

      </Flex>
    </Box>

    <Box>
      <Flex >
        <Box width={600} height={"550"} my={"25px"} mr={"25px"} bg={"blue.400"} borderRightRadius={"30px"}>
          <Flex>
         <Heading fontSize={"40px"} px={"30px"} py={"30%"} textAlign={"center"} justifyItems={"center"}>What is Metaverse ?</Heading>
         <Text textAlign={"center"} px={"10px"} pt={"25px"}>A communal environment or virtual world made possible 
         by the fusion of physical and virtual reality is referred to as the "metaverse." 
         Users can engage in shared interactions with a wide range of virtual objects 
         and environments in this imagined networked virtual world. Various technology 
         businesses are aggressively pursuing the science fiction idea of a metaverse in 
         an effort to give users a seamless and immersive experience.Metaverse is a 
         highly-anticipated future version of the internet where users are able to 
         fully immerse themselves in a shared, virtual world. It is expected to have 
         a significant impact on a variety of industries and bring people together 
         from all over the world, but also raises important questions about privacy and security.</Text>
         </Flex>
         
        
        </Box>
            

      </Flex>
    </Box>

    <Box>
      <Flex direction={"column"} bg={"gray.200"}>
        <Box  width={"100%"}> 
        <VStack>
          <Heading>Program of Studies</Heading>
          <Text>The first three quarters are shared by all specialties and are dedicated to studying 
            Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development
            The graduates of this program will own products (Full-Stack App Templates, 
            AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO 
            and, if they like, will also be able to start off by offering services at a rate 
            of $50 per hour ($96,000 per year).</Text>
          
        </VStack>        
        </Box>
      
      <Flex my={"40px"} >
        <Card ml={"200px"}  borderStyle={"groove"} borderWidth={"5px"}>
          <CardBody >
          <Image
              src={cover}
              alt='Green double couch with wooden legs'
            />
            
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
           
          </CardFooter>
        </Card>


        <Card ml={"20px"} borderStyle={"groove"} borderWidth={"5px"}>
          <CardBody>
          <Image
              src={cover}
              alt='Green double couch with wooden legs'
            />
            
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
           
          </CardFooter>
        </Card>


        <Card mx={"20px"} borderStyle={"groove"} borderWidth={"5px"}>
          <CardBody>
          <Image
              src={cover}
              alt='Green double couch with wooden legs'
            />
            
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
           
          </CardFooter>
        </Card>


        <Card mr={"200px"} borderStyle={"groove"} borderWidth={"5px"}>
          <CardBody>
          <Image
              src={cover}
              alt='Green double couch with wooden legs'
            />
            
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
           
          </CardFooter>
        </Card>


        



      </Flex>
        



      </Flex>
    </Box>
    

    </>
    
  )
}
