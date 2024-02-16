import React from "react";

const About = () => {
  return (
    <>
      <div className=" flex flex-col justify-center min-h-[30vh] px-12 md:mt-0 mt-5">
        <div className="max-w-[90%]">
          <h3 className="md:text-2xl text-[18px] font-[montserrat] font-bold border-b border-gray-300 md:w-[16%] w-[45%]">
            About me
          </h3>
          <p className="md:text-[18px] mt-3 font-[Roboto]">
            A dedicated Front-End Developer with expertise in HTML, CSS,
            JavaScript, and React. Passionate about creating engaging and
            user-friendly websites. Committed to learn and staying updated on
            the latest industry trends delivering high-quality web solutions.
            Seeking an entry-level position to contribute to a team environment
            and expand knowledge through real-world experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
