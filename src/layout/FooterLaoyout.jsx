import React from "react";

const FooterLaoyout = () => {
  return (
    <footer>
      <main className="grid grid-cols-1 lg:grid-cols-4 text-slate-950 bg-stone-300">
        <figure className="trademark  p-2 md:p-10">
          <figure className="flex">
            <h1>HDR &trade;</h1>
            <h2>All Rights Reserved 2024.</h2>
          </figure>
        </figure>

        <figure className="info  p-2 md:p-10">
          <h1>Please contact us:</h1>
          <h2>hector.raposas@gmail.com</h2>
        </figure>
        <figure className="reach-us lg:col-span-2  p-2 md:p-10">
          <h1 className="flex justify-center">
            Your thoughts are especial to us. Please leave it here.
          </h1>
          <div>
            <figure className="flex flex-col pt-5 gap-2">
              <label htmlFor="">Full Name</label>
              <input type="text" className="p-2 rounded-md border-none " />
            </figure>
            <figure className="flex flex-col pt-5 gap-2">
              <label htmlFor="">Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="border-none rounded-md p-2"
              ></textarea>
            </figure>
            <figure className="pt-2 flex justify-end">
              <button className="bg-blue-600 p-2 w-1/2 text-slate-50">
                Send
              </button>
            </figure>
          </div>
        </figure>
      </main>
    </footer>
  );
};

export default FooterLaoyout;
