import Image from "next/image";
import imageMobile from "@/../public/newbie/n3/image-hero-mobile.webp";
import imageTablet from "@/../public/newbie/n3/image-hero-tablet.webp";
import imageDesktop from "@/../public/newbie/n3/image-hero-desktop.webp";

import {
  plusJakartaSans,
  plusJakartaSansBold,
  plusJakartaSansExtraBold,
} from "@/../public/fonts";

const SkilledElearningLandingPage = () => {
  return (
    <section
      className={`${plusJakartaSans.className} flex flex-col bg-n3White px-4 pt-4 sm:px-10 sm:pt-6 lg:px-[165px]`}
    >
      {/* NAVBAR */}
      <nav className="mb-9 flex justify-between sm:mb-[130px] md:mb-[100px] lg:mb-[175px]">
        <h1 className={`${plusJakartaSansExtraBold.className} text-3xl`}>
          Skilled
        </h1>
        <a
          href="#"
          className={`${plusJakartaSansBold.className} rounded-[28px] bg-n3DarkBlue px-6 pt-2 pb-3 text-n3White`}
        >
          Get Started
        </a>
      </nav>
      {/* HERO */}
      <section className="relative flex flex-col overflow-visible sm:flex-row">
        {/* HERO - LEFT */}
        <div className="mb-11 flex flex-col items-start gap-6 sm:mb-0 sm:w-1/2">
          <h1
            className={`${plusJakartaSansExtraBold.className} text-[40px] leading-[50px] lg:text-[56px] lg:leading-[71px]`}
          >
            Maximize skill, minimize budget
          </h1>
          <h3 className="text-base leading-7 text-n3Gray lg:text-[18px]">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </h3>
          <a
            href=""
            className="rounded-4xl bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] px-9 py-4 text-white"
          >
            Get Started
          </a>
        </div>
        {/* HERO - RIGHT */}
        <div className="self-center sm:w-1/2">
          <Image className="sm:hidden" src={imageMobile} alt="logo" />
          <Image
            className="absolute z-10 hidden object-cover sm:bottom-[-100px] sm:right-[-330px] sm:block md:bottom-[-170px] md:right-[-350px] lg:hidden"
            src={imageTablet}
            alt="logo"
          />
          <Image
            className="absolute z-10 hidden object-cover lg:bottom-[-140px] lg:right-[-475px] lg:block xl:bottom-[-250px] xl:right-[-530px] 2xl:bottom-[-240px] 2xl:right-[-530px]"
            src={imageDesktop}
            alt="logo"
          />
        </div>
      </section>
    </section>
  );
};

export default SkilledElearningLandingPage;
