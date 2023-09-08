import Navbar from "components/Navbar"
const support = () => {
    return (
        <>
            <Navbar />
            <div className="container text-white mx-auto p-8">
                <h1 className="text-4xl font-semibold mb-6">Cancellation and Refund Policy</h1>

                <p className="mb-4">
                    This Cancellation and Refund Policy outlines the terms and conditions for canceling services and seeking refunds from Mohd Usman. By using our services, you agree to comply with this Policy.
                </p>

                <h2 className="text-2xl font-semibold mb-2">1. Cancellation</h2>
                <p className="mb-4">
                    You may cancel services provided by Mohd Usman by contacting us at least 7 days before the scheduled service start date. Cancellation requests received after this period may not be eligible for a refund.
                </p>

                <h2 className="text-2xl font-semibold mb-2">2. Refunds</h2>
                <p className="mb-4">
                    Refund requests for canceled services will be considered based on the following conditions:
                    <ul className="list-disc ml-8">
                        <li>Full refunds will be issued for cancellations made within 5 days of the service purchase.</li>
                        <li>Partial refunds may be considered for cancellations made after 3 days but before the scheduled service start date.</li>
                        <li>No refunds will be provided for cancellations made after the scheduled service start date.</li>
                    </ul>
                </p>

                {/* Add more sections and content as needed */}

                <h2 className="text-2xl font-semibold mb-2">9. Contact Information</h2>
                <p className="mb-4">
                    If you have any questions about this Cancellation and Refund Policy, please contact us at mohdusman.developer@gmail.com.
                </p>

                <p className="text-sm text-gray-300">
                    Last Updated: September 1, 2023
                </p>
            </div>
        </>
    )
}

export default support