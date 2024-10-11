import React from "react";

type Props = {};

const Regulations = (props: Props) => {
  return (
    <div className="min-h-[400px] grid place-items-center overflow-hidden bg-white z-10 relative  ">
      {/* Right */}
      <div className="hidden md:block size-80 rounded-full border absolute -right-16 -mt-48 z-10 blur-md bg-[#F6F2FF]  "></div>
      <div className="hidden md:block size-80 rounded-full absolute -mb-80 -right-16 z-10 blur-md  bg-[#ECFEFE]  "></div>
      {/* Left */}
      <div className="hidden md:block size-80 rounded-full border absolute -left-16 -mt-48 z-10 blur-md bg-[#FFF4F0]  "></div>
      <div className="hidden md:block size-80 rounded-full absolute -mb-80 -left-16 z-10 blur-md  bg-[#F6E4F0]  "></div>
      {/* content */}
      <div className=" max-w-4xl w-full  z-20 min-h-[400px] flex items-center justify-center  ">
        <div className="text-center ">
          <h2 className="text-[32px] md:text-5xl font-[500] text-brand-teal mb-4 ">
            How We Are Regulated
          </h2>
          <p className="text-[15px] leading-6 lg:text-lg text-body-text max-w-lg mx-auto ">
            Rise is registered and regulated both in the US and in Nigeria. Our
            team is made up of US registered investment advisers, our Nigerian
            users are covered by our SEC licensed trustees, ARM Trustees and all
            our assets are held with regulated third parties, in all relevant
            jurisdictions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regulations;
