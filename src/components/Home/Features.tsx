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
              <h3 className="font-[500] text-[32px] text-center lg:text-start ">
                {title}
              </h3>
              <p className="text-body-text text-base font-sans lg:pr-10 text-center lg:text-start ">
                {description}
              </p>
            </div>

            <Link
              href={"/features"}
              className=" text-brand-teal text-lg font-[500] lg:flex items-center space-x-4 hidden  "
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

  const mobileFeatures = [
    {
      id: 1,
      title: "Superior Performance",
      description:
        "Rise outperforms your other alternatives in two ways. The first is through our expert, algorithm driven investment approach that picks through over 3,000 data sets to find the perfect investment for you. ",
      image: "/images/feature_1.png",
    },
    {
      id: 2,
      title: "Personalization",
      description:
        "No two people are the same, and everyone’s financial goals are different. Rise understands this, which is why we tailor your journey to financial freedom to fit you.",
      image: "/images/feature_2.png",
    },
    {
      id: 3,
      title: "Diversification",
      description:
        "Rise offers a choice of three asset classes: US equities, US real estate and fixed income assets to provide stability to your investments and protection from market declines. You can pick one asset class or",
      image: "/images/feature_3.png",
    },
  ];

  return (
    <>
      <div className="space-y-[64px] hidden lg:block ">
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

      <div className="space-y-[64px] lg:hidden ">
        {mobileFeatures.map((feature) => (
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
