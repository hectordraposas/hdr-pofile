import React from "react";

const CertModalLayout = ({ certModal }) => {
  const handleOverLay = (e) => {
    if (e.currentTarget !== e.target) return;
    certModal();
  };
  return (
    <div
      className="overlay w-full h-full backdrop-blur-md bg-slate-800 fixed inset-0 bg-opacity-20 z-50"
      onClick={handleOverLay}
    >
      CertModalLayout
    </div>
  );
};

export default CertModalLayout;
