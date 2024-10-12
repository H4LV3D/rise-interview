import Image from "next/image";
import DownloadAppButtons from "../shared/DownloadAppButtons/DownloadAppButtons";

export default function Download() {
  return (
    <>
      <div className="h-[480px] overflow-hidden px-4 py-8 lg:p-8 bg-[#ECFEFE] rounded-[50px] grid grid-cols-1 lg:grid-cols-2">
        <div className=" lg:h-[430px] flex items-center max-w-[530px] ">
          <div className="space-y-6">
            <div className="space-y-4 mb-8 text-center lg:text-start ">
              <p className=" lg:pr-12 font-[500] font-sans text-brand-teal ">
                Download The Rise App
              </p>
              <h1 className="px-2 text-xl lg:text-[32px] font-[500] lg:font-medium text-black mb-4 ">
                Join our 100,000 users investing and setting long term goals!
              </h1>
              <p className=" lg:pr-12 font-[500] font-sans text-body-text ">
                Dollar investments that help you grow.
              </p>
            </div>
            <DownloadAppButtons />
          </div>
        </div>

        <div className="relative flex items-center justify-center pt-8 ">
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            width={250}
            height={450}
          />
        </div>
      </div>
    </>
  );
}
