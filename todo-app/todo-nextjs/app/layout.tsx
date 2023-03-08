"use client"
import "./globals.css";
import {Text} from "@chakra-ui/react"






export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    
    <html>
      <body className="body">
        <Text textColor={"white"}  fontSize={"30px"}fontWeight={"bold"} textAlign={"center"}>TODO APP</Text>
          {children}
        </body>

    </html>

  )
}
