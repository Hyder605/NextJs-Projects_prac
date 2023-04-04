'use client'
import Wrapper from "@/others/Wrapper";
import Image from "next/image";
import dd from "@/images/js.png"
import { useState } from "react";


export default function Navbar() {
    const [toggle, settoggle] = useState(true)


    return (
            <Wrapper>
            <div className="w-full h-16 hidden md:flex justify-end fixed top-0 bg-green-200 bg-gradient-to-r from-secondary to-primary/90">
                    <div className="flex items-center ">
                        <ul className="flex mr-6 space-x-6 text-xl font-semibold text-white cursor-pointer  ">
                            <a href="#home">
                                <li className="hover:scale-125 duration-300">Home</li>
                            </a>
                            <a href="#aboutme">
                                <li className="hover:scale-125 duration-300">About</li>
                            </a>
                            <a href="#recentworks">
                                <li className="hover:scale-125 duration-300">Recent Works</li>
                            </a>

                            <a href="#hireme">
                                <li className="hover:scale-125 duration-300">Hire Me</li>
                            </a>
                        </ul>
                    </div>

                </div>
            <header className="fixed top-0 w-full   flex justify-end items-center
            px-4  md:px-12 bg-gradient-to-r from-secondary to-primary/90">
                <nav>
                    <button className="md:hidden" onClick={() => {
                        settoggle(!toggle);
                    
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8  text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </button>
                    {/* {toggle? "yes":"No"} */}
                    {!toggle?
                    <ul className="fixed left-0 right-0  min-h-screen px-4 pt-8 space-y-4 bg-gradient-to-r from-secondary to-primary md:bg-transparent
                     text-white md:hidden" onClick={() => {
                        settoggle(!toggle);
                    
                    }}
                     >
                    <a href="#home">
                        <li className="hover:scale-125 duration-300" >Home</li>
                    </a>
                    <a href="#aboutme">
                        <li className="hover:scale-125 duration-300">About</li>
                    </a>
                    <a href="#recentworks">
                        <li className="hover:scale-125 duration-300">Recent Works</li>
                    </a>

                    <a href="#hireme">
                        <li className="hover:scale-125 duration-300">Hire Me</li>
                    </a>
                </ul>
                :null}

                </nav>
                
                
            </header>


        </Wrapper>
    )
}