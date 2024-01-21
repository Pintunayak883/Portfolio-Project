import React from "react";
import Skillsdata from "../Data/Skillsdata";

const Skills = () => {
  return (
    <>
      <div className=" flex flex-col justify-center min-h-[30vh] px-12 md:mt-0 mt-10">
        <h1 className="md:text-2xl text-[18px] font-[montserrat] font-bold border-b border-gray-300 md:w-[8%] w-[22%]">
          Skills
        </h1>
        <div className="">
          {Skillsdata.map((item) => {
            return (
              <div
                className="pt-3 flex flex-col flex-wrap capitalize"
                key={item.id}
              >
                <h3 className="text-white py-1 max-w-[320px] md:text-xl text-[18px] font-[montserrat] font-semibold flex items-center">
                  {item.title} ÷
                </h3>
                <div className="mt-1 gap-2">
                  <span className="flex flex-wrap items-center  text-white py-2 text-[18px] font-[roboto]">
                    {item.info}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
