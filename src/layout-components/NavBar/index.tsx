
import { Link } from "react-router-dom"
import { MobileMenu } from "../MobileMenu"
import { ApplicationRoutes } from "../../routes"

function NavBar() {
    return (
        <div className="w-full flex items-center justify-between px-0 md:px-8 h-full relative max-md:pr-1">

            <Link
                to="/"
                className="text-gray-100 text-lg py-1 px-4 rounded-lg hover:bg-white/5 self-stretch
                transition-colors duration-300 tracking-wide uppercase max-md:hidden"
            >
                Urmu Tech
            </Link>

            <div
                className="flex items-center gap-x-5 lg-max:hidden absolute left-1/2 top-1/2 -translate-y-1/2
                -translate-x-1/2 max-md:hidden"
            >
                <Link className="text-gray-100" to={ApplicationRoutes.pages.about}>About</Link>
                <Link className="text-gray-100" to={ApplicationRoutes.pages.orderProject}>Order Project</Link>
            </div>

            <Link
                to={ApplicationRoutes.pages.orderProject}
                className="self-stretch px-3.5 rounded-lg bg-gray-50 appearance-none text-gray-700 font-medium
                transition-transform active:scale-95 duration-300 grid place-items-center"
            >
                Order Project
            </Link>

            <div className="lg:hidden">
                <MobileMenu />
            </div>

        </div>
    )
}

export default NavBar