import { Link } from "react-router-dom"
import { ApplicationRoutes } from "../../routes"

function Footer() {
    return (
        <div
            className="w-full px-4 md:px-8 mt-20 min-h-[11rem] relative"
        >

            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full
            bg-black border border-white/20 p-0.5"
            >
                <div className="w-full h-full rounded-full border border-white/10 p-0.5">
                    <div className="w-full h-full rounded-full border border-white/5"></div>
                </div>
            </div>

            <div className="mt-0.5 w-11/12 h-px mx-auto bg-gradient-to-r from-white/5 via-white/20 to-white/5"></div>
            <div className="mt-1 w-9/12 h-px mx-auto bg-gradient-to-r from-white/5 via-white/10 to-white/5"></div>
            <div className="mt-1 w-7/12 h-[0.5px] mx-auto bg-gradient-to-r from-white/5 via-white/10 to-white/5"></div>

            <div className="mt-9 md:mt-7 w-full">

                <Link
                    to={ApplicationRoutes.pages.home}
                    className="text-2xl text-gray-100 font-normal tracking-wide p-1.5 px-2.5 rounded-lg
                hover:bg-white/[0.03] transition-colors duration-500"
                >
                    Urmu Tech
                </Link>

                <div className="mt-8 md:mt-5 flex items-center justify-center gap-x-5">

                    <Link
                        className="text-sm text-gray-300 font-normal tracking-wide"
                        to={ApplicationRoutes.pages.about}
                    >
                        About
                    </Link>

                    <Link
                        className="text-sm text-gray-300 font-normal tracking-wide"
                        to={ApplicationRoutes.pages.orderProject}
                    >
                        Order Project
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Footer