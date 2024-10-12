import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { MAX_SCREEN_CONTENT_WIDTH } from "@/constatnts/constants";

const clash = localFont({
  src: [
    {
      path: "./fonts/clash-grotesk/ClashGrotesk-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/clash-grotesk/ClashGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/clash-grotesk/ClashGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/clash-grotesk/ClashGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/clash-grotesk/ClashGrotesk-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/clash-grotesk/ClashGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-space",
});

const dmSans = DM_Sans({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Rise ",
  description: "Rise Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${clash.variable} ${dmSans.variable} font-space antialiased`}
      >
        <Navbar />
        <div className="pb-[20px] lg:pb-[80px] overflow-x-hidden px-6 lg:px-0 ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
