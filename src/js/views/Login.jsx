import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

const Login = () => {
  const navigate = useNavigate();
  const { actions } = useContext(Context);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName === "" || password === "") {
      alert("los campos no pueden estar vacios");
      return;
    }
    let user = {
      username: userName,
      password: password,
    };
    console.log(user);
    let response = await actions.login(user);
    console.log(response);
    if (response.ok) {
      navigate("/home");
    } else {
      alert(response.error);
      return;
    }
  };

  return (
    <>
      <div className="w-[100dvw] min-h-[100dvh] flex flex-col items-center justify-center  bg-gray-800  ">
        <div className="relative py-3 sm:max-w-xs sm:mx-auto grow flex justify-center items-center">
          <div className="min-h-96 px-8 py-6 mt-4 text-left  bg-gray-900  rounded-xl shadow-lg">
            <div className="flex flex-col justify-center items-center h-full select-none">
              <p className="m-0 text-lg mt-3 font-semibold text-white text-center mb-8">
                Inicia sesión con tu usuario y contraseña
              </p>
            </div>

            <form className="flex flex-col justify-between" method="POST">
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="username"
                  className="font-semibold text-xs text-gray-400 "
                >
                  Username
                </label>
                <input
                  name="username"
                  className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none border-gray-500 bg-gray-900 text-white"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="font-semibold text-xs text-gray-400 "
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none border-gray-500 bg-gray-900 text-white"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>

            <Link to="/register" className="flex justify-center">
              <p className=" cursor-pointer hover:text-blue-300 text-xs text-gray-500 w-fit hover:font-bold">
                Registra una cuenta
              </p>
            </Link>

            <div className="mt-5">
              <button
                onClick={handleSubmit}
                type="submit"
                className="py-2 px-8 bg-blue-500 hover:bg-blue-800  text-white w-full transition ease-in duration-200 text-center text-base  shadow-md  rounded-lg cursor-pointer "
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
