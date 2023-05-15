import React from "react";

function About() {
  return (
    <>
      <div className=" bg-[#3c8c80] z-0 Aboutsection mx-auto  font-playfair ">
        <div className="flex flex-col text-center relative pb-[15rem] Aboutme ]">
          <div className="mt-[6rem]">
            {" "}
            <h1 className="mb-6 text-5xl  text-white">
              Hello, my name is Carlos Rivas.
            </h1>
            <h2 className="mb-6 pb-8  text-xl sm:px-[2rem] lg:px-[8rem] md:lg:px-[8rem] text-white text-  ">
              Since starting my career as a full stack developer two years ago,
              I've completed a rigorous 24-week bootcamp at UNC and have been
              utilizing my talents in a variety of remote projects. I've
              assisted in the development of CRUD projects while working
              cooperatively with dynamic teams. This event has given me some
              quiet confidence. With a natural curiosity driving me, I
              constantly refine my skills, taking on one challenge at a time.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
