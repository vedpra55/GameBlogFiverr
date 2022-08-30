import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Blog() {
  const blogPosts = [
    {
      image: "/images/blog/blog1.png",
      title: "STARCRAFT TOURNAMENT",
      description:
        "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing",
    },
    {
      image: "/images/blog/blog2.png",
      title: "DOTA MADNESS",
      description:
        "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing",
    },
    {
      image: "/images/blog/blog3.png",
      title: "DOTA 2 Tournament",
      description:
        "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing",
    },
  ];

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

  function HeadingComponent() {
    return (
      <>
        <div className="absolute">
          <div className="relative -top-16 z-50  overflow-hidden  w-[20rem] md:w-[45rem] lg:w-[60rem] xl:w-[70rem] h-32">
            <Image src="/images/blog/BlogText.svg" layout="fill" />
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
        <h3 className="text-4xl md:text-5xl font-bold">Our Blog</h3>
      </>
    );
  }

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

  function BlogPostCard({ item, i }) {
    return (
      <div className="w-80">
        <div className="relative h-64 w-full">
          <Image src={item.image} alt={item.title} layout="fill" />
        </div>
        <div className="bg-myBlack4 w-full h-auto px-5 py-5 flex flex-col gap-y-3">
          <h5>{item.title}</h5>
          <p>{item.description}</p>
          <div className="flex  justify-end mt-5">
            <button className="text-xs">Read more</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-myBlack3 w-full h-auto font-slab text-myWhite">
      <div className="px-[15px] md:px-[30px] lg:px-[60px] xl:px-48 flex flex-col  md:gap-y-5 md:items-center  py-20">
        <HeadingComponent />
        <div className="flex justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 mt-10">
          {blogPosts.slice(0, postIndex).map((item, i) => (
            <BlogPostCard item={item} i={i} key={i} />
          ))}
        </div>
        <ButtonComponent />
      </div>
    </div>
  );
}
