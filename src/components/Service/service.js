import Image from "next/image";

export default function Service() {
  const serviceData = [
    {
      image: "/images/service/service1.webp",
      name: "League Ops",
      description:
        "Our team has what it takes to construct the ideal esports stage for any occasion.",
    },
    {
      image: "/images/service/service2.webp",
      name: "Events Management",
      description:
        "We have planned and executed countless events both live and online that met the audience’s expectations.",
    },
    {
      image: "/images/service/service3.webp",
      name: "Content & Media",
      description:
        "Simple. Effective. Engaging. This is how we define “right” content and yes, we speak “esports & gaming”.",
    },
    {
      image: "/images/service/service4.webp",
      name: "Prize Payout & Delivery",
      description:
        "We take care of paying out the prize money while strictly adhering to all legal and financial processes.",
    },
    {
      image: "/images/service/service5.webp",
      name: "On-Air Talents",
      description:
        "We can provide you with elite-level talents such as desk hosts, analysts, interviewers, and commentators.",
    },
    {
      image: "/images/service/service6.webp",
      name: "Esports Broadcasting",
      description:
        "We have countless successful live broadcast operations and deep know-how, with an in-house professional production team.",
    },
  ];

  function HelpSectionComponent() {
    return (
      <div className="col-span-1 md:col-span-2">
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
              How Can We Help
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

  function ServiceImageComponent({ item }) {
    return (
      <div>
        <div className="relative 2xl:w-80 2xl:h-80 w-full lg:h-60 md:h-80 h-96 xl:h-60">
          <Image src={item.image} alt={item.name} layout="fill" />
          <div className="absolute inset-0 flex items-end">
            <div className="flex flex-col gap-y-2 py-3 px-3">
              <div className="flex gap-x-2 items-center">
                <div className=" w-[2.99px] h-6 bg-myYellow"></div>
                <p className=" font-bold">{item.name}</p>
              </div>
              <p className="text-xs antialiased  h-16">{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-myWhite bg-black px-[15px] md:px-[30px] lg:px-[60px] xl:px-48 py-24">
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5">
          <HelpSectionComponent />
          {serviceData.map((item, i) => (
            <ServiceImageComponent key={i} item={item} />
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
