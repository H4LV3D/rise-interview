import Assets from "@/components/Home/Assets";
import Community from "@/components/Home/Community";
import Download from "@/components/Home/Download";
import Features from "@/components/Home/Features";
import Goals from "@/components/Home/Goals";
import Hero from "@/components/Home/Hero";
import Partners from "@/components/Home/Partners";
import Regulations from "@/components/Home/Regulations";
import Testimonials from "@/components/Home/Testimonials";
import { MAX_SCREEN_CONTENT_WIDTH } from "@/constatnts/constants";

export default function Home() {
  return (
    <div className="space-y-[80px] ">
      <div
        style={{
          maxWidth: MAX_SCREEN_CONTENT_WIDTH,
          margin: "0 auto",
        }}
        className="space-y-[80px] "
      >
        <Hero />
        <Partners />
        <Features />
        <Assets />
        <div className="hidden lg:block ">
          <Goals />
        </div>
      </div>
      <Regulations />
      <Testimonials />
      <div
        style={{
          maxWidth: MAX_SCREEN_CONTENT_WIDTH,
          margin: "0 auto",
        }}
        className="space-y-[80px] "
      >
        <Community />
        <Download />
      </div>
    </div>
  );
}
