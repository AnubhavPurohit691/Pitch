import Link from 'next/link';
import Searchcomponent from './Searchcomponent';

const HeroSection = () => {

  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center py-16 lg:py-24">
        {/* Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Pitch Your <span className="text-red-500">Startup</span> <br />
            Connect with <span className="text-red-500">Entrepreneurs</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Join a vibrant community of innovators. Showcase your startup, collaborate with like-minded individuals, and turn your ideas into reality.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <Link
              href="/startup/create"
              className="px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-md shadow-md hover:bg-red-600 transition"
            >
              Pitch Now
            </Link>
            <Link
              href="/community"
              className="px-6 py-3 border border-red-500 text-red-500 text-lg font-medium rounded-md shadow-md hover:bg-red-500 hover:text-white transition"
            >
              Explore Community
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <img
            src="/startup.png" // Replace with your image path
            alt="Entrepreneurship illustration"
            className="w-full max-w-md lg:max-w-lg mx-auto"
          />
        </div>
      </div>
      <Searchcomponent  />
    </section>
  );
};

export default HeroSection;
