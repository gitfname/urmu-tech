
import getBaseUrl from "../../utils/base-url"
import styles from "./styles.module.css"

function Splash() {

    return (
        <div
            className="w-full min-h-screen flex flex-col gap-y-4 bg-[#050505] items-center justify-center"
        >

            <img
                loading="lazy"
                alt=""
                src={getBaseUrl()+"/loading-3.gif"}
                className="w-auto h-auto"
            />

            <p className="text-xl text-gray-400 font-light">Loading...</p>

            <p
                className={`text-gray-100 font-normal hidden ${styles.animate_text_shadow}`}
            >
                <span className="animate-fade-right inline-block animate-duration-1000 animate-delay-[1400ms]">
                    <span className="text-7xl">U</span>
                </span>

                <span className="animate-fade-right inline-block animate-duration-1000 animate-delay-[1300ms]">
                    <span className="text-7xl">r</span>
                </span>

                <span className="animate-fade-right inline-block animate-duration-1000 animate-delay-[1200ms]">
                    <span className="text-7xl">m</span>
                </span>

                <span className="animate-fade-right inline-block animate-duration-1000 animate-delay-[1100ms]">
                    <span className="text-7xl">u</span>
                </span>

                &nbsp;

                <span className="animate-fade-right inline-block animate-duration-1000 animate-delay-[1000ms]">
                    <span className="text-7xl">T</span>
                </span>

                <span className="animate-fade-right inline-block animate-duration-1000 animate-delay-[900ms]">
                    <span className="text-7xl">e</span>
                </span>

                <span className="animate-fade-right inline-block animate-duration-1000 animate-delay-[800ms]">
                    <span className="text-7xl">c</span>
                </span>

                <span className="animate-fade-right inline-block animate-duration-1000 animate-delay-[700ms]">
                    <span className="text-7xl">h</span>
                </span>
            </p>

        </div>
    )
}

export default Splash