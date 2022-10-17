import React from 'react';

const HeroVariant = () => {
  return (
    <section className="overflow-hidden flex w-full max-w-screen-wrapper mx-auto px-14 py-6">
      <div className="flex items-center">
        <div className="flex flex-col py-25 font-medium">
          <div className="flex items-center">
            <span>Hello am Ikechukwu,</span>
          </div>
          <h1 className="text-title mt-2 mb-4">
            I <span className="text-primary">create</span> web solutions
          </h1>
          <h3 className="text-subtitle mb-8">
            Every website user experience should be top nouch
          </h3>
        </div>
        <div className="hidden"></div>
      </div>
    </section>
  );
};

export default HeroVariant;
