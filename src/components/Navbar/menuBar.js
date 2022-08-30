import ImageComponent from "../Image/image";
import Image from "next/image";

export default function MenuBar() {
  const pageLinks = [
    {
      name: "Home",
      href: "",
    },
    {
      name: "About",
      href: "",
    },
    {
      name: "Services",
      href: "",
    },
    {
      name: "Brand",
      isMenu: true,
      href: "",
    },
    {
      name: "Portfolio",
      href: "",
    },
    {
      name: "Team",
      href: "",
    },
    {
      name: "Blog",
      href: "",
    },
  ];

  function LogoComponent() {
    return (
      <div className="flex gap-x-3 md:gap-x-5 items-center">
        <div className="relative w-5 h-5 md:w-8 md:h-8 xl:hidden md:block">
          <ImageComponent path="/icons/menuIcon.svg" alt={"logo"} />
        </div>
        <div className="relative w-28 h-10 md:w-36 md:h-10">
          <ImageComponent path="/icons/logo.svg" alt={"logo"} />
        </div>
      </div>
    );
  }

  function PageLinkComponent() {
    return (
      <div className="relative hidden lg:flex lg:gap-x-5 xl:gap-x-10 items-center">
        {pageLinks.map((item, i) => (
          <div key={i} className="cursor-pointer">
            {item.isMenu ? (
              <div className="flex items-center gap-x-2">
                <p className="">{item.name}</p>
                <div className="relative w-3 h-3 cursor-pointer">
                  <ImageComponent path={"/icons/arrowDown.svg"} alt="arrow" />
                </div>
              </div>
            ) : (
              <div>
                <p>{item.name}</p>
              </div>
            )}
            <div className="absolute inset-0  top-12 w-12 h-[3px] bg-myYellow"></div>
          </div>
        ))}
      </div>
    );
  }

  function ContactButton() {
    return (
      <div>
        <button className="relative w-28 h-8 md:w-36 md:h-10">
          <Image
            src={"/icons/button.svg"}
            layout="fill"
            className=" object-cover"
          />
          <div className="z-50 absolute inset-0 flex justify-center items-center">
            <p className="text-myBlack  font-medium uppercase  text-[18px]">
              Contact
            </p>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="lg:mt-1 bg-myLightBlack px-[15px] md:px-[30px] lg:px-[60px] py-[14px] text-white">
      <div className="flex justify-between items-center">
        <LogoComponent />
        <div className="flex lg:gap-x-14 xl:gap-x-44">
          <PageLinkComponent />
          <ContactButton />
        </div>
      </div>
    </div>
  );
}
