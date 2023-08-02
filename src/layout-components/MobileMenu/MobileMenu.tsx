
import { AiOutlineMenu } from "react-icons/ai"
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    useDisclosure
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { ApplicationRoutes } from "../../routes"

function MobileMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <button onClick={onOpen} className="text-white py-2.5 px-3.5 bg-white/5 rounded-lg">
                <AiOutlineMenu className="w-5 h-5 fill-gray-200" />
            </button>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement="left"
            >

                <DrawerOverlay />

                <DrawerContent>

                    <DrawerCloseButton />

                    <DrawerBody
                        pt="3.6rem"
                        px="1rem"
                        display="flex"
                        flexDirection="column"
                        rowGap="18px"
                        bgColor="#1e293b"
                    >

                        <Link
                            onClick={onClose}
                            to={ApplicationRoutes.pages.home}
                            className="text-base text-slate-100 font-normal tracking-wide"
                        >
                            Home
                        </Link>

                        <Link
                            onClick={onClose}
                            to={ApplicationRoutes.pages.about}
                            className="text-base text-slate-100 font-normal tracking-wide"
                        >
                            About
                        </Link>

                        <Link
                            onClick={onClose}
                            to={ApplicationRoutes.pages.orderProject}
                            className="text-base text-slate-100 font-normal tracking-wide"
                        >
                            Order Project
                        </Link>

                    </DrawerBody>

                </DrawerContent>

            </Drawer>
        </>
    )
}

export default MobileMenu