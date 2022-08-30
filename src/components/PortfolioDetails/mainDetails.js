import Image from "next/image";
import React from "react";

export default function PortfolioMainDetails() {
  return (
    <div className="h-[100%] font-slab text-myWhite">
      <div className="relative bg-bgPortfolioDetailsMain w-full h-[45rem] md:h-[45rem] lg:h-[45rem] bg-no-repeat  bg-cover bg-center">
        <div className="absolute inset-0 px-[15px] md:px-[30px]  lg:px-[60px] xl:px-48 py-16 flex flex-col gap-y-10 md:mt-20 lg:mt-0 md:gap-x-5 lg:flex-row items-center justify-between">
          <div className="relative z-50 w-full h-[20rem]  md:w-full lg:h-[20rem] lg:w-[28rem] ">
            <Image
              src="/images/portfolio/portfolioDetailsMain.png"
              layout="fill"
              alt="portfolio"
            />
            <div className="flex  justify-center items-center  absolute inset-0 ">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/portfolio/playIcon.svg"
                  layout="fill"
                  alt="play icon"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5  lg:w-[27rem]">
            <h5 className=" text-4xl lg:text-5xl font-bold">
              Neque sed nulla lectus
            </h5>
            <p>
              Nisl non ultrices vel velit quis vel. Cursus dolor donec fermentum
              nibh lacus praesent sit est suspendisse. Et, sed aliquet morbi
              tortor amet eget dis. Id amet, malesuada arcu, quam faucibus at.
              Nunc, nibh lectus nec, gravida. Scelerisque mattis diam sagittis
              in turpis vitae, pharetra, porttitor eu.
            </p>
          </div>
          <div className="absolute hidden lg:top-[10rem] lg:left-[34rem] lg:block xl:top-[10rem] xl:left-[41rem]">
            <div className=" rounded-full w-3 h-3 bg-myYellow "></div>
          </div>
          <div className="absolute z-50 hidden lg:block lg:top-[30rem] lg:left-5 xl:top-[30rem] xl:left-20">
            <div className=" rounded-full w-5 h-5 bg-myYellow "></div>
          </div>
          <div className="absolute hidden z-10 lg:block lg:top-[28rem] left-5 xl:top-[28rem] xl:left-[75px]">
            <div className=" rounded-full w-48 h-48 bg-[#181818]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
