import React from "react";
import Image from "next/image";
import imageDesktop from "@/../public/newbie/n2/images/image-product-desktop.jpg";
import imageMobile from "@/../public/newbie/n2/images/image-product-mobile.jpg";
import iconCart from "@/../public/newbie/n2/images/icon-cart.svg";

import { montserrat, montserratBold, fraunces } from "@/../public/fonts";

const ProductReviewCardComponent = () => {
  return (
    <section
      className={`${montserrat.className} bg-n2Cream flex h-screen w-screen flex-col items-center justify-center`}
    >
      {/* MAIN CONTAINER */}
      <div className="flex h-full w-full flex-col py-7 px-4 sm:h-[450px] sm:w-[600px] sm:flex-row sm:py-0 sm:px-0">
        {/* LEFT CONTAINER */}
        <div className="h-2/5 overflow-hidden rounded-t-xl sm:h-full sm:w-1/2 sm:rounded-l-xl sm:rounded-r-none">
          <Image
            className="h-full bg-cover sm:hidden"
            src={imageMobile}
            alt="product image"
          />
          <Image
            className="hidden h-full sm:block"
            src={imageDesktop}
            alt="product image"
          />
        </div>
        {/* RIGHT CONTAINER */}
        <div className="flex h-3/5 flex-col items-start justify-center rounded-b-xl bg-white p-6 sm:h-full sm:w-1/2 sm:rounded-r-xl sm:rounded-l-none sm:py-8 sm:px-8">
          <h4 className="text-n2DarkGrayishBlue mb-3 text-xs uppercase leading-4 tracking-[5px]">
            Perfume
          </h4>
          <h1 className={`${fraunces.className} mb-4 text-3xl`}>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-n2DarkGrayishBlue mb-6 text-sm">
            {" "}
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="mb-5 flex flex-row items-center gap-5">
            <h3 className={`${fraunces.className} text-n2DarkCyan text-3xl`}>
              $149.99
            </h3>
            <h5 className="text-n2DarkGrayishBlue text-xs line-through">
              $169.99
            </h5>
          </div>
          <a
            className={`bg-n2DarkCyan flex w-full items-center justify-center self-center py-4 text-center text-white ${montserratBold.className} gap-3 rounded-lg`}
            href=""
          >
            <Image className="" src={iconCart} alt="cart icon" />
            Add to Cart
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductReviewCardComponent;
