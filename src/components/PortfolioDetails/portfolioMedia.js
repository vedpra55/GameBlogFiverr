import Image from "next/image";

export default function PortfolioMedia() {
  const mediaData = [
    {
      images: "/images/media/media6.png",
    },
    {
      images: "/images/media/media1.png",
    },
    {
      images: "/images/media/media2.png",
    },
    {
      images: "/images/media/media3.png",
    },
    {
      images: "/images/media/media4.png",
    },
    {
      images: "/images/media/media5.png",
    },
  ];

  function HeadingComponent() {
    return (
      <>
        <div className="absolute">
          <div className="relative -top-16  overflow-hidden  w-[20rem] md:w-[45rem] lg:w-[60rem] xl:w-[70rem] h-32">
            <Image src="/images/media/MediaText.svg" layout="fill" />
          </div>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold">Media</h3>
      </>
    );
  }

  function Buttons() {
    return (
      <div className="  flex md:justify-center  justify-between md:gap-x-10 mt-28 font-semibold">
        <button className="flex items-center gap-x-2 md:gap-x-3">
          <div className=" relative w-6 h-6">
            <Image src="/icons/arrowGL.svg" layout="fill" alt="arrow" />
          </div>
          <p className="text-[#414141]">Previous Project</p>
        </button>
        <button className="flex items-center gap-x-2 md:gap-x-3">
          <p className="text-myYellow">Next Project</p>
          <div className=" relative w-6 h-6">
            <Image src="/icons/arrowYR.svg" layout="fill" alt="arrow" />
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-myBlack3 w-full h-auto text-myWhite font-slab">
      <div className=" px-[15px] md:px-[30px] lg:px-[60px] xl:px-48 py-14 md:py-20">
        <div className="flex flex-col pt-10 pb-10 md:pb-20 items-center">
          <HeadingComponent />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center lg:grid-cols-4 gap-5">
          {mediaData.map((item, i) => (
            <div key={i} className="">
              <div className=" relative  w-full h-80 md:h-48 xl:h-40 2xl:h-56">
                <img
                  className="w-full h-full object-fill"
                  src={item.images}
                  alt="media"
                />
                {i === 0 && (
                  <div className=" absolute inset-0 flex justify-center items-center">
                    <p className="text-myBlack text-xl  font-semibold">View</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-center gap-x-2">
          <div className="w-14 h-1 bg-myWhite"></div>
          <div className="w-14 h-1 bg-myYellow"></div>
          <div className="w-14 h-1 bg-myWhite"></div>
        </div>
        <Buttons />
      </div>
    </div>
  );
}
