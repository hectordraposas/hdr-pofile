import React, { useState } from "react";
import LoginModalLayout from "./LoginModalLayout";
import { Link } from "react-router-dom";
import CertModalLayout from "./CertModalLayout";

const NavBarLayout = ({ setScrollBehavior, scroll }) => {
  const [showModal, setShowModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

  const certModal = () => {
    setScrollBehavior(!scroll);
    setShowModal(!showCertModal);
  };

  const loginModal = () => {
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
          onClick={loginModal}
          className="hover:text-slate-50 hover:tracking-wide transition-all"
        >
          Login
        </li>
      </ul>
      {showModal && <LoginModalLayout loginModal={loginModal} />}
      {showCertModal && <CertModalLayout certModal={certModal} />}
    </nav>
  );
};

export default NavBarLayout;
