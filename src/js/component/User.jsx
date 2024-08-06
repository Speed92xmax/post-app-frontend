import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { PostForm } from "./PostForm.jsx";

export const User = () => {
  const { actions } = useContext(Context);
  const [userInfo, SetUserInfo] = useState();

  const setUser = async () => {
    const response = await actions.getUser();
    if (response.ok) {
      SetUserInfo(response.user);
    } else console.log(response);
  };

  useEffect(() => {
    setUser();
  }, []);

  if (!userInfo) {
    return (
      <>
        <div className="flex justify-center backdrop-blur-lg rounded-lg bg-gray-400/20 h-full p-5">
          <div>Cargando ....</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className=" flex flex-col gap-10 backdrop-blur-lg rounded-lg bg-gray-400/20 h-full p-5">
        <div className="flex justify-between gap-5">
          <img
            src={userInfo.avatar}
            alt="avatar"
            className="max-h-[120px] border-4 border-gray-800 rounded-full w-auto"
          />
          <div className="flex flex-col justify-between grow p-4">
            <div className="flex  gap-5">
              <span className="text-sm text-gray-500">Nombre :</span>
              <p className="font-semibold">{userInfo.name}</p>
            </div>
            <div className="flex  gap-5">
              <span className="text-sm text-gray-500">Apellido :</span>
              <p className="font-semibold">{userInfo.surname}</p>
            </div>

            <div className="flex  gap-5">
              <span className="text-sm text-gray-500">Cantidad de posts :</span>
              <p className="font-semibold">{userInfo.posts.length}</p>
            </div>
          </div>
        </div>

        <div className=" w-2/3 mx-auto hidden lg:inline-block">
          <PostForm userInfo={userInfo} />
        </div>
      </div>
    </>
  );
};
