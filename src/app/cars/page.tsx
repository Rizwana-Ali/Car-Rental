
import Image from "next/image";

function Cars() {
  return (
    <div className="overflow-hidden">
      {/* First row */}
      <div className="font-bold text-3xl text-center mt-8">
        <h1>Our Services</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
        {/* Car 1 */}
        <div className="text-center">
          <h3 className="font-semibold">12km</h3>
          <Image
            className="rounded-lg"
            src="/cars2.png"
            width={300}
            height={200}
            alt="Car"
          />
          <h3 className="text-yellow-400 font-semibold">BMW UX</h3>
          <h4 className="font-semibold">$100/Day</h4>
        </div>

        {/* Car 2 */}
        <div className="text-center">
          <h3 className="font-semibold">12km</h3>
          <Image
            className="rounded-lg"
            src="/cars2.png"
            width={300}
            height={200}
            alt="Car"
          />
          <h3 className="text-yellow-400 font-semibold">BMW UX</h3>
          <h4 className="font-semibold">$100/Day</h4>
        </div>

        {/* Car 3 */}
        <div className="text-center">
          <h3 className="font-semibold">12km</h3>
          <Image
            className="rounded-lg"
            src="/cars2.png"
            width={300}
            height={200}
            alt="Car"
          />
          <h3 className="text-yellow-400 font-semibold">BMW UX</h3>
          <h4 className="font-semibold">$100/Day</h4>
        </div>
      </div>

      {/* Journey Section */}
      <main className="bg-yellow-400 py-12">
        <div className="font-bold text-3xl text-center">
          <h1>Your Journey Starts Here</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8 px-6">
          {/* Card 1 */}
          <div className="text-white bg-stone-900 rounded-lg p-6 max-w-sm transition duration-300">
            <h2 className="font-bold text-xl">Drive with Ease</h2>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit!
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-white bg-stone-900 rounded-lg p-6 max-w-sm transition duration-300">
            <h2 className="font-bold text-xl">Convenience Guaranteed</h2>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit!
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-white bg-stone-900 rounded-lg p-6 max-w-sm transition duration-300">
            <h2 className="font-bold text-xl">Safety & Support</h2>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cars;
