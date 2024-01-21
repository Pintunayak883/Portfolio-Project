import React from "react";
import ProjectCard from "./ProjectCard";
import Projctdata from "../Data/data";
const Projects = () => {
  return (
    <>
      <div className=" px-12 md:mt-0 mt-3">
        <h1 className="md:text-2xl text-[18px] font-[montserrat] font-bold border-b border-gray-300 md:w-[18%] w-[50%]">
          Our Projects
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6 md:pb-10">
          {Projctdata.map((item) => {
            return (
              <ProjectCard
                key={item.id}
                live={item.live}
                git={item.git}
                bg={item.bg}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
