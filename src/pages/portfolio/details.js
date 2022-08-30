import PortfolioHero from "../../components/PortfolioDetails/heroPortfolioDetails";
import PortfolioMainDetails from "../../components/PortfolioDetails/mainDetails";
import PortfolioBanner from "../../components/PortfolioDetails/portfolioBanner";
import PortfolioMedia from "../../components/PortfolioDetails/portfolioMedia";

export default function PortfolioDetailsPage() {
  const featureData = [
    {
      tittle: "3 amazing",
      attribute: "NBA2k esports events",
    },
    {
      tittle: "60 national",
      attribute: "basketball federations",
    },
    {
      tittle: "10 million+",
      attribute: "total views",
    },
    {
      tittle: "160+ hours",
      attribute: "of live content",
    },
    {
      tittle: "FIBA & NBA2K",
      attribute: "collaboration",
    },
  ];

  function FeatureComponent() {
    return (
      <div className="absolute hidden md:block inset-0 font-slab  top-[60rem] md:top-[56rem]  lg:top-[37rem] z-50 px-[15px] md:px-[30px] lg:px-[60px] xl:px-48">
        <div className="bg-myYellow h-auto py-5 w-full  place-items-center gap-y-5 px-5 flex flex-col items-center md:grid grid-cols-1 md:grid-cols-3   lg:grid-cols-5 ">
          {featureData.map((item, i) => (
            <div
              className="flex  justify-between lg:justify-start md:w-48  lg:gap-x-5 2xl:gap-x-14 "
              key={i}
            >
              <div className="flex flex-col justify-center gap-y-3">
                <h5 className="font-bold text-xl">{item.tittle}</h5>
                <p className="text-xs">{item.attribute}</p>
                <div className="w-32 md:hidden h-[1px] bg-myBlack2"></div>
              </div>
              {i !== 4 && (
                <div className="w-[1px] hidden md:block h-16 bg-myBlack2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function FeatureComponentMobile() {
    return (
      <div className="bg-myYellow w-full h-auto md:hidden text-myBlack font-slab">
        <div className=" flex flex-col items-center py-10 gap-y-5">
          {featureData.map((item, i) => (
            <div className="flex flex-col gap-y-2 items-center">
              <h5 className="text-3xl font-bold">{item.tittle}</h5>
              <p className=" text-xs">{item.attribute}</p>
              <div className="bg-myBlack2 w-28 h-[1px] mt-5"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className=" relative ">
      <PortfolioHero />
      <FeatureComponent />
      <FeatureComponentMobile />
      <PortfolioMainDetails />
      <PortfolioMedia />
      <PortfolioBanner />
    </div>
  );
}
