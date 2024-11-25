
import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-8 lg:px-16">
      {/* Image Section */}
      <div className="mt-10 md:mt-20 w-full md:w-1/2 flex justify-center">
        <Image
          src={"/yellowcar.png"}
          width={2000}
          height={800}
          alt="car"
          className="object-cover rounded-lg"
        />
      </div>

      
      <div className="mt-10 mb-10 md:mt-36 w-full md:w-1/2 text-center md:text-left px-4 md:px-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-4">About Us</h1>
        <p className="text-sm md:text-base leading-relaxed">
          Our mission is to provide you with the freedom to explore your destination without worries, offering a wide range of cars to suit every need and budget. From economy-friendly options to luxury rides, our extensive fleet ensures that you find the perfect vehicle for your next adventure.
        </p>
      </div>
    </div>
  );
}

export default About;
