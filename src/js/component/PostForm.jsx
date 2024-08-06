import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const PostForm = ({ userInfo }) => {
  const { actions } = useContext(Context);
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !message || !location || !status) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (!userInfo.id) {
      alert("Error de id");
      return;
    }

    let newPost = {
      image: image,
      message: message,
      location: location,
      status: status,
      author_id: userInfo.id,
    };

    let resp = await actions.createPost(newPost);
    console.log(resp);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Imagen
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none border-gray-500 bg-transparent text-gray-900"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Mensaje
          </label>
          <input
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none border-gray-500 bg-transparent text-gray-900"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Ubicación
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none border-gray-500 bg-transparent text-gray-900"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Estado
          </label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none border-gray-500 bg-transparent text-gray-900"
          >
            <option value="">Selecciona un estado</option>
            <option value="drafted">Borrador</option>
            <option value="deleted">Eliminado</option>
            <option value="published">Publicado</option>
          </select>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-3 hover:bg-blue-600"
      >
        Crear Post
      </button>
    </form>
  );
};
