import Image from "next/image";

export default function PortfolioHero() {
  function HeroDetail() {
    return (
      <div className="flex flex-col gap-y-5 text-white lg:w-[511px] mt-10">
        <div>
          <h1 className="font-bold font-slab text-3xl md:text-5xl antialiase">
            WSVG 2015 Maldives, MENA qualifications
          </h1>
        </div>
        <div>
          <p className="subpixel-antialiase text-[20px]">
            Nisl non ultrices vel velit quis vel. Cursus dolor donec fermentum
            nibh lacus praesent sit est suspendisse. Et, sed aliquet morbi
            tortor amet eget dis. Id amet, malesuada arcu, quam faucibus at.
            Nunc, nibh lectus nec, gravida. Scelerisque mattis diam sagittis in
            turpis vitae, pharetra, porttitor eu.
          </p>
        </div>
      </div>
    );
  }

  function FlikBoxIcon() {
    return (
      <div className="relative w-64 h-96 mt-0 lg:mt-50">
        <Image
          src="/images/portfolio/FlikboxIcon.svg"
          layout="fill"
          alt="flik icon"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full h-[800px] md:h-[1000px] lg:h-[650px]">
        <Image
          priority
          src="/images/portfolio/bgPortfolio2.webp"
          className=" object-cover"
          layout="fill"
          alt="hero image"
        />
        <div className="absolute  items-center inset-0 px-[15px] md:px-[30px] lg:px-[60px] xl:px-48 py-16 flex flex-col-reverse lg:items-start lg:flex-row justify-end lg:justify-between">
          <HeroDetail />
          <FlikBoxIcon />
        </div>
      </div>
    </div>
  );
}
