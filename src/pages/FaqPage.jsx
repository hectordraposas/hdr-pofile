import React from "react";

const FaqPage = () => {
  return (
    <main className="md:w-[90%] w-full mx-auto h-full bg-stone-400 p-5">
      <figure className="flex flex-col lg:w-1/2 w-full mx-auto">
        <h1 className=" p-5 text-center">
          What your thoughts about this page? Please share it to us.
        </h1>
        <textarea name="" id="" cols="50" rows="3" className="p-2"></textarea>
        <figure className="w-full flex justify-end mt-1">
          <button className="text-slate-50 bg-blue-600 px-10 py-2 w-1/3">
            Post
          </button>
        </figure>
      </figure>
      <section className="flex gap-5 flex-col mt-10 w-full px-1 md:px-24">
        <figure className="flex items-start gap-4">
          <img
            className=" w-14 h-14 rounded-full"
            src="https://i.pinimg.com/736x/01/61/6b/01616b7daa1d2ef8846022bffc253d68.jpg"
            alt=""
          />
          <figure className="flex flex-col">
            <h1>Full Name</h1> <h2>About 30 minutes ago</h2>
            <h3 className="pl-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              quibusdam ab iusto et vitae quasi cumque ex repudiandae nam animi,
              ut blanditiis natus. Nihil expedita doloribus fugit similique a
              recusandae?
            </h3>
            <h3 className="pl-5">Hello this is a post.</h3>
            <h3 className="pl-5">Hello this is a post.</h3>
            <figure className="pt-5 w-full flex justify-end text-slate-50">
              <button className=" pl-5 p-2 bg-slate-400 w-full">Like</button>
              <button className=" pl-5 p-2 bg-slate-400 w-full">Coment</button>
              <button className=" pl-5 p-2 bg-slate-400 w-full">Share</button>
            </figure>
          </figure>
        </figure>
        <figure className="flex items-start gap-4">
          <img
            className=" w-14 h-14 rounded-full"
            src="https://i.pinimg.com/736x/3c/a1/ea/3ca1ead781762c3528195fdf3eaaeb59.jpg"
            alt=""
          />
          <figure className="flex flex-col">
            <h1>Full Name</h1> <h2>About 25 minutes ago</h2>
            <h3 className="pl-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
              rerum numquam, laudantium consequuntur nobis ab soluta, minima
              similique modi explicabo ex tenetur nihil assumenda. Modi illo
              doloribus velit. Sapiente, repudiandae.
            </h3>
            <h3 className="pl-5">Hello this is a post.</h3>
            <h3 className="pl-5">Hello this is a post.</h3>
            <figure className="pt-5 w-full flex justify-end text-slate-50">
              <button className=" pl-5 p-2 bg-slate-400 w-full">Like</button>
              <button className=" pl-5 p-2 bg-slate-400 w-full">Coment</button>
              <button className=" pl-5 p-2 bg-slate-400 w-full">Share</button>
            </figure>
          </figure>
        </figure>
        <figure className="flex items-start gap-4">
          <img
            className=" w-14 h-14 rounded-full"
            src="https://www.90daykorean.com/wp-content/uploads/2019/07/Song-Joong-Ki-768x512-min.jpeg"
            alt=""
          />
          <figure className="flex flex-col">
            <h1>Full Name</h1> <h2>About 20 minutes ago</h2>
            <h3 className="pl-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              quisquam, asperiores officia voluptatibus fugit animi repellendus
              natus quaerat atque sequi accusantium veritatis autem quod nostrum
              vel illum tempore. Necessitatibus, repudiandae.
            </h3>
            <h3 className="pl-5">Hello this is a post.</h3>
            <h3 className="pl-5">Hello this is a post.</h3>
            <figure className="pt-5 w-full flex justify-end text-slate-50">
              <button className=" pl-5 p-2 bg-slate-400 w-full">Like</button>
              <button className=" pl-5 p-2 bg-slate-400 w-full">Coment</button>
              <button className=" pl-5 p-2 bg-slate-400 w-full">Share</button>
            </figure>
          </figure>
        </figure>
        <figure className="flex items-start gap-4">
          <img
            className=" w-14 h-14 rounded-full"
            src="https://images.saymedia-content.com/.image/t_share/MTc1MTEyNzA3Mzk2ODcxMjYz/the-10-most-handsome-korean-actors-for-2015.jpg"
            alt=""
          />
          <figure className="flex flex-col">
            <h1>Full Name</h1> <h2>About 30 minutes ago</h2>
            <h3 className="pl-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              magni consequatur hic dolores laboriosam blanditiis dolore
              obcaecati assumenda libero quasi, fugiat esse debitis molestias,
              iusto, optio repellendus quo voluptatem. Esse.
            </h3>
            <h3 className="pl-5">Hello this is a post.</h3>
            <h3 className="pl-5">Hello this is a post.</h3>
            <figure className="pt-5 w-full flex justify-end text-slate-50">
              <button className=" pl-5 p-2 bg-slate-400 w-full">Like</button>
              <button className=" pl-5 p-2 bg-slate-400 w-full">Coment</button>
              <button className=" pl-5 p-2 bg-slate-400 w-full">Share</button>
            </figure>
          </figure>
        </figure>
      </section>
    </main>
  );
};

export default FaqPage;
