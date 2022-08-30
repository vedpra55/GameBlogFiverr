import Image from "next/image";

export default function About() {
  const aboutData = [
    {
      main: "30+",
      text: "International Event",
    },
    {
      main: "20+",
      text: "Broadcast Talents",
    },
    {
      main: "10+",
      text: "up-time watch",
    },
    {
      main: "5M+",
      text: "Social Impressions",
    },
    {
      main: "10+",
      text: "Games",
    },
    {
      main: "200+",
      text: "Players",
    },
  ];

  function FeatureComponent() {
    return (
      <div className="">
        <div className=" grid grid-cols-3 gap-x-10 gap-y-5">
          {aboutData.map((item, i) => (
            <div key={i} className="flex gap-x-5 justify-between">
              <div className="flex flex-col gap-y-1">
                <h4 className="text-myYellow text-4xl font-semibold">
                  {item.main}
                </h4>
                <p className="text-myWhite text-xs">{item.text}</p>
              </div>
              <div className="relative w-2 h-16">
                <Image src="/icons/verticalLine.svg" layout="fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function AboutTextComponent() {
    return (
      <div className="absolute -top-[14rem] px-[15px] md:px-[30px] lg:px-56 xl:px-80 md:top-[48rem] lg:top-10 flex items-center md:items-start md:justify-start lg:justify-end inset-0">
        <img
          className="w-72 h-32 md:w-[32rem] lg:w-96 md:h-32"
          src="/icons/AboutTxt.svg"
        />
      </div>
    );
  }

  function MainImageComponent() {
    return (
      <div className="flex justify-center lg:block">
        <div className="flex relative w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] lg:h-[34rem] lg:w-[27rem]">
          <Image
            src="/images/about/aboutMain.webp"
            className="w-full h-full"
            layout="fill"
          />
        </div>
      </div>
    );
  }

  function AboutDetailComponent() {
    return (
      <div className="flex flex-col justify-center px-[15px] md:px-[30px]  lg:px-[60px]  xl:px-48 inset-0 absolute z-50">
        <div className="lg:flex lg:justify-between flex-wrap lg:gap-x-5 xl:gap-x-1 gap-y-5">
          <MainImageComponent />
          <div className="flex flex-col gap-y-3 md:gap-y-5 lg:gap-y-3 lg:pt-2 md:pt-28 pt-20">
            <AboutTextComponent />
            <div className="relative w-28 md:w-36 lg:w-48 h-5">
              <Image src="/icons/headingLine.svg" layout="fill" />
            </div>
            <div>
              <p className="text-myWhite font-bold text-4xl md:text-5xl">
                Who We Are
              </p>
            </div>
            <div className="lg:w-[28rem]">
              <p className="text-myWhite">
                ESME is the lead Middle East Solution for Gaming & Esports
                operators. We help gmaing operators around the world to redefine
                their products & find their customers online or within the
                retail channel in the Arabic world (ME, NA, GCC).
              </p>
            </div>
            <div className="lg:w-[28rem]">
              <p className="text-myWhite">
                Through our services & network, we can adapt your operation to
                demanding & competitive new markets, with a new markets, with a
                team of experts driving the operation on your behalf. Within
                weeks we will be able to fully manage your operation and start
                acquiring customers from exciting new markets
              </p>
            </div>
            <FeatureComponent />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="h-[100%] font-slab">
        {/* Bg Image */}
        <div className="relative bg-bgAbout w-full h-[68rem] md:h-[85rem] lg:h-[45rem] bg-no-repeat  bg-cover bg-center">
          <div>
            <AboutDetailComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
