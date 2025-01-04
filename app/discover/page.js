import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

// Import the Poppins font with desired configuration
const poppins = Poppins({
  subsets: ["latin"], // Ensures Latin characters are included
  weight: ["400", "500", "700"], // These weights are available for Poppins
  display: "swap", // Improves font display performance
});

export default function DiscoverPage() {
  return (
    <>
      <section
        className={`${poppins.className} bg-[#502274] grid grid-cols-1 md:grid-cols-2 min-h-[100vh] text-white pt-36`}
      >
        {/* Left Section */}
        <div className="px-4 md:pl-36 pt-48">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-gray-300">
            The best link in bio tool for Instagram
          </h1>
          <p className="text-lg text-gray-300 font-medium">
            Join the 50M+ creators, musicians, influencers and brands using
          </p>
          <p className="font-medium text-lg mb-6 text-gray-300">
            Linktree to share content and grow audiences with one simple link.
          </p>
          <button className="bg-yellow-500 text-black py-3 px-10 rounded-full font-semibold hover:bg-yellow-600">
            Sign up for free now
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center">
          <Image
            src="/discover-img.webp" // Replace with the actual path of the image
            alt="Discover Linktree"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </section>

      <section className={`${poppins.className} bg-[#E5E7EB] min-h-[100vh]`}>
        <div className="flex flex-col items-center justify-center pt-36">
          <h1 className="text-gray-900 font-extrabold text-6xl pb-6">
            Get more with Linktree
          </h1>
          <p className="text-gray-900 text-lg font-semibold">
            Help your followers discover, enjoy and support everything you have
            to offer when You add Linktree's Link In Bio today
          </p>
          <p className="text-gray-900 text-lg font-semibold pb-16">
            Your Instagram today.
          </p>
          <button className="text-gray-900 font-bold bg-[#E9C0E9] py-6 px-16 mb-16 rounded-full">
            <Link href="/generate">Sign up for free</Link>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 min-h-[80vh] px-4 md:px-20 py-20">
          <div className="col1 bg-[#E9C0E9] rounded-3xl p-6">
            <div className="col1-img">
              <Image
                src="/feature-7.avif" // Replace with the actual path of the image
                alt="Discover Linktree"
                width={300}
                height={500}
              />
            </div>
            <div className="info flex flex-col justify-center pt-6">
              <h1 className="text-[#502274] font-semibold text-2xl pb-4">
                More clicks
              </h1>
              <p className="text-[#502274] font-medium text-lg">
                Get more clicks on your content____
              </p>
              <p className="text-[#502274] text-lg font-medium">
                from blog posts to social and{" "}
              </p>
              <p className="text-[#502274] font-medium text-lg">
                everything in between.
              </p>
            </div>
            <div className="buttons flex gap-4 items-center justify-center mt-16 pb-10">
              <button className="font-semibold border border-gray-900 rounded-full px-3 py-1">
                Free
              </button>
              <button className="font-semibold border border-gray-900 rounded-full px-3 py-1">
                Premium
              </button>
              <button className="font-semibold border border-gray-900 rounded-full px-3 py-1">
                Pro
              </button>
              <button className="font-semibold border border-gray-900 rounded-full px-3 py-1">
                Starter
              </button>
            </div>
          </div>
          <div className="col2 bg-yellow-500 rounded-3xl p-6">
            <div className="col2-img">
              <Image
                src="/feature-5.avif-p-500.webp" // Replace with the actual path of the image
                alt="Discover Linktree"
                width={300}
                height={500}
              />
            </div>
            <div className="info flex flex-col justify-center pt-6">
              <h1 className="text-gray-900 font-semibold text-2xl pb-4">
                More engagement
              </h1>
              <p className="text-gray-900 font-medium text-lg">
                Get more clicks on your content____
              </p>
              <p className="text-gray-900 font-medium text-lg">
                from blog posts to social and{" "}
              </p>
              <p className="text-gray-900 font-medium text-lg">
                everything in between.
              </p>
            </div>
            <div className="buttons flex gap-4 items-center justify-center mt-16 pb-10">
              <button className="font-semibold border border-gray-900 rounded-full px-3 py-1">
                Free
              </button>
              <button className="font-semibold border border-gray-900 rounded-full px-3 py-1">
                Premium
              </button>
              <button className="font-semibold border border-gray-900 rounded-full px-3 py-1">
                Pro
              </button>
              <button className="font-semibold border border-gray-900 rounded-full px-3 py-1">
                Starter
              </button>
            </div>
          </div>
          <div className="col3 bg-[#800e0e] rounded-3xl p-6">
            <div className="col2-img">
              <Image
                src="/feature-8.webp" // Replace with the actual path of the image
                alt="Discover Linktree"
                width={300}
                height={500}
              />
            </div>
            <div className="info flex flex-col justify-center pt-6">
              <h1 className="text-gray-200 font-semibold text-2xl pb-4">
                More money
              </h1>
              <p className="text-gray-200 font-medium text-lg">
                Sell your products, take service
              </p>
              <p className="text-gray-200 font-medium text-lg">
                payments and add a "Tip jar" to
              </p>
              <p className="text-gray-200 font-medium text-lg">
                earn money with your content.
              </p>
              <p className="text-gray-200 font-medium text-lg">___</p>
            </div>
            <div className="buttons flex gap-4 items-center justify-center mt-16 pb-10">
              <button className="font-semibold border border-gray-200 text-gray-200 rounded-full px-3 py-1">
                Free
              </button>
              <button className="font-semibold border border-gray-200 text-gray-200 rounded-full px-3 py-1">
                Premium
              </button>
              <button className="font-semibold border border-gray-200 text-gray-200 rounded-full px-3 py-1">
                Pro
              </button>
              <button className="font-semibold border border-gray-200 text-gray-200 rounded-full px-3 py-1">
                Starter
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${poppins.className} bg-[#E5E7EB] min-h-[100vh] px-10`}
      >
        <h1 className="text-gray-900 font-extrabold text-center text-6xl pt-20">
          Getting started is easy
        </h1>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 pt-20 pr-4 pb-36">
          <div className="col1 bg-gray-50 rounded-2xl flex flex-col items-start pl-5 pt-10">
            <div className="img pb-10">
              <img src="/tick-yelow.avif" alt="" width={50} />
            </div>
            <div className="info">
              <p className="text-gray-900 font-semibold text-xl">
                Create and customize
              </p>
              <p className="text-gray-900 font-semibold text-xl">
                Your free (forever)
              </p>
              <p className="text-gray-900 font-semibold text-xl pb-4">
                Linktree
              </p>
              <p className="text-gray-900 font-medium text-xl">
                Add your personalized Linktree
              </p>
              <p className="text-gray-900 font-medium text-xl">
                URL to your bio and give your
              </p>
              <p className="text-gray-900 font-medium text-xl">
                followers easy access to all your
              </p>
              <p className="text-gray-900 font-medium text-xl pb-10">
                content past, present and future.
              </p>
            </div>
          </div>
          <div className="col2 bg-gray-50 rounded-2xl flex flex-col items-start pl-5 pt-10">
            <div className="img pb-10">
              <img src="/tick-yelow.avif" alt="" width={50} />
            </div>
            <div className="info">
              <p className="text-gray-900 font-semibold text-xl">
                Update Your Bio Link on
              </p>
              <p className="text-gray-900 font-semibold text-xl pb-12">
                Instagram
              </p>

              <p className="text-gray-900 font-medium text-xl">
                Add your personalized Linktree
              </p>
              <p className="text-gray-900 font-medium text-xl">
                URL to your bio and give your
              </p>
              <p className="text-gray-900 font-medium text-xl">
                followers easy access to all your
              </p>
              <p className="text-gray-900 font-medium text-xl">
                content past, present and future.
              </p>
            </div>
          </div>
          <div className="col2 bg-gray-50 rounded-2xl flex flex-col items-start pl-5 pt-10">
            {" "}
            <div className="img pb-10">
              <img src="/tick-yelow.avif" alt="" width={50} />
            </div>
            <div className="info">
              <p className="text-gray-900 font-semibold text-xl">
                Get more from your
              </p>
              <p className="text-gray-900 font-semibold text-xl pb-12">
                Instagram
              </p>

              <p className="text-gray-900 font-medium text-xl">
                Start seeing the power of Linktree
              </p>
              <p className="text-gray-900 font-medium text-xl">
                as your followers connect with all of
              </p>
              <p className="text-gray-900 font-medium text-xl">
                your content and support
              </p>
              <p className="text-gray-900 font-medium text-xl">
                everything you have to offer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
