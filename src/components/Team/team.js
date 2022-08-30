import Image from "next/image";

export default function Team() {
  const teamData = [
    {
      image: "/images/team/team1.png",
    },
    {
      image: "/images/team/team2.png",
    },
    {
      image: "/images/team/team3.png",
    },
    {
      image: "/images/team/team4.png",
    },
    {
      image: "/images/team/team5.png",
    },
    {
      image: "/images/team/team6.png",
    },
  ];

  function HelpSectionComponent() {
    return (
      <div className="col-span-1 md:col-span-2 mb-5 lg:mb-0">
        <div className="flex flex-col gap-y-5 text-myWhite">
          <div className="relative w-28 md:w-36 lg:w-48 h-5">
            <Image
              layout="fill"
              src="/icons/headingLine.svg"
              alt="headingLine"
            />
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-slab font-bold ">
              Our Team
            </h3>
          </div>
          <p className="md:w-96">
            Ensure that our client can achieve a better level of brand awareness
            as well as collaborateto make their investments more profitable.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-myBlack3 w-full h-full text-myWhite font-slab">
      <div className="px-[15px] md:px-[30px] lg:px-[60px] xl:px-48 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <HelpSectionComponent />
          {teamData.map((item, i) => (
            <div key={i} className="">
              <div className="relative 2xl:w-full 2xl:h-80 w-full lg:h-60 md:h-80 h-96 xl:h-56">
                <Image
                  className=" object-fill"
                  src={item.image}
                  alt={"team images"}
                  layout="fill"
                />
                {i === 0 && (
                  <div className="flex flex-col gap-y-2 items-center justify-center absolute inset-0">
                    <div className="relative w-16 h-10">
                      <Image
                        src="/images/team/teamLine.svg"
                        layout="fill"
                        alt="line"
                      />
                    </div>
                    <div>
                      <p className="  text-myBlack2 text-2xl">John Wick</p>
                      <p className=" text-myBlack3 text-xs">
                        Broadcast Manager
                      </p>
                    </div>
                    <div className="relative w-16 h-10">
                      <Image
                        src="/images/team/teamLine.svg"
                        layout="fill"
                        alt="line"
                      />
                    </div>
                    <div className="flex gap-x-3 tex-xs  text-myBlack2">
                      <p>Facebook</p>
                      <p>Twitter</p>
                      <p>LinkedIn</p>
                    </div>
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
      </div>
    </div>
  );
}
