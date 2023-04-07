'use client'
import React, { useState } from 'react'
import Logo from "../../assets/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { Wrapper } from '../shared/Wrapper'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [toggle, settoggle] = useState(true)
    
    
    return (
        <Wrapper>
            <header className=' items-center flex  sticky top-0 justify-between  py-4 bg-white'>
                {/* Logo */}
                <div>
                    {/* <h2 className='text-xl font-bold'>Panaverse Dao</h2> */}
                    <Image src={Logo} alt="Panverse logo" />
                </div>
                {/* Navigation bar */}
                <ul className='md:flex hidden space-x-8 font-medium'>
                    <li>
                        <Link href={"./"}>Home</Link>
                    </li>
                    <li><Link href={"/Courses"}>Courses</Link></li>
                </ul>
                <div
                    className="pr-5 md:hidden z-10 text-red-500 cursor-pointer"
                    onClick={() => {
                        settoggle(!toggle);
                        console.log(toggle)
                    
                    }}
                >
                    {toggle ? <GiHamburgerMenu size={25} /> : <RxCross2 size={25} />}
                </div>
                {!toggle && (
                    <div className="fixed top-0  left-0 bg-gray-800 h-screen text-red-500 w-full flex items-center justify-center">
                        <ul className=" m-7  text-white   ">
                            <li>
                                <Link href={"./"} onClick={() => {
                        settoggle(!toggle);
                    
                    }}>Home</Link>
                            </li>
                            <li><Link href={"/Courses"} onClick={() => {
                        settoggle(!toggle);
                    
                    }}>Courses</Link></li>

                        </ul>
                    </div>

                )}
            </header>
        </Wrapper>
    )
}

export default Header