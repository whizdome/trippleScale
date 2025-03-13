import video1 from "../assets/devops_intro.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Master Tech with
        <span className="bg-gradient-to-r from-blue-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          trippleScale
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Unlock the power of technology and take your career to new heights. Learn
        the tools, techniques, and skills used by top organizations to
        excel in the tech industry through interactive live classes.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#courses"
          className="bg-gradient-to-r from-blue-500 to-green-800 py-3 px-4 mx-3 rounded-md"
        >
          Get Started
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-3/4 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
