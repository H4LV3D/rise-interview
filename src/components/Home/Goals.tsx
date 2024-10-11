import Image from "next/image";
import React from "react";

type Props = {};

const Goals = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-2 py-10 ">
        <div className=" ">
          <Image
            src="/images/save-future.png"
            alt="Goals Image"
            width={315}
            height={510}
            className="mx-auto"
          />
        </div>

        <div className="max-w-[420px] flex items-center ">
          <div className="space-y-5">
            <div className="space-y-0 ">
              <p className="text-[#2D2D2D] text-[18px] font-[500] ">
                The Rise App
              </p>
              <h3 className="font-[500] text-[40px] text-body-text ">
                Save for your <span className="text-[#5542C1] ">future</span>
              </h3>
              <p className="text-base font-[500] text-body-text leading-6 pr-8 ">
                With Rise, you achieve your financial goals faster. Save for
                school, your home, vacations, your children’s future and more.
              </p>
            </div>
            <button className="rounded-[8px] bg-brand-teal text-white px-6 min-w-[10rem] h-14 ">
              <span className="font-[600] text-[17px] ">Start Saving</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
