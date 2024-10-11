import Image from "next/image";
import DownloadAppButtons from "../shared/DownloadAppButtons/DownloadAppButtons";

export default function Hero() {
  return (
    <>
      <div className="min-h-[75vh] grid grid-cols-1 md:grid-cols-2 pt-16 lg:pt-0 ">
        <div className="flex items-center max-w-[530px] ">
          <div className="space-y-6">
            <div className="space-y-0 mb-8 text-center lg:text-start ">
              <h1 className="text-[40px] md:text-6xl font-medium text-brand-teal mb-4 ">
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

        <div className="relative flex items-center justify-center pt-12 ">
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            width={300}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

// component that accepts and object of playstore or appstore icons, store name, and store link
