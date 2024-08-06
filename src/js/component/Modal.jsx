import React from "react";
import { PostForm } from "./PostForm.jsx";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-blue-500 text-white rounded-lg px-4 py-2  hover:bg-blue-600"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Crear post
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-end justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <p className="text-black text-lg">Crea un nuevo post</p>
                  <button
                    className="p-1 ml-auto  border-0 text-gray-300 float-right text-lg leading-none  outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <PostForm />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
