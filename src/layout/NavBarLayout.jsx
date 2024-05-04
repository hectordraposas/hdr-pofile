import React, { useState } from "react";
import ModalLayout from "./ModalLayout";
import { Link } from "react-router-dom";

const NavBarLayout = ({ setScrollBehavior, scroll }) => {
  const [showModal, setShowModal] = useState(false);

  const setScroll = () => {
    setScrollBehavior(!scroll);
    setShowModal(!showModal);
  };
  return (
    <nav className="flex justify-between px-5 py-10 bg-yellow-400 font-semibold z-0 ">
      <figure className="cursor-pointer hover:text-slate-50 hover:tracking-widest transition-all">
        <Link to="/home">Hector Dela Cruz Raposas</Link>
      </figure>
      <ul className="flex gap-5 cursor-pointer ">
        <li className="hover:text-slate-50 hover:tracking-wide transition-all">
          <Link to="/home">Home</Link>
        </li>

        <li className="hover:text-slate-50 hover:tracking-wide transition-all">
          <Link to="faq">FAQ</Link>
        </li>
        <li
          onClick={setScroll}
          className="hover:text-slate-50 hover:tracking-wide transition-all"
        >
          Login
        </li>
      </ul>
      {showModal && <ModalLayout setScroll={setScroll} />}
    </nav>
  );
};

export default NavBarLayout;
