import Link from 'next/link';
import Image from 'next/image';

export default function LogoLink() {
    return (
        <div>
            <Link href="/">
                <Image src="/images/logo-dark.png" alt="Logo" width={60} height={45} />
            </Link>
        </div>
    )
}