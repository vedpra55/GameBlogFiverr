import Image from "next/image";

export default function LetsTalk() {
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
          <div>
            <div className="relative w-56 h-10">
              <Image
                src="/images/letsTalk/LetTalkText.svg"
                layout="fill"
                alt="Lets Talk"
              />
            </div>
            <div className="mt-3">
              <h4 className=" text-4xl md:text-5xl font-bold">
                About your Next Project
              </h4>
            </div>
          </div>
          <ContactButton />
        </div>
      </div>
    </div>
  );
}
