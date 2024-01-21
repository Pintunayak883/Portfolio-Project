import React from "react";
import { FaGithub } from "react-icons/fa6";
const ProjectCard = ({ live, git, bg }) => {
  return (
    <>
      <div className="relative w-[600px] md:min-h-[40vh] min-h-[20vh] mt-5 shadow-lg rounded-lg">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        ></div>

        <div className="absolute bottom-0 text-white px-3 py-1 flex items-center self-start gap-4 md:text-[18px] text-[14px] font-[Roboto]">
          <button className="px-3 py-2 mt-5  bg-[#0096FF] rounded-lg border-none outline-none">
            <a
              href={live}
              target="_blank"
              className="text-white flex items-center gap-2"
            >
              Live Demo
            </a>
          </button>
          <button className="px-3 py-2 mt-5 bg-[#0D1117] rounded-lg border-none outline-none">
            <a
              href={git}
              className="text-white flex items-center gap-2"
              target="_blank"
            >
              <FaGithub /> Github
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
