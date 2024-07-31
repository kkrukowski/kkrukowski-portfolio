import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconListItem({text, icon}) {
    return (
        <div className={`flex items-center mt-3`}>
            <div className={`flex justify-center items-center bg-dark w-[45px] h-[45px] rounded-full shadow-lg`}>
                <FontAwesomeIcon icon={icon} color={`#fcfcfc`} className={`text-2xl`} />
            </div>
            <p className={`ml-4 text-lg font-medium`}>{text}</p>
        </div>
    )
}