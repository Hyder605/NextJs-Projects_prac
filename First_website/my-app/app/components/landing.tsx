'use client'
import { Box,Flex, Heading, Spacer,Text, VStack,Stack,CardBody,Divider,CardFooter,Button,Card,Image} from '@chakra-ui/react'
// import Image from 'next/image'
import "/styles/styles.css"
import logo2 from "../../public/logo2.webp"
import logo from "../../public/logo.png"

import cover from "../../public/cover.png"
import s3 from "../../public/s3.webp"

import { RevealWrapper } from 'next-reveal'
import { NodeNextRequest } from 'next/dist/server/base-http/node'


export default function Landing() {
  return ( 
    <>
{/* First Section */}

    <Box bg={"gray.200"}>
      <Flex display={{lg:"flex",base:"grid"}}>
<RevealWrapper origin="left" delay={500} duration={1000} distance='500px' reset={true}>

        <Box boxShadow={"dark-lg"} width={{lg:"450" ,base:"300"}} height={"350"} my={"25px"} mr={"25px"} bg={"blue.300"} borderRightRadius={"30px"}>
         <Heading fontSize={"40px"} px={"60px"} pt={"75px"} textAlign={"center"}>Web 3.0 Metaverse</Heading>
         <Text fontSize={"20px"}textAlign={"center"}>Earn as you Learn Program</Text>
         
        
        </Box>
</RevealWrapper>
<RevealWrapper origin="right" delay={500} duration={1000} distance='500px' reset={true}>

        <Box ml={{lg:"250px",base:"10px"}} >
        <Image src='./logo2.webp' alt={"cover"} height="350" width={{lg:"400",base:"200"}} ></Image>
        </Box>
</RevealWrapper>
        

      </Flex>
    </Box>
  
{/* Second Section */}
    <Box bg={"gray.200"}>
      <Flex display={{lg:"flex",base:"grid"}}>
<RevealWrapper origin="left" delay={500} duration={1000} distance='500px' reset={true}>

        <Box pl={{lg:"125px",base:"20px"}} pt="100px">
        <Image src='./logo.png' alt={"cover"} height={{lg:"300",base:"150"}} width={{lg:"400",base:"200"}} ></Image>
        </Box>
</RevealWrapper>   
      
        <Spacer></Spacer>
      <RevealWrapper origin="right" delay={500} duration={1000} distance='500px' reset={true}>
        <Box boxShadow={"dark-lg"} width={{lg:700,base:350}} height={{lg:"350",base:"600"}} my={"25px"} ml={"25px"} bg={"blue.300"} borderLeftRadius={"30px"}>
          <Flex display={{base:"grid", lg:"flex"}}>
         <Heading fontSize={"40px"} px={"60px"} pt={"75px"} textAlign={"center"}>The Panaverse Community</Heading>
         <Text textAlign={"center"} px={"50px"} pt={"25px"}>Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand 
         the internet as we know it by introducing novel features and advancements.In this brand-new type of
          curriculum. In which students will learn how to make money and boost exports in the classroom 
          and will begin doing so within six months of the program's beginning. It resembles a cross 
          between a corporate venture and an educational project.</Text>
          </Flex>
    
        </Box>
      </RevealWrapper>
        
        

      </Flex>
    </Box>
{/* 3rd Section */}
    <Box bg={"gray.200"}>
      <Flex display={{base:"grid",lg:"flex"}}>
      <RevealWrapper origin="left" delay={500} duration={1000} distance='500px' reset={true}>        
        <Box boxShadow={"dark-lg"} width={{lg:600,base:350}} height={{lg:"550",base:"900"}} my={"25px"} mr={"25px"} bg={"blue.300"} borderRightRadius={"30px"}>
          <Flex display={{lg:"flex",base:"grid"}}>
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
        </RevealWrapper>
        <RevealWrapper origin="right" delay={500} duration={1000} distance='500px' reset={true}>

        <Box ml={{lg:"250px",base:"10px"}} >
        <Image src='./s3.webp' alt={"cover"} height="350" width={{lg:"400",base:"200"}} ></Image>
        </Box>
        </RevealWrapper>  
            

      </Flex>
      
    </Box>
{/* 4th Section + Cards */}
    <Box bg={"gray.200"}>
      <Flex direction={"column"} >
      <RevealWrapper origin="top" delay={500} duration={1000} distance='500px' reset={true}>        

        <Box  width={{lg:"100%"}}> 
        <VStack bg="green">
          <Heading mt={"10px"} fontSize={{base:'20px'}}textAlign={{base:"center"}}>Program of Studies</Heading>
          <Text textAlign={"center"} px={{lg:"200px",base:"20px"}}>The first three quarters are shared by all specialties and are dedicated to studying 
            Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development
            The graduates of this program will own products (Full-Stack App Templates, 
            AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO 
            and, if they like, will also be able to start off by offering services at a rate 
            of $50 per hour ($96,000 per year).</Text>
          
        </VStack>        
        </Box>
        </RevealWrapper>

      <Flex display={{base:"-ms-grid",lg:"flex"}}my={{lg:"40px",base:"2px"}} placeContent={{lg:"space-evenly",base:"center"}} px={{lg:"200px",base:"5px"}} gap={{lg:"10px",base:"2px"}}>
        {/* Quater one */}
<RevealWrapper origin="top" delay={500} duration={2000} distance='500px' reset={true}>
        <Card boxShadow={"dark-lg"}  borderStyle={"hidden"} borderWidth={"5px"} boxSizing={"border-box"} >
          <CardBody  >
          <Image
              src='./cover.png'
              alt='Green double couch with wooden legs'
            />
            
            <Stack mt='6' spacing='3'>
              <Heading size='md' textAlign={"center"}>Quarter I</Heading>
              <Text textAlign={"center"}>
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
</RevealWrapper>

{/* Quarter 2 */}
<RevealWrapper origin="top" delay={700} duration={3000} distance='500px' reset={true}>

        <Card boxShadow={"dark-lg"}  borderStyle={"hidden"} borderWidth={"5px"} >
          <CardBody>
          <Image
              src='./cover.png'
              alt='Green double couch with wooden legs'
            />
            
            <Stack mt='6' spacing='3'>
              <Heading size='md' textAlign={"center"}>Quarter II</Heading>
              <Text textAlign={"center"}>
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
</RevealWrapper>

{/* Quarter 3 */}
<RevealWrapper origin="top" delay={900} duration={3000} distance='500px' reset={true}>

        <Card maxH={"sm"} boxShadow={"dark-lg"}  borderStyle={"hidden"} borderWidth={"5px"}>
          <CardBody>
          <Image
              src='./cover.png'
              alt='Green double couch with wooden legs'
            />
            
            <Stack mt='6' spacing='3'>
              <Heading size='md' textAlign={"center"}>Quarter III</Heading>
              <Text textAlign={"center"}>
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
</RevealWrapper>

{/* Quarter 4 */}
<RevealWrapper origin="top" delay={1000} duration={3000} distance='500px' reset={true}>

        <Card  boxShadow={"dark-lg"} borderStyle={"hidden"} borderWidth={"5px"}>
          <CardBody>
          <Image
              src='./cover.png'
              alt='Green double couch with wooden legs'
            />
            
            <Stack mt='6' spacing='3'>
              <Heading size='md'textAlign={"center"}>Quarter IV, V (Specialized)</Heading>
              <Text textAlign={"center"}>
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
</RevealWrapper>


        



      </Flex>
        



      </Flex>
    </Box>
    

    </>
    
  )
}
