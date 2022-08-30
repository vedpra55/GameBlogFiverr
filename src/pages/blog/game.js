import Image from "next/image";

export default function BlogDetailPage() {
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
  function BlogImage() {
    return (
      <div className="relative w-full h-[650px]">
        <Image
          priority
          src="/images/blog/bgBlog.webp"
          className=" object-cover"
          layout="fill"
          alt="hero image"
        />
      </div>
    );
  }

  function Buttons() {
    return (
      <div className="  flex md:justify-center  justify-between md:gap-x-10 mt-10 font-semibold">
        <button className="flex items-center gap-x-2 md:gap-x-3">
          <div className=" relative w-6 h-6">
            <Image src="/icons/arrowGL.svg" layout="fill" alt="arrow" />
          </div>
          <p className="text-[#414141]">Previous Blog</p>
        </button>
        <button className="flex items-center gap-x-2 md:gap-x-3">
          <p className="text-myYellow">Next Blog</p>
          <div className=" relative w-6 h-6">
            <Image src="/icons/arrowYR.svg" layout="fill" alt="arrow" />
          </div>
        </button>
      </div>
    );
  }

  return (
    <div>
      <BlogImage />
      <div className="bg-myLightBlack font-slab py-10 px-[15px] md:px-[30px] lg:px-[60px] xl:px-48 ">
        <div className="flex flex-col gap-y-5">
          <p className="text-myWhite  italic">August 30, 2022</p>
          <h1 className=" uppercase text-5xl font-bold text-myYellow">
            DOTA MADNESS
          </h1>
          <section>
            <p className="text-myWhite font-light leading-relaxed">
              Nisl non ultrices vel velit quis vel. Cursus dolor donec fermentum
              nibh lacus praesent sit est suspendisse. Et, sed aliquet morbi
              tortor amet eget dis. Id amet, malesuada arcu, quam faucibus at.
              Nunc, nibh lectus nec, gravida. Scelerisque mattis diam sagittis
              in turpis vitae, pharetra, porttitor eu. Elementum eget mauris
              arcu mattis nibh in augue quis dolor. Nunc sed lobortis amet
              venenatis aenean leo nunc. Elit nec mi pellentesque ut ut
              pellentesque. Gravida odio enim, dictumst elementum, urna sed.
              Consequat rhoncus imperdiet integer congue eu facilisis. Potenti
              vestibulum tortor dictum euismod nisi. Neque commodo sed egestas
              eu gravida. Lacus eget sit metus odio ultrices aliquet odio nunc
              blandit. Vestibulum elementum euismod eu egestas faucibus ipsum
              diam a. Nisi massa leo donec eu consequat, egestas. Ac
              pellentesque et in consequat. Aenean iaculis non, ornare mauris
              cras vivamus viverra nisl. Quis odio tortor elementum orci
              ultricies venenatis semper interdum dictum. Eget diam diam quis
              faucibus sed ante ornare. Risus quis quam dignissim aliquet ut
              arcu, tempor. Nam semper quisque nulla sed ac blandit. Neque, quam
              augue sit fermentum amet consequat massa.
            </p>
          </section>
          <section>
            <h4 className="text-3xl font-medium text-myWhite">
              Neque sed nulla lectus
            </h4>
          </section>
          <section>
            <p className="text-myWhite font-light">
              Nisl non ultrices vel velit quis vel. Cursus dolor donec fermentum
              nibh lacus praesent sit est suspendisse. Et, sed aliquet morbi
              tortor amet eget dis. Id amet, malesuada arcu, quam faucibus at.
              Nunc, nibh lectus nec, gravida. Scelerisque mattis diam sagittis
              in turpis vitae, pharetra, porttitor eu. Elementum eget mauris
              arcu mattis nibh in augue quis dolor. Nunc sed lobortis amet
              venenatis aenean leo nunc. Elit nec mi pellentesque ut ut
              pellentesque. Gravida odio enim, dictumst elementum, urna sed.
              Consequat rhoncus imperdiet integer congue eu facilisis. Potenti
              vestibulum tortor dictum euismod nisi. Neque commodo sed egestas
              eu gravida. Lacus eget sit metus odio ultrices aliquet odio nunc
              blandit. Vestibulum elementum euismod eu egestas faucibus ipsum
              diam a. Nisi massa leo donec eu consequat, egestas. Ac
              pellentesque et in consequat. Aenean iaculis non, ornare mauris
              cras vivamus viverra nisl. Quis odio tortor elementum orci
              ultricies venenatis semper interdum dictum. Eget diam diam quis
              faucibus sed ante ornare. Risus quis quam dignissim aliquet ut
              arcu, tempor. Nam semper quisque nulla sed ac blandit. Neque, quam
              augue sit fermentum amet consequat massa.
            </p>
          </section>
          <hr />
          <div className="flex  items-center gap-x-20 justify-between flex-wrap">
            <p className="text-myWhite text-[1.5rem] md:text-3xl">
              Share this blog
            </p>
            <div className="w-64 mt-5 md:mt-0 flex gap-x-3 items-center">
              {socailMediaLinks.map((item, i) => (
                <div key={i}>
                  <div className="relative w-8  h-8 cursor-pointer">
                    <Image src={item.icon} alt={item.name} layout="fill" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Buttons />
        </div>
      </div>
    </div>
  );
}
