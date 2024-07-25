import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function InstagramIconLink() {
    return (
        <div className={`flex justify-center items-center`}>
            <Link href={"https://www.instagram.com/fpv.of.raven/"} target="_blank">
                <FontAwesomeIcon icon={faInstagram} className={`text-2xl`} />
            </Link>
        </div>
    )
}