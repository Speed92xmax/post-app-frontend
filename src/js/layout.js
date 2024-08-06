import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import Login from "./views/Login.jsx";
import { Register } from "./views/Register.jsx";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Register />} path="/register" />
          <Route element={<Navbar />} path="/home">
            <Route element={<Home />} path="" />
            <Route element={<h1>Not found Professional!</h1>} path="*" />
          </Route>
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
