import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import Contactdata from "../Data/Contactdata";

const Contact = () => {
  return (
    <>
      <div className=" flex flex-col justify-center min-h-[10vh] px-12 bg-[#212831] mt-5">
        <h1 className="md:text-2xl text-[18px] font-[montserrat] font-bold border-b border-gray-300 md:max-w-[16%] w-[45%] md:mt-0 pt-3">
          Contact us
        </h1>
        <div className="w-[100%] flex flex-col ">
          <div className="flex items-center justify-center flex-col m-4 md:m-10 md:px-10  ">
            {Contactdata.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center text-center md:gap-3 gap-1 pt-4 lg:text-xl md:text-[16px] sm:text-[14px] font-[Roboto] "
                >
                  <span className="max-w-6 max-h-6">{item.icon}</span>
                  <p className="border-b border-gray-500">{item.name}</p>
                </div>
              );
            })}
          </div>

          <div className=" flex items-center justify-center gap-5 text-3xl px-5 py-3 mb-2">
            <a href="https://www.instagram.com/p.i.n.t.u_883_/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://github.com/Pintunayak883" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pintu-nayak-02242327b/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
