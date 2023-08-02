
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt"

interface Props {
    title: string;
    desc: string;
}

function FeatureCard_1({ desc, title }: Props) {

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(
        () => {
            if(containerRef.current) {
                VanillaTilt.init(
                    containerRef.current,
                    {
                        max: 25,
                        speed: 1800,
                        glare: true,
                        "max-glare": 0.2,
                        scale: 1.09
                    }
                )
            }
        }
    )

    return (
        <div ref={containerRef} className="w-72 aspect-square cursor-default rounded-3xl
        preserve-3d [transform:perspective(1000px)] p-3">
            {/* <img
            alt=""
            src={img}
            loading="lazy"
            decoding="async"
            className="w-10 h-10 object-center object-cover rounded-xl"
        /> */}

            <p
                className="text-xl font-normal tracking-wide text-gray-100 mt-3 [transform:translateZ(20px)]"
            >
                {title}
            </p>

            <p
                className="text-base text-gray-400 tracking-wide font-light mt-4 [transform:translateZ(25px)]"
            >
                {desc}
            </p>
        </div>
    )
}

export default FeatureCard_1