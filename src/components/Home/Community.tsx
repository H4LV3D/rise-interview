import React from "react";

type Props = {};

const Community = (props: Props) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 py-[24px] ">
        <div className="max-w-[475px] py-[24px] lg:py-[96px] text-center lg:text-start ">
          <h2 className="text-[40px] leading-[44px] font-[500] md:font-[600] text-brand-teal">
            Join the Rise Community
          </h2>

          <p className="text-lg font-sans text-body-text/70 mb-[32px] ">
            If you want to go far, go together.
            <span className="hidden lg:block">
              Our Telegram community surrounds you with others who can help you
              along your financial journey with tips, support, advice and
              learning. It&apos;s completely free and open to new and seasoned
              investors.
            </span>
          </p>

          <button className="bg-[#A0DDE2] text-[#2D2D2D] px-8 py-3 rounded-md font-[500] ">
            Join our Community
          </button>
        </div>

        <div className="relative order-first lg:order-last ">
          <img
            src="/images/community.png"
            alt="Community"
            className="ml-auto md:h-[450px] md:w-[500px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
