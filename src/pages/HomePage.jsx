import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { useState } from "react";
import CertModalLayout from "../layout/CertModalLayout";
const HomePage = ({ setScrollBehavior, scroll }) => {
  const [showCertModal, setCertShowModal] = useState(false);

  const certModal = () => {
    setScrollBehavior(!scroll);
    setCertShowModal(!showCertModal);
  };
  return (
    <main className="h-full w-full mx-auto bg-slate-50">
      <section className="flex">
        <figure className="flex justify-center items-start w-full h-[calc(100vh_-_105px)] ">
          <figure>
            <h1 className="text-2xl md:text-4xl mt-10 md:mt-16 text-center">
              Hellow Friends!
            </h1>
            <h2 className="text-center mt-5">Welcome to my Page!</h2>
            <h3 className="p-10 text-justify">
              This is Hector D. Raposas, An aspiring Frontend Developer. I can
              do interactive websites that are user-friendly.
            </h3>
            <figure className="flex justify-center">
              <button
                className="bg-blue-600 text-slate-50 py-2 px-5 rounded-md"
                onClick={certModal}
              >
                Learn More
              </button>
            </figure>
            <h1 className="font-extrabold text-center mt-10">Tech Stack</h1>
            <figure className="mt-3 flex justify-center gap-5">
              <FaHtml5 className=" text-3xl text-blue-600" />
              <FaCss3Alt className=" text-3xl text-blue-600" />
              <IoLogoJavascript className=" text-3xl text-blue-600" />
              <FaReact className=" text-3xl text-blue-600" />
              <RiTailwindCssFill className=" text-3xl text-blue-600" />
            </figure>
          </figure>
        </figure>
        <figure className="hidden md:flex text-center w-full h-[calc(100vh_-_105px)] bg-slate-50 overflow-hidden justify-center relative">
          <div className="w-full absolute rounded-screen h-screen">
            <FaNode className="transition-all w-5 h-5 text-green-300 absolute right-[15%] top-[10%] z-30 animate-ping hover:animate-none cursor-pointer hover:w-20 hover:h-20" />
            <FaCodeBranch className="transition-all w-5 h-5 text-red-400 absolute left-[10%] top-[10%] animate-ping hover:animate-none cursor-pointer hover:w-20 hover:h-20" />
            <RiSupabaseFill className="transition-all w-5 h-5 text-green-400 absolute right-[15%] top-[40%] z-30 animate-ping hover:animate-none cursor-pointer hover:w-20 hover:h-20" />
            <SiReactquery className="transition-all w-5 h-5 text-green-600 absolute left-[5%] top-[70%] z-30 animate-ping hover:animate-none cursor-pointer hover:w-20 hover:h-20" />
          </div>
          <div className="aspect-square w-full lg:w-4/6 z-30 bg-self-img bg-cover"></div>
        </figure>
      </section>

      {showCertModal && <CertModalLayout certModal={certModal} />}
    </main>
  );
};

export default HomePage;
