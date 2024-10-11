import Image from "next/image";
import React from "react";

type Props = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const Testimonial = ({ id, name, description, image }: Props) => {
  return (
    <div className="p-8 space-y-[12px] rounded-lg w-[450px] bg-white ">
      <p className="text-body-text text-base font-sans pr-10 min-h-48 ">
        {description}
      </p>

      <div className={`flex items-center space-x-4 `}>
        <div className="">
          <Image
            src={image}
            alt="Feature Image"
            width={32}
            height={32}
            className=" mx-auto"
          />
        </div>

        <h3 className="font-[500] text-[18px]  ">{name}</h3>
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
    },
    {
      id: 1,
      name: "Jesse",
      description:
        "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      image: "/images/jesse.png",
    },
    {
      id: 1,
      name: "Raye",
      description:
        "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
      image: "/images/raye.png",
    },
  ];
  return (
    <>
      <div className="py-5 space-y-[42px] ">
        <div className="max-w-[580px] mx-auto text-center">
          <h1 className=" font-[600] text-[40px] text-brand-teal ">
            From The People Who Use Rise
          </h1>
          <p className=" text-body-text text-base font-sans font-[500] ">
            Our mission at Risevest is to empower more people just like you to
            achieve your personal financial goals.
          </p>
        </div>

        <div className="flex gap-x-6 overflow-auto max-w-[1350px] mx-auto bg-[#ECFEFE]/50 ">
          {testimonials.map((asset, index) => (
            <Testimonial key={index} {...asset} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
