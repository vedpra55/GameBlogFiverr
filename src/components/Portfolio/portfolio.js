import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Portfolio() {
  const [postIndex, setIndex] = useState(3);

  const isLaptop = useMediaQuery({ query: "(min-width: 1070px)" });
  const isTab = useMediaQuery({ query: "(min-width: 700px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 680px)" });

  useEffect(() => {
    if (isMobile) {
      setIndex(1);
    }
    if (isTab) {
      setIndex(2);
    }
    if (!isMobile && isLaptop) {
      setIndex(3);
    }
  }, [isTab, isMobile, isLaptop]);

  function ButtonComponent() {
    return (
      <div className="flex justify-center gap-x-2 mt-5">
        <button className=" relative w-12 h-10">
          <Image src="/icons/leftArrowBtn.svg" layout="fill" />
        </button>
        <button className=" relative w-12 h-10">
          <Image src="/icons/rightArrowBtn.svg" layout="fill" />
        </button>
      </div>
    );
  }

  const portfolioData = [
    {
      image: "/images/portfolio/portfolio1.webp",
      name: "WSVG 2015 Maldives , MENA qualifications",
    },
    {
      image: "/images/portfolio/portfolio2.webp",
      name: "World Cyber Arena 2017 MENQ qualifications",
    },
    {
      image: "/images/portfolio/portfolio3.webp",
      name: "PUBG Mobile GCC Cup 2018",
    },
  ];

  function HeadingComponent() {
    return (
      <>
        <div className="absolute">
          <div className="relative -top-16  overflow-hidden  w-[20rem] md:w-[45rem] lg:w-[60rem] xl:w-[70rem] h-32">
            <Image src="/images/portfolio/PortfolioText.svg" layout="fill" />
          </div>
        </div>
        <div className="relative w-28 md:w-36 lg:w-48 h-5">
          <img
            className="w-full h-full object-cover"
            src="/images/testimonial/testimonialHeading.svg"
            layout="fill"
            alt="heading line"
          />
        </div>
        <h3 className="text-4xl md:text-5xl font-bold">Our Portfolio</h3>
      </>
    );
  }

  function PortfolioCard({ item, i }) {
    return (
      <div>
        <div className="relative w-80 h-96">
          <Image src={item.image} alt={item.name} layout="fill" />
          <div className="flex items-center justify-center absolute inset-0">
            {i === 0 && (
              <div className=" relative w-12 h-12">
                <Image
                  src="/images/portfolio/playIcon.svg"
                  layout="fill"
                  alt="paly"
                />
              </div>
            )}
          </div>
          <div
            className={`${
              i === 1 ? "text-myYellow" : "text-myWhite"
            } flex flex-col gap-y-5 justify-end absolute inset-0 py-5 px-5`}
          >
            <p className="font-bold h-12">{item.name}</p>
            <button className="flex gap-x-2 justify-start items-center">
              <p>View Details</p>
              <div className="relative w-5 h-5">
                <Image
                  src="/images/portfolio/Arrow2.svg"
                  layout="fill"
                  alt="arrow"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100%] font-slab text-myWhite">
      <div className="relative bg-bgPortfolio w-full h-[42rem] md:h-[45rem] lg:h-[45rem] bg-no-repeat  bg-cover bg-center">
        <div className="px-[15px] md:px-[30px] lg:px-[60px] xl:px-48 flex flex-col gap-y-2 md:gap-y-5 md:items-center  py-20 absolute inset-0">
          <HeadingComponent />
          <div className="flex justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 mt-10">
            {portfolioData.slice(0, postIndex).map((item, i) => (
              <PortfolioCard item={item} i={i} key={i} />
            ))}
          </div>
          <ButtonComponent />
        </div>
      </div>
    </div>
  );
}
