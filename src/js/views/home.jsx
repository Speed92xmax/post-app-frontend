import React from "react";
import { Posts } from "../component/Posts.jsx";
import { User } from "../component/User.jsx";

export const Home = () => {
  return (
    <>
      <div className="container p-8 gap-3 md:p-0 flex flex-col md:flex-row md:gap-3 mx-auto h-[80dvh]">
        <div className=" w-full h-fit md:h-full md:w-1/3">
          <User />
        </div>
        <div className="h-full w-full md:w-2/3 overflow-auto rounded-lg">
          <Posts />
        </div>
      </div>
    </>
  );
};
