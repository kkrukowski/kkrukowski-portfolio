import Link from "next/link";

export default function HrefLink({ href, text }) {
    return (
        <Link href={href} className={`text-primary font-medium hover:text-primary-dark active:text-primary-light transition-colors`}>{`>>> ${text}`}</Link>
    )
}