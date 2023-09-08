import Navbar from "components/Navbar"
import Link from "next/link"
const support = () => {
    return (
        <>
            <Navbar />
            <div className=" text-white min-h-screen">
                <div className="container mx-auto p-8">
                    <h1 className="text-4xl font-semibold text-center mb-4">Welcome to, Mohd Usman!</h1>
                    <p className="text-xl text-center mb-6">Let me build a website for you</p>

                    {/* Add your personalized content and instructions here */}
                    <p className="text-xl text-center mb-6">If you have any questions or need assistance, I'm here to help.</p>

                    <div className="flex justify-center">
                        <Link href="/#contact" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full text-center">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default support