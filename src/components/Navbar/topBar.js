import Image from "next/image";
import Link from "next/link";
import ImageComponent from "../Image/image";

export default function TopBar() {
  const socailMediaLinks = [
    {
      name: "youtube",
      icon: "/icons/sm/yt.svg",
      url: "",
      isShadow: false,
    },
    {
      name: "facebook",
      icon: "/icons/sm/f.svg",
      url: "",
      isShadow: false,
    },
    {
      name: "twitter",
      icon: "/icons/sm/twitter.svg",
      url: "",
      isShadow: true,
    },
    {
      name: "insta",
      icon: "/icons/sm/instagram.svg",
      url: "",
      isShadow: true,
    },
    {
      name: "linkedin",
      icon: "/icons/sm/linked_in.svg",
      url: "",
      isShadow: false,
    },
    {
      name: "tiktok",
      icon: "/icons/sm/tikTok.svg",
      url: "",
      isShadow: false,
    },
  ];

  function SocialMediaLinks() {
    return (
      <div className="flex items-center gap-x-3 md:gap-x-5">
        <div className="hidden md:flex items-center gap-x-2">
          <p className=" md:text-[18px] ">Follow Us On</p>
          <div className=" relative w-6 h-2">
            <ImageComponent path="/icons/Line.svg" alt="line" />
          </div>
        </div>
        <div className="flex items-center gap-x-3 md:gap-x-5">
          {socailMediaLinks.map((item, i) => (
            <div key={i} className="cursor-pointer">
              {item.isShadow ? (
                <ShadowIcons item={item} />
              ) : (
                <NormalIcons item={item} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function NormalIcons({ item }) {
    return (
      <div
        className={`${
          item.isShadow && "shadow-md"
        } relative h-4 w-4 md:h-5 md:w-5`}
      >
        <ImageComponent path={item.icon} alt={item.name} contain />
      </div>
    );
  }

  function ShadowIcons({ item }) {
    return (
      <div className="">
        <div className={`relative h-4 w-4 md:h-5 md:w-5`}>
          <ImageComponent path={item.icon} alt={item.name} contain />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-myLightBlack px-[15px] md:px-[30px] lg:px-[60px] py-[10px] lg:py-[14px] text-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 items-center">
          <div className="relative h-[19px] w-[21px]">
            <Image
              className=" cursor-pointer"
              src="/icons/traslateIcon.svg"
              alt="traslate icon"
              layout="fill"
            />
          </div>
          <p>English</p>
          <div className="relative h-2 w-3 cursor-pointer">
            <ImageComponent path="/icons/arrowDown.svg" alt="traslate icon" />
          </div>
        </div>
        <SocialMediaLinks />
      </div>
    </div>
  );
}
