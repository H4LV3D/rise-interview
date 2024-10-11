import React from "react";

type Props = {};

const Partners = (props: Props) => {
  return (
    <>
      <div className="py-6 grid place-items-center ">
        <div className="flex items-center space-x-1.5 lg:space-x-4 h-16  ">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={index}
                  src={`/images/partner_${index + 1}.png`}
                  alt="Hero Image"
                  className={`${
                    index === 0 || index === 3
                      ? "h-8 lg:h-12"
                      : index === 2
                      ? "h-12 lg:h-20"
                      : "h-14 lg:h-24"
                  } `}
                />
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
