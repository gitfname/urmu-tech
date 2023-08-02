
import { ReactNode } from "react"
import NavBar from "../layout-components/NavBar"
import Footer from "../layout-components/Footer/Footer"

interface Props {
    children: ReactNode
}

function ApplicationLayout({ children }: Props) {
    return (
        <div
            className="w-full min-h-screen bg-black"
        >

            {/* navbar */}
            <div className="fixed top-0 left-0 w-full p-3 z-50">
                <div className="w-full p-2 py-3 rounded-xl bg-white/10 backdrop-blur-md shadow-md shadow-black/10">
                    <NavBar />
                </div>
            </div>


            {/* main section */}
            <div className="overflow-y-auto">
                {children}
                <Footer />
            </div>

        </div>
    )
}

export default ApplicationLayout