
export default function Footer() {
    return (
        <footer className="text-white bg-gray-900 pl-20 md:p-10">
            <div className="flex flex-col md:flex-row gap-10 md:gap-28">
                {/* Car Rental Section */}
                <div>
                    <h1 className="text-lg font-semibold mb-2">Car Rental</h1>
                    <p className="text-sm mb-4">
                        Lorem ipsum dolor sit amet consectetur<br />adipisicing elit. Commodi, omnis!
                    </p>
                    <p className="text-sm mb-2">Noida, Ultra Paradise</p>
                    <p className="text-sm">+91 123456789</p>
                </div>

                
                <div>
                    <h1 className="text-lg font-semibold mb-2">Important Links</h1>
                    <ul className="text-sm space-y-2">
                        <li>Home</li>
                        <li>About</li>
                        <li>Booking</li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-lg font-semibold mb-2">Location</h1>
                    <ul className="text-sm space-y-2">
                        <li>Home</li>
                        <li>About</li>
                        <li>Booking</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
