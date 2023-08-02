
import { useEffect, useRef } from "react"
import BScroll from "@better-scroll/core"
import VanillaTilt from "vanilla-tilt"

function OurRecentProjects() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(
        () => {
            if(containerRef.current) {
                BScroll(
                    containerRef.current,
                    {
                        scrollX: true,
                        scrollY: false,
                        disableMouse: false,
                        bounce: true,
                        bounceTime: 500
                    }
                )
            }

            const elements = document.querySelectorAll(".tilt")
            if (elements.length > 0) {
                VanillaTilt.init(
                    elements as any,
                    {
                        max: 25,
                        speed: 2000
                    }
                )
            }
        },
        []
    )

    return (
        <>
            <div className="w-full overflow-x-hidden py-3" ref={containerRef}>

                <div className="w-max flex items-center gap-x-7 px-4 md:px-8">

                    <div className="w-64 h-52 flex-shrink-0 rounded-xl bg-red-400 tilt"></div>
                    <div className="w-64 h-52 flex-shrink-0 rounded-xl bg-red-400 tilt"></div>
                    <div className="w-64 h-52 flex-shrink-0 rounded-xl bg-red-400 tilt"></div>
                    <div className="w-64 h-52 flex-shrink-0 rounded-xl bg-red-400 tilt"></div>
                    <div className="w-64 h-52 flex-shrink-0 rounded-xl bg-red-400 tilt"></div>
                    <div className="w-64 h-52 flex-shrink-0 rounded-xl bg-red-400 tilt"></div>
                    <div className="w-64 h-52 flex-shrink-0 rounded-xl bg-red-400 tilt"></div>
                    <div className="w-64 h-52 flex-shrink-0 rounded-xl bg-red-400 tilt"></div>

                </div>

            </div>
        </>
    )
}

export default OurRecentProjects