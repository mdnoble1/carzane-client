import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto my-10 lg:my-16 px-6 lg:px-24">
      <div className="lg:flex items-center justify-between">
        <div className="relative flex-1">
          <h2 className="font-semibold text-5xl lg:text-7xl">
            DRIVE YOUR <br />
            DREAM
          </h2>
          <div className="absolute top-[53px] left-44 lg:top-[76px] lg:left-64 text-xs lg:text-base">
            <p>
              Unlock Your Journey <br /> With Carzane
            </p>
            <div className="border-[#ea001e] border lg:border-2 w-24 lg:w-36"></div>
          </div>
          <div>
          <div className="border-gray-400 border my-6 lg:my-10 w-10/12">
            </div>
            <button className="btn rounded-lg font-semibold text-lg lg:text-xl normal-case text-white bg-[#ea001e] hover:bg-red-400 hover:text-black">
                Find a Car
              </button>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <img className="w-[690px]" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
