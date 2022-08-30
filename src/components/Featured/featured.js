import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Featured() {
  const isTab = useMediaQuery({ query: "(max-width: 1065px)" });

  if (isTab) return null;

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

  function HeadingComponent() {
    return (
      <>
        <div className="absolute">
          <div className="relative -top-16 z-50  overflow-hidden  w-[20rem] md:w-[45rem] lg:w-[60rem] xl:w-[70rem] h-32">
            <Image src="/images/featured/FeaturedText.svg" layout="fill" />
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
        <h3 className="text-4xl md:text-5xl font-bold">Press Mention</h3>
      </>
    );
  }
  return (
    <div className="bg-myBlack3 w-full h-[26rem] font-slab text-myWhite">
      <div className="px-[15px] md:px-[30px] lg:px-[60px] xl:px-48 flex flex-col  md:gap-y-5 md:items-center  py-20">
        <HeadingComponent />
        <div className="grid grid-cols-5 gap-10 mt-10">
          {brandImage.map((item, i) => (
            <div key={i}>
              <div className="relative w-28 h-7">
                <Image src={item.image} alt="brands" layout="fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
