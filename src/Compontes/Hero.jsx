import React from "react";
import ReactTyped from "react-typed";
import { FaGithub } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="md:flex items-center border-b border-gray-500 ">
        <div className="w-[100%] md:w-[70%] flex flex-col min-h-[30vh] md:pl-12 pl-10 pt-8">
          <div className="">
            <span className="mb-0 pb-0 text-[25px] font-bold font-[Roboto]">
              hello
            </span>{" "}
            <h1 className="md:text-[60px] text-[40px] capitalize font-bold leading-tight">
              I'am{" "}
              <span className="mb-3 font-[montserrat] text-[#F3BE48]">
                Pintu <br /> Nayak
              </span>
            </h1>
          </div>
          <div className="md:text-5xl text-3xl font-bold font-[Roboto] md:mt-0 mt-5 h-[12vh]">
            A
            <ReactTyped
              className="pl-3 "
              strings={[
                "Web-developer",
                "React-developer",
                "Front-end developer",
              ]}
              typeSpeed={120}
              loop
              backSpeed={50}
            />
          </div>
          <div className="flex items-center  md:mt-5 gap-5 self-start md:text-xl font-[Roboto]">
            <button className="px-6 py-3 bg-[#0096FF] rounded-lg border-none outline-none">
              <a
                href="images/Pintu-Nayak.pdf"
                className="text-white flex items-center gap-2"
                target="_blank"
              >
                <FaUser /> Resume
              </a>
            </button>
            <button className="px-6 py-3 bg-[#0D1117] rounded-lg border-none outline-none">
              <a
                href="https://github.com/Pintunayak883"
                className="text-white flex items-center gap-2"
                target="_blank"
              >
                <FaGithub /> Github
              </a>
            </button>
          </div>
        </div>
        <div className="w-[100%] flex md:ml-12 ml-[100px] items-center md:w-[35%] py-5 md:pl-5  min-h-[30vh]">
          <div className="md:w-[300px] w-[200px] md:h-[300px] h-[200px] rounded-full my-10">
            <img
              src="images/Profile-pic.jpg"
              alt=""
              className="w-[100%] h-[100%] rounded-full flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
