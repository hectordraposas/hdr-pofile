import React from "react";

const ModalLayout = ({ setScroll }) => {
  const handleOverLay = (e) => {
    if (e.currentTarget !== e.target) return;
    setScroll();
  };
  return (
    <div
      className="overlay w-full h-full backdrop-blur-md bg-slate-800 fixed inset-0 bg-opacity-20"
      onClick={handleOverLay}
    >
      <figure className="inset-0 md:h-fit md:w-1/2 lg:h-fit lg:w-1/2 xl:w-1/3 h-full w-full bg-slate-700 z-10  fixed mx-auto my-auto transition-all backdrop-blur-md p-10">
        <h1 className="text-center text-slate-50 md:text-2xl">Please Login</h1>
        <div className="flex flex-col gap-2">
          <figure className="flex flex-col gap-2">
            <label htmlFor="uname" className="text-slate-50">
              Username
            </label>
            <input
              className="p-2 rounded-lg border-none"
              type="text"
              placeholder=""
            />
          </figure>
          <figure className="flex flex-col gap-2">
            <label htmlFor="uname" className="text-slate-50">
              Username
            </label>
            <input
              className="p-2 rounded-lg border-none"
              type="password"
              placeholder=""
            />
          </figure>
          <figure className="flex flex-col lg:flex-row gap-2  pt-2 w-full justify-between items-center">
            <label
              htmlFor=""
              className="flex justify-start cursor-pointer hover:text-blue-400 text-slate-50 items-star text-left"
            >
              Forgot Password?
            </label>
            <div className="flex flex-col lg:flex-row gap-1 w-full lg:w-fit">
              <button className="text-slate-50 bg-green-600 p-2 border-none w-full lg:w-fit">
                Create an Account
              </button>
              <button className="text-slate-50 bg-blue-700 p-2 border-none  w-full lg:w-fit px-4">
                Log in
              </button>
            </div>
          </figure>
          <div class="relative py-4">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-b border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="bg-white px-4 text-sm text-gray-950">
                Log in with
              </span>
            </div>
          </div>
          <figure className="login-with md:flex ">
            <h1 className="w-full bg-green-800 justify-center flex text-slate-50 p-2 cursor-pointer">
              Google
            </h1>
            <h1 className="w-full bg-blue-700 justify-center flex text-slate-50 p-2 cursor-pointer">
              Facebook
            </h1>
          </figure>
        </div>
      </figure>
    </div>
  );
};

export default ModalLayout;
