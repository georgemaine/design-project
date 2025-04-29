"use client";
import { LogoWhiteSvg } from "../ui/svgs";
import styles from "./home.module.css";
import { GalleryContent } from "../Gallery/GalleryContent";
import CursorTarget from "../Animations/CursorTarget";
import { LandingForm } from "./LandingForm";
import NavigationBar from "../NavigationBar";

const HomeContent = () => {
  return (
    <>
      <NavigationBar preview={false} />
      <main className="w-full h-full flex min-h-screen flex-col relative">
        <div className="relative flex flex-col items-center justify-center mt-52 z-10 max-w-[600px] px-5 mx-auto w-[calc(100%-40px)]">
          <Logo />
          <h1 className="text-6xl leading-16 m:text-8xl font-bold m:leading-20 text-center tracking-tighter mt-5">
            Discovery
          </h1>
          <p className="text-xl font-medium leading-6 text-center text-neutral-500 max-w-sm mt-6">
            Use AI to uncover domain opportunities and analyze top pages with
            SEO insights
          </p>
          <CursorTarget enabled={true} className={"mt-10 w-full"}>
            {(spring) => <LandingForm spring={spring} />}
          </CursorTarget>
          <p className="text-xs uppercase text-neutral-400 tracking-widest mt-10">
            by GrowthX
          </p>
        </div>

        <GalleryContent />
        {/* <LandingBackgroundAnimationMemo /> */}
      </main>
    </>
  );
};

export default HomeContent;

const Logo = () => {
  return (
    <div className={`${styles["logoShadow"]}`}>
      <div className="bg-black width-40 height-40">
        <LogoWhiteSvg />
      </div>
    </div>
  );
};
