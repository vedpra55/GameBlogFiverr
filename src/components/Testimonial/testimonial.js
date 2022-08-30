import Image from "next/image";

export default function Testimonial() {
  function TestimonaialDetails() {
    return (
      <div className="relative w-full h-[35rem] xl:h-[35rem]   bg-myBlack2 mt-5 md:mt-10">
        <Image
          src="/images/testimonial/bgTestimonial2.png"
          layout="fill"
          alt="background"
        />
        <div className="px-5 md:px-20 flex flex-col gap-y-12 justify-center items-center absolute inset-0">
          <div className="flex flex-col items-center">
            <p className="text-xl">Wayne Song</p>
            <p className="text-myYellow italic pt-2">
              Gaming Operation Manager
            </p>
          </div>
          <p className="text-[16px] md:text-xl  font-semibold italic text-center">
            “We believe that in a region with a strong hunger for Esport like
            the Middle East & North Africa, MLBB's tournament ecosystem will be
            developed into world-class quality thanks to our cooperation with
            ESME.”
          </p>
          <div className="relative w-24 h-6">
            <Image src="/images/Zantic.webp" layout="fill" />
          </div>
          <div className="absolute flex justify-center md:block bottom-5 md:right-20">
            <div className=" relative w-12 h-12 md:w-20 md:h-20">
              <Image
                src="/images/testimonial/comaIcon.svg"
                layout="fill"
                alt="comma"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function ButtonComponent() {
    return (
      <div className="flex justify-center gap-x-2 mt-16">
        <button className=" relative w-12 h-10">
          <Image src="/icons/leftArrowBtn.svg" layout="fill" />
        </button>
        <button className=" relative w-12 h-10">
          <Image src="/icons/rightArrowBtn.svg" layout="fill" />
        </button>
      </div>
    );
  }

  return (
    <div className="h-[100%] font-slab text-myWhite">
      <div className="relative bg-bgTestimonial w-full h-[55rem] md:h-[55rem] lg:h-[45rem] bg-no-repeat  bg-cover bg-center">
        <div className="px-[15px] md:px-[30px] lg:px-[60px] xl:px-48 flex flex-col gap-y-2 md:gap-y-5 md:items-center  py-20 absolute inset-0">
          <div className="absolute">
            <div className="relative -top-16  overflow-hidden  w-[20rem] md:w-[45rem] lg:w-[60rem] xl:w-[70rem] h-32">
              <Image
                src="/images/testimonial/TestimonialText.svg"
                layout="fill"
              />
            </div>
          </div>
          <div className="relative w-28 md:w-36 lg:w-48 h-5">
            <Image
              src="/images/testimonial/testimonialHeading.svg"
              layout="fill"
              alt="heading line"
            />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold">Testimonials</h3>
          <TestimonaialDetails />
          {/* Button */}
          <ButtonComponent />
        </div>
      </div>
    </div>
  );
}
