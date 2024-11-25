
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        
        <div className="px-8 lg:pl-20 pt-16 lg:pt-24 lg:pb-40 text-center lg:text-left">
          <h4 className="text-yellow-500 text-lg lg:text-xl">Effortless</h4>
          <h1 className="font-bold text-2xl lg:text-4xl pt-5">Car Rental</h1>
          <p className="text-sm lg:text-base mt-4">
            Welcome to Car Rental, your premier car rental destination! Explore our vast fleet of top-brand vehicles and enjoy a seamless car rental experience.
          </p>
          <button className="bg-yellow-500 text-sm lg:text-base px-6 py-2 rounded-md mt-7 hover:bg-yellow-600">
            Book Now
          </button>
        </div>

        {/* Image */}
        <div className="mt-10 lg:mt-0 lg:ml-20 px-5">
          <Image
            className="rounded-md"
            src={"/car3.png"}
            width={600}
            height={400}
            alt="Car"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Get Started Section */}
      <div className="bg-yellow-500 mt-10 px-8 py-12 lg:py-20">
        <h1 className="font-bold text-2xl lg:text-3xl text-center lg:text-left">
          Get Started with Our App
        </h1>
        <p className="text-center lg:text-left text-sm lg:text-base mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Placeat,
          quo. Deleniti iure voluptate earum quos!
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 mt-8">
          <Image
            src={"/googlcrop.jfif"}
            width={200}
            height={100}
            alt="Google Play"
          />
          <Image
            src={"/applecrop.jfif"}
            width={200}
            height={100}
            alt="App Store"
          />
        </div>
      </div>
    </main>
  );
}
