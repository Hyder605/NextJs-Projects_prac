import React from 'react'
import Logo from "../../assets/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { Wrapper } from '../shared/Wrapper'

const Header = () => {
    return (
        <Wrapper>
        <header className=' items-center flex sticky top-0 justify-between  py-4 bg-white'>
            {/* Logo */}
            <div>
            {/* <h2 className='text-xl font-bold'>Panaverse Dao</h2> */}
            <Image src={Logo} alt="Panverse logo"/>
            </div>
            {/* Navigation bar */}
            <ul className='flex space-x-8 font-medium'>
                <li>
                    <Link href={"./"}>Home</Link>
                </li>
                <li><Link href={"#"}>Courses</Link></li>
            </ul>
        </header>
        </Wrapper>
    )
}

export default Header