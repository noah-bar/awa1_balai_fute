import {HTMLAttributes} from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
    image: string,
    alt?: string,
}

const Card = ({children, image, alt, className}: CardProps) => {
    return <div className={`card flex w-auto align-center items-center gap-4 p-4 bg-gray-200 rounded-2xl ease-in duration-150 hover:bg-primary hover:text-white text-zinc-700 text-lg ${className ?? ''}`}>
        <img src={image} alt={alt} className="w-36 h-24 object-cover rounded"/>
        <span className={"tracking-wides"}>
            {children}
        </span>
    </div>
}

export default Card;
