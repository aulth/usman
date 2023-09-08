import Navbar from "components/Navbar"
const support = () => {
    return (
        <>
            <Navbar />
                <div className="container text-white mx-auto p-8">
                    <h1 className="text-4xl font-semibold mb-6">Terms of Service</h1>
                    <p className="mb-4">
                        These terms of service are a legal agreement between user and Mohd Usman. By accessing or using our services, you agree to be bound by these Terms.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
                    <p className="mb-4">
                        By using our services, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">2. Description of Services</h2>
                    <p className="mb-4">
                        Mohd Usman provides web development and design services. You may use our services for lawful purposes only.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
                    <p className="mb-4">
                        You are responsible for maintaining the security of your account and for all activities that occur under your account.
                    </p>

                    {/* Add more sections and content as needed */}

                    <h2 className="text-2xl font-semibold mb-2">9. Contact Information</h2>
                    <p className="mb-4">
                        If you have any questions about these Terms, please contact us at mohdusman.developer@gmail.com.
                    </p>

                    <p className="text-sm text-gray-300">
                        Last Updated: September 1, 2023
                    </p>
                </div>
        </>
    )
}

export default support