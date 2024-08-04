"use client"

import React, {useEffect, useState} from 'react';

import LogoLink from './LogoLink';
import DesktopNavLinks from "./DesktopNavLinks";
import InstagramIconLink from "./InstagramIconLink";
import Link from "next/link";
import Image from "next/image";
import useNavStore from "../../store";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuIndex = useNavStore((state) => state.menuIndex);
    const updateMenuIndex = useNavStore((state) => state.updateMenuIndex);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen])

    const handleActiveLink = (index: number) => {
        updateMenuIndex(index);
        setIsOpen(false)
    }

    return (
        <>
            <nav className={"z-50 fixed w-full flex justify-center px-4 sm:px-12 desktop:px-24 mobile:justify-end items-center h-[80px] border-b-[2px] border-dark bg-light shadow-lg"}>
                {/* Desktop Menu */}
                <div className={"mobile:hidden flex justify-between w-[1250px] px-24"}>
                    {/* Logo */}
                    <LogoLink />
                    {/* Menu items */}
                    <DesktopNavLinks />
                    {/* Social media */}
                    <InstagramIconLink />
                </div>
                <div className={`hidden mobile:flex w-full items-center justify-between`}>
                    <LogoLink />
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
                    <div
                        className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} absolute flex flex-col items-center justify-center top-0 left-0 bg-dark w-full h-screen transition-all`}>
                        <ul className={`flex flex-col justify-center items-center space-x-6`}>
                            <li className={`desktop-nav-link`}>
                                <Link href="/">
                                    <button onClick={() => handleActiveLink(0)}
                                            className={`mobile-nav-link text-3xl sm:text-5xl ${menuIndex === 0 ? 'active' : ''}`}>Strona
                                        główna
                                    </button>
                                </Link>
                            </li>
                            <li className={`desktop-nav-link`}>
                                <Link href="/portfolio">
                                    <button onClick={() => handleActiveLink(1)}
                                            className={`mobile-nav-link text-3xl sm:text-5xl ${menuIndex === 1 ? 'active' : ''}`}>Portfolio
                                    </button>
                                </Link>
                            </li>
                            <li className={`desktop-nav-link`}>
                                <Link href="/uslugi">
                                    <button onClick={() => handleActiveLink(2)}
                                            className={`mobile-nav-link text-3xl sm:text-5xl ${menuIndex === 2 ? 'active' : ''}`}>Usługi
                                    </button>
                                </Link>
                            </li>
                            <li className={`desktop-nav-link`}>
                                <Link href="/kontakt">
                                    <button onClick={() => handleActiveLink(3)}
                                            className={`mobile-nav-link text-3xl sm:text-5xl ${menuIndex === 3 ? 'active' : ''}`}>Kontakt
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        <div
                            className={`absolute w-[250px] h-[250px] right-0 bottom-0 -rotate-12 -z-50 opacity-50`}>
                            <Image src={"/images/logo-light.png"} alt={"Logo"} layout="fill"
                                   className={`relative object-contain w-full h-full`}/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
