import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const Feature = ({ id, title, description, image }: Props) => {
  return (
    <div>
      <div
        className={`flex flex-col ${
          id % 2 === 0 ? " lg:flex-row " : "lg:flex-row-reverse"
        } items-center lg:space-x-4 `}
      >
        <div className=" lg:w-1/2 ">
          <Image
            src={image}
            alt="Feature Image"
            width={460}
            height={460}
            className=" mx-auto"
          />
        </div>

        <div className=" lg:w-1/2 ">
          <div
            className={`space-y-[24px] max-w-[430px] ${
              id % 2 === 0 ? "ml-auto " : "mr-auto"
            } `}
          >
            <div className="space-y-[10px] ">
              <h3 className="font-[500] text-[32px]  ">{title}</h3>
              <p className="text-body-text text-base font-sans pr-10 ">
                {description}
              </p>
            </div>

            <Link
              href={"/features"}
              className=" text-brand-teal text-lg font-[500] flex items-center space-x-4 "
            >
              <span className="">Start Investing Now</span>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Invest your money in dollar",
      description:
        "By holding your investments in a stable currency, your money grows more over time and retains its value better.",
      image: "/images/feature_1.png",
    },
    {
      id: 2,
      title: "Choose what's best for you",
      description:
        "Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. ",
      image: "/images/feature_2.png",
    },
    {
      id: 3,
      title: "Set goals and reach them",
      description:
        "You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. ",
      image: "/images/feature_3.png",
    },
    {
      id: 4,
      title: "We remember so you don't have to",
      description:
        "Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule. ",
      image: "/images/feature_4.png",
    },
  ];
  return (
    <>
      <div className="space-y-[64px] ">
        {features.map((feature) => (
          <Feature
            key={feature.id}
            id={feature.id}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </>
  );
};

export default Features;
