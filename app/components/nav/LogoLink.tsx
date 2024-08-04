import Link from 'next/link';
import Image from 'next/image';
import React from "react";

export default function LogoLink() {
    return (
        <div>
            <Link href="/">
                <div
                    className={`relative w-[48px] h-[48px] sm:w-[60px] sm:h-[60px]`}>
                    <Image src={"/images/logo-dark.png"} alt={"Logo"} layout="fill"
                           className={`relative object-contain w-full h-full`}/>
                </div>
            </Link>

        </div>
    )
}