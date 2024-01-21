import Frame from "../src/assets/frame/financial-literacy-3.png";

const HeroSection = () => {
  return (
    <section className="pb-[114px] pt-20 md:mt-[100px]">
      <div className="container lg:px-20">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="flex justify-center md:order-2">
            <img
              className="max-md:w-full"
              src={Frame}
              width="326"
              height="290"
              alt="frame"
            />
          </div>
          <div>
            <h1 className="text-primary mb-1.5 text-[56px] font-bold leading-none lg:text-[73px]">
              Tracker
            </h1>
            <p className="my-2 text-lg opacity-60">
              Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
              Your Personal Productivity Ally for Seamless Goal Achievement and
              Stress-Free Task Management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
