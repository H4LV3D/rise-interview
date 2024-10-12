import Image from "next/image";
import React from "react";

type Props = {
  id: number;
  name: string;
  description: string;
  image: string;
  role: string;
};

const Testimonial = ({ id, name, description, image, role }: Props) => {
  return (
    <div
      style={{
        boxShadow: "0px 12px 24px 0px #40BBC326",
      }}
      className="p-5 w-full lg:p-8 space-y-[12px] rounded-lg lg:w-[450px] bg-white "
    >
      <p className="text-body-text text-base text-center lg:text-start font-sans lg:pr-10 min-h-36 lg:min-h-48 ">
        {description}
      </p>

      <div
        className={`flex flex-col lg:flex-row items-center space-y-1.5 lg:space-y-0 lg:space-x-4 `}
      >
        <div className="">
          <Image
            src={image}
            alt="Feature Image"
            width={32}
            height={32}
            className=" mx-auto"
          />
        </div>

        <div className="text-center lg:text-start ">
          <h3 className="font-[500] text-[18px]  ">{name}</h3>
          <p className="text-body-text text-[14px] font-sans font-[500] ">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Lade",
      description:
        "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      image: "/images/jesse.png",
      role: "UX Researcher",
    },
    {
      id: 1,
      name: "Jesse",
      description:
        "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      image: "/images/jesse.png",
      role: "UX Researcher",
    },
    {
      id: 1,
      name: "Raye",
      description:
        "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
      image: "/images/raye.png",
      role: "UX Researcher",
    },
  ];
  return (
    <>
      <div className="py-5 space-y-[42px] ">
        <div className="max-w-[580px] mx-auto text-center space-y-3 ">
          <h1 className=" font-[600] text-[34px] leading-[38px] lg:text-[40px] text-brand-teal ">
            <span className="hidden lg:block">
              From The People Who Use Rise
            </span>
            <span className="lg:hidden ">What our customers are saying</span>
          </h1>
          <p className=" text-body-text text-base font-sans font-[500] ">
            <span className="lg:hidden ">
              We serve over 80,000 amazing users.
            </span>
            <span className="hidden lg:block">
              Our mission at Risevest is to empower more people just like you to
              achieve your personal financial goals.
            </span>
          </p>
        </div>

        <div className="hidden lg:flex gap-x-6 overflow-auto max-w-[1350px] mx-auto bg-[#ECFEFE]/50 ">
          {testimonials.map((asset, index) => (
            <Testimonial key={index} {...asset} />
          ))}
        </div>

        <div className="bg-[#ECFEFE]/50 ">
          <Testimonial {...testimonials[0]} />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
