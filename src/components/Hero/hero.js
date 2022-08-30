import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const brandImage = [
    {
      image: "/images/Zantic.webp",
    },
    {
      image: "/images/Unicoin.webp",
    },
    {
      image: "/images/Monarch.webp",
    },
    {
      image: "/images/Heline.webp",
    },
    {
      image: "/images/Bamboo.webp",
    },
  ];

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  function BrandComponent() {
    return (
      <div className="bg-black py-5">
        <div className="flex px-[15px] md:px-[30px] lg:px-0 justify-between lg:justify-center  lg:gap-x-10">
          {brandImage.map((item, i) =>
            isMobile ? (
              i >= 3 ? null : (
                <div
                  key={i}
                  className=" relative w-24 h-5 md:w-28 md:h-10 lg:w-32 lg:h-12"
                >
                  <img
                    src={item.image}
                    className=" object-contain"
                    layout="fill"
                  />
                </div>
              )
            ) : (
              <div
                key={i}
                className=" relative md:w-28 md:h-10 lg:w-32 lg:h-12"
              >
                <Image
                  src={item.image}
                  className=" object-contain"
                  layout="fill"
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  function HeroDetail() {
    return (
      <div className="flex flex-col gap-y-5 text-white md:w-[450px]">
        <div>
          <h1 className="font-bold font-slab text-3xl md:text-5xl antialiase">
            Grow Your Player Base
            <div className="w-1 h-1 md:w-3 md:h-3 inline-block mx-1 rounded-full bg-myYellow"></div>
          </h1>
        </div>
        <div>
          <p className="subpixel-antialiase text-[20px]">
            Based in UAE & with an office in the UK, ESME was Launched in early
            2012 and drew a top notch expertise in the business management as
            one of the best Esports operators in the Middle East
          </p>
        </div>
        <button className="relative w-44 mt-5 h-10">
          <Image
            priority
            src={"/icons/button2.svg"}
            layout="fill"
            className=" object-cover"
          />
          <div className="z-50 absolute inset-0 flex justify-center items-center">
            <p className="text-myBlack  font-medium   text-[18px]">Start Now</p>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="lg:mt-4">
      <div className="relative w-full h-[500px]">
        <Image
          priority
          src="/images/hero-min.webp"
          className=" object-cover"
          layout="fill"
          alt="hero image"
        />
        <div className="absolute inset-0 px-[15px] md:px-[30px] lg:px-[60px] xl:px-48 py-16">
          <HeroDetail />
        </div>
      </div>
      <BrandComponent />
    </div>
  );
}
