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
            Hello, mera naam Pintu Nayak hai aur main 20 saal ka hoon. Main
            Jaipur mein rehta hoon. Main ek front-end developer hoon, jo HTML,
            CSS, JavaScript, aur React jaise technologies ke saath web
            development karne ki samarth rakhata hoon. Maine kuch projects
            banaye hain, jinki details niche di gayi hain. Dhanyavad.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
