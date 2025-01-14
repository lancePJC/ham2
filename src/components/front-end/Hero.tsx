import React from 'react';
 
const Hero = () => {
  return (
    <div className="bg-yellow-100 mt-4">
      <div className="container grid md:grid-cols-2 py-8">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <p className="text-topHeadingSecondary">
              Starting at <span className="font-bold">ksh2800.00 only</span>
            </p>
            <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
              The best coffee beans and grind 2025
            </h1>
            <h3 className="text-2xl font-['Oregano', cursive]">
              Exclusive offer <span className="text-red-600">-10%</span> off this week
            </h3>
            <a
              className="inline-block bg-white rounded-md px-6 py-3 hover:bg-yellow-400 hover:text-white transition duration-300"
              href="#"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div>
          <img className="ml-auto" src="/sample1.jpg" alt="Hero banner showcasing notebooks" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
