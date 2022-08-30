import Image from "next/image";

export default function PortfolioBanner() {
  function ContactButton() {
    return (
      <div>
        <button className="relative w-36 h-12 md:w-48 md:h-14">
          <Image
            src={"/icons/button.svg"}
            layout="fill"
            className=" object-cover"
          />
          <div className="z-50 absolute inset-0 flex justify-center items-center">
            <p className="text-myBlack  font-medium   text-[18px]">
              Get in Touch
            </p>
          </div>
        </button>
      </div>
    );
  }
  return (
    <div className="h-[100%] font-slab text-myWhite">
      <div className="relative bg-bgPortfolio w-full h-auto bg-no-repeat  bg-cover bg-center">
        <div className="px-[15px] md:px-[30px] lg:px-[60px] xl:px-48 flex md:flex-row flex-col gap-y-20 justify-between md:items-center py-20">
          <div className="flex flex-col gap-y-3 mt-3">
            <h4 className="text-3xl font-bold">
              This Could've Been Your Project
            </h4>
            <p>
              Don't wait out, get in touch with us and together we will make
              something amazing!
            </p>
          </div>
          <ContactButton />
        </div>
      </div>
    </div>
  );
}
