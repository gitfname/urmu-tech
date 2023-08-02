
import { useRef, useState } from "react"
import { sendOrderProjectGmail } from "../../services/api/sendOrderProjectGmail"
import { useToast } from "@chakra-ui/react"

function OrderProject() {
    const toast = useToast()
    const firstNameRef = useRef<HTMLInputElement>(null)
    const deadLineRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const projectNameRef = useRef<HTMLInputElement>(null)
    const budgetRef = useRef<HTMLInputElement>(null)
    const descRef = useRef<HTMLTextAreaElement>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async () => {
        if (!firstNameRef.current?.value || !deadLineRef.current?.value || !emailRef.current?.value
            || !projectNameRef.current?.value || !budgetRef.current?.value || !descRef.current?.value
        ) {
            toast({
                description: "Fill all the fields correctly",
                position: "top-left",
                isClosable: true,
                duration: 2800,
                status: "error"
            })
        }
        else {
            try {
                setLoading(true)
                await sendOrderProjectGmail({
                    budget: budgetRef.current.value,
                    deadLine: deadLineRef.current.value,
                    desc: descRef.current.value,
                    email: emailRef.current.value,
                    firstName: firstNameRef.current.value,
                    projectName: projectNameRef.current.value
                });
                setLoading(false)
                toast({
                    description: "Thank you for choosing us. we'll respond to you as soon as possible",
                    position: "top-left",
                    isClosable: true,
                    duration: 3000,
                    status: "success"
                })
            } catch (error) {
                toast({
                    description: "something went wrong. please try again later",
                    position: "top-left",
                    isClosable: true,
                    duration: 3000,
                    status: "error"
                })
                setLoading(false)
            }
        }
    }

    return (
        <div className="w-full px-4 md:px-8 pt-32 grid place-items-center bg-black min-h-screen">

            <div className="w-full max-w-md p-4 py-8 rounded-3xl bg-white/5">

                <p
                    className="text-2xl text-gray-100 font-normal tracking-wide"
                >
                    Order Project
                </p>

                <div
                    className={`flex flex-col mt-7 gap-y-3.5 ${loading ? "pointer-events-none" : ""}`}
                >

                    <input
                        ref={emailRef}
                        type="email"
                        maxLength={90}
                        placeholder="Email Address"
                        className="appearance-none bg-transparent focus-within:outline-none text-sm text-gray-100
                    placeholder-gray-500 font-normal p-2.5 border border-white/10 rounded-lg
                    focus:border-white/30 transition-colors duration-300 tracking-wide"
                    />

                    <input
                        ref={firstNameRef}
                        type="text"
                        maxLength={50}
                        placeholder="First name"
                        className="appearance-none bg-transparent focus-within:outline-none text-sm text-gray-100
                    placeholder-gray-500 font-normal p-2.5 border border-white/10 rounded-lg
                    focus:border-white/30 transition-colors duration-300 tracking-wide"
                    />

                    <input
                        ref={projectNameRef}
                        type="text"
                        maxLength={140}
                        placeholder="Project name"
                        className="appearance-none bg-transparent focus-within:outline-none text-sm text-gray-100
                    placeholder-gray-500 font-normal p-2.5 border border-white/10 rounded-lg
                    focus:border-white/30 transition-colors duration-300 tracking-wide"
                    />

                    <input
                        ref={deadLineRef}
                        type="text"
                        maxLength={70}
                        placeholder="deadline"
                        className="appearance-none bg-transparent focus-within:outline-none text-sm text-gray-100
                    placeholder-gray-500 font-normal p-2.5 border border-white/10 rounded-lg
                    focus:border-white/30 transition-colors duration-300 tracking-wide"
                    />

                    <input
                        ref={budgetRef}
                        type="number"
                        maxLength={80}
                        placeholder="Your budget ( Toman )"
                        className="appearance-none bg-transparent focus-within:outline-none text-sm text-gray-100
                    placeholder-gray-500 font-normal p-2.5 border border-white/10 rounded-lg
                    focus:border-white/30 transition-colors duration-300 tracking-wide"
                    />

                    <textarea
                        ref={descRef}
                        rows={5}
                        maxLength={900}
                        placeholder="Tell us about your idea :)"
                        className="appearance-none bg-transparent focus-within:outline-none text-sm text-gray-100
                    placeholder-gray-500 font-normal p-2.5 border border-white/10 rounded-lg
                    focus:border-white/30 transition-colors duration-300 tracking-wide"
                    ></textarea>

                    <button
                        onClick={handleSubmit}
                        className="self-stretch py-2.5 px-8 rounded-lg bg-gray-50 appearance-none text-gray-900 font-medium
                transition-transform active:scale-95 duration-300 mt-6 block mx-auto"
                    >
                        {
                            loading
                                ?
                                <div className="w-6 h-6 rounded-full border-t border-t-gray-900 mx-auto animate-spin duration-700"></div>
                                :
                                "Submit"
                        }
                    </button>

                </div>

            </div>

        </div>
    )
}

export default OrderProject