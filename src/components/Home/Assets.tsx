import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  title: string;
  description: string;
  image: string;
  bgColour: string;
  returns: string;
  risk: string;
};

const Asset = ({
  title,
  description,
  image,
  bgColour,
  returns,
  risk,
}: Props) => {
  return (
    <div className="border-2 rounded-[8px] overflow-hidden space-y-6 ">
      <div className=" rounded-full ">
        <div
          style={{
            backgroundColor: bgColour,
          }}
          className="h-40 w-full"
        ></div>
        <div className="flex items-center justify-center -mt-10 ">
          <Image
            src={image}
            alt="Asset Image"
            width={95}
            height={95}
            className=" rounded-full ring-[18px] ring-white border-white  "
          />
        </div>
      </div>

      <div className="p-4 space-y-4 ">
        <div className="space-y-4 ">
          <h3 className="font-[500] text-[28px] text-center text-body-text ">
            {title}
          </h3>
          <p className="text-base text-body-text font-sans text-center leading-6 min-h-32 ">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-x-2 gap-y-1 ">
            <span className="text-end text-body-text/70 ">
              Historical returns :
            </span>
            <span className="text-start font-[500] "> {returns} </span>
            <span className="text-end text-body-text/70 "> Risk Level : </span>
            <span className="capitalize text-start font-[500] "> {risk} </span>
          </div>
        </div>

        <Link
          href={"/assets"}
          className=" text-brand-teal text-lg font-[500] flex items-center justify-center space-x-2 py-3  "
        >
          <span className="">Learn how {title} works</span>
          <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

const Assets = () => {
  const assets = [
    {
      title: "Stocks",
      description:
        "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
      image: "/images/stocks.png",
      bgColour: "#FFF4F0",
      returns: "14% per anum",
      risk: "medium",
    },
    {
      title: "Real Estate",
      description:
        "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
      image: "/images/real-estate.png",
      bgColour: "#F6F2FF",
      returns: "14% per anum",
      risk: "medium",
    },
    {
      title: "Fixed Income",
      description:
        "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
      image: "/images/real-estate.png",
      bgColour: "#ECFEFE",
      returns: "14% per anum",
      risk: "medium",
    },
  ];
  return (
    <div className=" space-y-[42px] ">
      <div className="max-w-md mx-auto text-center">
        <h1 className=" font-[600] text-[40px] ">Assets Classes</h1>
        <p className=" text-[#2D2D2D] text-base font-sans px-16 md:px-0 ">
          It&apos;s your money, Choose where to invest it.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:grid-cols-3 gap-x-10 ">
        {assets.map((asset, index) => (
          <Asset key={index} {...asset} />
        ))}
      </div>
    </div>
  );
};

export default Assets;
