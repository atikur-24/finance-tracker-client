import Frame from "../src/assets/frame/frame.png";

const HeroSection = () => {
  return (
    <section className="my-container pb-[60px] lg:pb-[100px]">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div className="flex justify-end md:order-2">
          <img
            className="max-md:w-full"
            src={Frame}
            width="326"
            height="290"
            alt="frame"
          />
        </div>
        <div className="space-y-3 md:space-y-5">
          <h1 className="text-[40px] font-semibold leading-none tracking-wide text-primary md:text-[50px] lg:text-[72px] lg:font-bold">
            Tracker
          </h1>
          <p className="my-2 text-sm opacity-60 md:text-base lg:text-lg">
            Easily record your daily expenses and categorize them for a quick
            overview of where your money is going.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
