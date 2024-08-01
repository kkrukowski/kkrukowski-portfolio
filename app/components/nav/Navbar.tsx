"use client"

import React, { useState } from 'react';

import LogoLink from './LogoLink';
import DesktopNavLinks from "./DesktopNavLinks";
import InstagramIconLink from "./InstagramIconLink";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }


    return (
        <>
            <nav className={"z-50 absolute w-full flex justify-center mobile:px-24 mobile:justify-end items-center h-[80px] border-b-[2px] border-dark"}>
                {/* Desktop Menu */}
                <div className={"mobile:hidden flex justify-between w-[1000px]"}>
                    {/* Logo */}
                    <LogoLink />
                    {/* Menu items */}
                    <DesktopNavLinks />
                    {/* Social media */}
                    <InstagramIconLink />
                </div>
                <div className={`hidden mobile:flex`}>
                    <button
                        onClick={toggleMenu}
                        className="flex flex-col items-end text-gray-700 focus:outline-none z-50"
                    >
                        <span className={`block transition-all duration-300 ease-out 
                    h-1 w-8 rounded-sm ${isOpen ?
                            '-rotate-45 translate-y-2 bg-light' : '-translate-y-0.5 bg-dark'
                        }`}></span>
                        <span className={`bg-dark block transition-all duration-100 ease-out 
                    h-1 rounded-sm my-1 ${isOpen ?
                            'w-0' : 'w-8'
                        }`}></span>
                        <span className={`bg-dark block transition-all duration-300 ease-out 
                    h-1 w-6 rounded-sm ${isOpen ?
                            'w-8 rotate-45 -translate-y-2 bg-light' : 'translate-y-0.5 bg-dark'
                        }`}></span>
                    </button>
                    <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} absolute top-0 left-0 bg-dark w-screen h-screen transition-all`}>
                        MENU
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
