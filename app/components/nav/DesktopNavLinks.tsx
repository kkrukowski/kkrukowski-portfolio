import Link from 'next/link';

import { useState } from "react";

export default function DesktopNavLinks() {
    const [activeLink, setActiveLink] = useState(0);

    const handleActiveLink = (index: number) => {
        setActiveLink(index);
    }

    return (
        <ul className={`flex justify-center items-center space-x-6`}>
            <li className={`desktop-nav-link`}>
                <Link href="/">
                    <button onClick={() => handleActiveLink(0)} className={`desktop-nav-link ${activeLink === 0 ? 'active' : ''}`}>Strona główna</button>
                </Link>
            </li>
            <li className={`desktop-nav-link`}>
                <Link href="/portfolio">
                    <button onClick={() => handleActiveLink(1)}
                            className={`desktop-nav-link ${activeLink === 1 ? 'active' : ''}`}>Portfolio
                    </button>
                </Link>
            </li>
            <li className={`desktop-nav-link`}>
                <Link href="/uslugi">
                    <button onClick={() => handleActiveLink(2)}
                            className={`desktop-nav-link ${activeLink === 2 ? 'active' : ''}`}>Usługi
                    </button>
                </Link>
            </li>
            <li className={`desktop-nav-link`}>
                <Link href="/kontakt">
                    <button onClick={() => handleActiveLink(3)}
                            className={`desktop-nav-link ${activeLink === 3 ? 'active' : ''}`}>Kontakt
                    </button>
                </Link>
            </li>
        </ul>
    )
}