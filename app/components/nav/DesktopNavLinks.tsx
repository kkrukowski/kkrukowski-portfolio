import Link from 'next/link';

import { useState } from "react";
import useNavStore from "../../store";

export default function DesktopNavLinks() {
    const menuIndex = useNavStore((state) => state.menuIndex);
    const updateMenuIndex = useNavStore((state) => state.updateMenuIndex);

    return (
        <ul className={`flex justify-center items-center space-x-6`}>
            <li className={`desktop-nav-link`}>
                <Link href="/">
                    <button onClick={() => updateMenuIndex(0)} className={`desktop-nav-link ${menuIndex === 0 ? 'active' : ''}`}>Strona główna</button>
                </Link>
            </li>
            <li className={`desktop-nav-link`}>
                <Link href="/portfolio">
                    <button onClick={() => updateMenuIndex(1)}
                            className={`desktop-nav-link ${menuIndex === 1 ? 'active' : ''}`}>Portfolio
                    </button>
                </Link>
            </li>
            <li className={`desktop-nav-link`}>
                <Link href="/uslugi">
                    <button onClick={() => updateMenuIndex(2)}
                            className={`desktop-nav-link ${menuIndex === 2 ? 'active' : ''}`}>Usługi
                    </button>
                </Link>
            </li>
            <li className={`desktop-nav-link`}>
                <Link href="/kontakt">
                    <button onClick={() => updateMenuIndex(3)}
                            className={`desktop-nav-link ${menuIndex === 3 ? 'active' : ''}`}>Kontakt
                    </button>
                </Link>
            </li>
        </ul>
    )
}