import { FaApple, FaGooglePlay } from "react-icons/fa6";

const stores = [
  {
    name: "App Store",
    icon: <FaApple size={30} color="white" />,
    link: "https://apps.apple.com/us/app/your-app/id1234567890",
  },
  {
    name: "Google Play",
    icon: <FaGooglePlay size={24} color="white" />,
    link: "https://play.google.com/store/apps/details?id=com.yourapp",
  },
];

function DownloadButton({
  store,
}: {
  store: { name: string; icon: React.ReactNode; link: string };
}) {
  return (
    <button className="flex items-center space-x-2 bg-[#2D2D2D] px-4 pr-8 py-2.5 rounded-[10px] shadow-md">
      {store.icon}
      <div className="text-white text-start -space-y-1 ">
        <p className="text-[12px] lg:text-[14px] ">Download on the</p>
        <p className="text-base lg:text-lg font-[500] ">{store.name}</p>
      </div>
    </button>
  );
}

export default function DownloadAppButtons() {
  return (
    <div className="flex items-center justify-center lg:justify-start space-x-4 ">
      {stores.map((store, index) => (
        <DownloadButton key={index} store={store} />
      ))}
    </div>
  );
}
