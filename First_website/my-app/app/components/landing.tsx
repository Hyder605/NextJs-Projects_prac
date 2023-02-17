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
        <Box boxShadow={"dark-lg"} width={450} height={"350"} my={"25px"} mr={"25px"} bg={"blue.400"} borderRightRadius={"30px"}>
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
        <Box boxShadow={"dark-lg"} width={700} height={"350"} my={"25px"} ml={"25px"} bg={"blue.400"} borderLeftRadius={"30px"}>
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
        <Box boxShadow={"dark-lg"} width={600} height={"550"} my={"25px"} mr={"25px"} bg={"blue.400"} borderRightRadius={"30px"}>
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
          <Heading mt={"10px"}>Program of Studies</Heading>
          <Text textAlign={"center"} px={"200px"}>The first three quarters are shared by all specialties and are dedicated to studying 
            Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development
            The graduates of this program will own products (Full-Stack App Templates, 
            AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO 
            and, if they like, will also be able to start off by offering services at a rate 
            of $50 per hour ($96,000 per year).</Text>
          
        </VStack>        
        </Box>
      
      <Flex my={"40px"} >
        {/* Quater one */}
        <Card maxH={"sm"} boxShadow={"dark-lg"} ml={"200px"}  borderStyle={"hidden"} borderWidth={"5px"} boxSizing={"border-box"} >
          <CardBody  >
          <Image
              src={cover}
              alt='Green double couch with wooden legs'
            />
            
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Quarter I</Heading>
              <Text>
              CS-101: Object-Oriented Programming using TypeScript
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent={"center"}>
              <Button variant='ghost' colorScheme='blue'>
                See More...
              </Button>
           
          </CardFooter>
        </Card>

{/* Quarter 2 */}
        <Card boxShadow={"dark-lg"} ml={"20px"} borderStyle={"hidden"} borderWidth={"5px"}>
          <CardBody>
          <Image
              src={cover}
              alt='Green double couch with wooden legs'
            />
            
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Quarter II</Heading>
              <Text>
              Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent={"center"}>
              <Button variant='ghost' colorScheme='blue'>
                See More...
              </Button>
           
          </CardFooter>
        </Card>

{/* Quarter 3 */}
        <Card maxH={"sm"} boxShadow={"dark-lg"} mx={"20px"} borderStyle={"hidden"} borderWidth={"5px"}>
          <CardBody>
          <Image
              src={cover}
              alt='Green double couch with wooden legs'
            />
            
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Quarter III</Heading>
              <Text>
              Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent={"center"}>
              <Button variant='ghost' colorScheme='blue'>
                See More...
              </Button>
           
          </CardFooter>
        </Card>

{/* Quarter 4 */}
        <Card  boxShadow={"dark-lg"} mr={"200px"} borderStyle={"hidden"} borderWidth={"5px"}>
          <CardBody>
          <Image
              src={cover}
              alt='Green double couch with wooden legs'
            />
            
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Quarter IV, V (Specialized)</Heading>
              <Text >
              Web 3.0 & Metaverse Specialization AI, Cloud-Native, IoT
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent={"center"}>
              <Button variant='ghost' colorScheme='blue'>
                See More...
              </Button>
           
          </CardFooter>
        </Card>


        



      </Flex>
        



      </Flex>
    </Box>
    

    </>
    
  )
}
