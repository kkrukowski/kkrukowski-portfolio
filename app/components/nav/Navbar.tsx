"use client"

import React, { useState } from 'react';

import LogoLink from './LogoLink';
import DesktopNavLinks from "./DesktopNavLinks";
import InstagramIconLink from "./InstagramIconLink";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <>
            <nav className={"hidden z-50 absolute w-full lg:flex justify-center items-center h-[80px] border-b-[2px] border-dark"}>
                <div className={"flex justify-between w-[1000px]"}>
                    {/* Logo */}
                    <LogoLink />
                    {/* Menu items */}
                    <DesktopNavLinks />
                    {/* Social media */}
                    <InstagramIconLink />
                </div>
            </nav>
        </>
    )
}

export default Navbar;
