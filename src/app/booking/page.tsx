
import Image from "next/image";

export default function Booking() {
  return (
    <main className="p-4">
      <div className="text-center sm:text-left">
        <h1 className="font-bold text-4xl mt-10 sm:ml-32">Book Now</h1>
      </div>
      
      
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-5 space-y-10 lg:space-y-0 lg:space-x-8">
        
        
        <div className="border-2 border-yellow-500 p-8 w-full max-w-md mx-auto lg:ml-28 lg:mb-10">
          <div className="flex items-center space-x-4 mb-4">
            <Image src="/icons.png" width={20} height={20} alt="Email icon" />
            <div>
              <h4 className="font-medium">Hello@company.com</h4>
              <h4 className="font-medium">Support@company.com</h4>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <Image src="/location.png" width={20} height={20} alt="Location icon" />
            <div>
              <h4 className="font-medium">145 Rock Street,</h4>
              <h4 className="font-medium">New York, NY-58392</h4>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Image src="/callb.png" width={20} height={20} alt="Phone icon" />
            <h4 className="font-medium">1(123) 456-4587</h4>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-3xl mx-auto lg:mx-0">
          <Image
            src="/red car.png"
            width={700}
            height={500}
            alt="Car"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </main>
  );
}
