import Navbar from "components/Navbar"
const support = () => {
    return (
        <>
            <Navbar />
            <div className="container text-white mx-auto p-8">
                <h1 className="text-4xl font-semibold mb-6">Privacy Policy</h1>

                <p className="mb-4">
                    This Privacy Policy  explains how Mohd Usman collects, uses, discloses, and safeguards your personal information. By using our services, you consent to the practices described in this Policy.
                </p>

                <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
                <p className="mb-4">
                    We may collect personal information such as your name, email address, and contact details when you use our services.
                </p>

                <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
                <p className="mb-4">
                    We use your information to provide, maintain, and improve our services, as well as to respond to your inquiries and send you updates.
                </p>

                <h2 className="text-2xl font-semibold mb-2">3. Disclosure of Your Information</h2>
                <p className="mb-4">
                    We may share your information with trusted third parties to assist us in operating our services or conducting business.
                </p>

                {/* Add more sections and content as needed */}

                <h2 className="text-2xl font-semibold mb-2">9. Contact Information</h2>
                <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us at mohdusman.developer@gmail.com.
                </p>

                <p className="text-sm text-gray-300">
                    Last Updated: September 1, 2023
                </p>
            </div>
        </>
    )
}

export default support