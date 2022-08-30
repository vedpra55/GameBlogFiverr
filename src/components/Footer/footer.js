import Image from "next/image";

export default function Footer() {
  const socailMediaLinks = [
    {
      name: "youtube",
      icon: "/icons/sm/yt2.svg",
      url: "",
      isShadow: false,
    },
    {
      name: "facebook",
      icon: "/icons/sm/fb2.svg",
      url: "",
      isShadow: false,
    },
    {
      name: "twitter",
      icon: "/icons/sm/twitter2.svg",
      url: "",
      isShadow: true,
    },
    {
      name: "insta",
      icon: "/icons/sm/insta2.svg",
      url: "",
      isShadow: true,
    },
    {
      name: "linkedin",
      icon: "/icons/sm/linkedin2.svg",
      url: "",
      isShadow: false,
    },
    {
      name: "tiktok",
      icon: "/icons/sm/tikTok2.svg",
      url: "",
      isShadow: false,
    },
  ];
  return (
    <div className="bg-myBlack3 w-full h-auto font-slab text-myWhite">
      <div className="px-[15px] md:px-[30px] lg:px-[60px] xl:px-48 flex justify-between md:items-end md:gap-x-20  flex-wrap  md:gap-y-5 pt-20">
        <div className="flex flex-col gap-y-5">
          <div className="relative w-36 h-16 md:w-48 md:h-16">
            <Image layout="fill" src="/icons/logo.svg" alt={"logo"} />
          </div>
          <p>
            ESME is the lead Middle East Solution for Gaming & Esports
            operators.
          </p>
        </div>
        <div className="w-64 mt-5 md:mt-0 flex gap-x-3 items-center">
          {socailMediaLinks.map((item, i) => (
            <div key={i}>
              <div className="relative w-8  h-8 cursor-pointer">
                <Image src={item.icon} alt={item.name} layout="fill" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] my-10 bg-myWhite"></div>
      </div>
      <div className="text-xs pb-10 cursor-pointer gap-y-5 flex flex-col md:flex-row justify-between px-[15px] md:px-[30px] lg:px-[60px] xl:px-48">
        <p>All Rights Reserved</p>
        <div className="flex gap-x-5 ">
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </div>
  );
}
