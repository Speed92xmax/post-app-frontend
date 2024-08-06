import React from "react";

import { Outlet } from "react-router-dom";
import Modal from "./Modal.jsx";

export const Navbar = () => {
  return (
    <div className="flex flex-col min-h-screen h-full">
      <nav className="text-gray-200 body-font bg-gray-900">
        <div
          className="container  mx-auto flex justify-between p-5 flex-col md:flex-row items-center"
          bis_skin_checked="1"
        >
          <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
            <span className="ml-3 text-xl">Post App</span>
          </a>
          <div className=" inline-block md:hidden">
            <Modal />
          </div>
        </div>
      </nav>
      <div className="grow flex justify-center items-center bg-white">
        <Outlet />
      </div>
    </div>
  );
};
