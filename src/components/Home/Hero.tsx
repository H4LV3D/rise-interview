import Image from "next/image";
import DownloadAppButtons from "../shared/DownloadAppButtons/DownloadAppButtons";

export default function Hero() {
  const ellipses = [
    { size: 56, x: 1106, y: 565 }, // Ellipse 1
    { size: 56, x: 546, y: 23 }, // Ellipse 2
    { size: 56, x: 133, y: 565 }, // Ellipse 3
    { size: 32, x: 636, y: 566 }, // Ellipse 4
    { size: 32, x: 50, y: 53 }, // Ellipse 5
  ];
  return (
    <div className="relative mt-[23px] ">
      <div className="min-h-[65vh] grid grid-cols-1 md:grid-cols-2 pt-16 lg:pt-0 ">
        <div className="flex items-center max-w-[530px] z-10 ">
          <div className="space-y-6">
            <div className="space-y-0 mb-8 text-center lg:text-start ">
              <h1 className="text-[40px] leading-[46px] md:text-[56px] md:leading-[60px] font-medium text-brand-teal mb-4 ">
                Dollar investments that help you grow.
              </h1>
              <p className=" px-8 lg:pl-0 lg:pr-12 font-[500] font-sans text-[#4A5050] ">
                <span className="hidden md:block ">
                  We put your money in high quality assets that help you build
                  wealth and achieve your financial goals.
                </span>
                <span className=" lg:hidden ">
                  Your personal wealth manager. Get started with a minimum of
                  $10 and
                </span>
              </p>
            </div>
            <DownloadAppButtons />
          </div>
        </div>

        <div className="relative flex items-center justify-center pt-12 z-10 ">
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            width={200}
            height={430}
          />
        </div>
      </div>

      {ellipses.map((ellipse, index) => (
        <div
          key={index}
          className="absolute bg-[#A0DDE2] opacity-70 "
          style={{
            width: `${ellipse.size}px`,
            height: `${ellipse.size}px`,
            borderRadius: "50%",
            top: `${ellipse.y}px`,
            left: `${ellipse.x}px`,
          }}
        />
      ))}
    </div>
  );
}

// component that accepts and object of playstore or appstore icons, store name, and store link
