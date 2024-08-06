import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Posts = () => {
  const { actions } = useContext(Context);
  const [postList, setPostList] = useState([]);
  const [userInfo, setUserInfo] = useState();

  const setUser = async () => {
    const response = await actions.getUser();
    if (response.ok) {
      setUserInfo(response.user);
    } else {
      console.log(response);
    }
  };

  useEffect(() => {
    setUser();
  }, []);

  useEffect(() => {
    if (userInfo) {
      const handlePostList = async () => {
        const resp = await actions.getPostList(userInfo.id);

        setPostList(resp);
      };
      handlePostList();
    }
  }, [userInfo]);

  const handleLike = async (post_id) => {
    if (userInfo) {
      const resp = await actions.likePost(post_id, userInfo.id);
      if (resp.message === "Post liked") {
        const updatedPosts = postList.map((post) =>
          post.id === post_id
            ? { ...post, likes: [...post.likes, userInfo.id] }
            : post
        );
        setPostList(updatedPosts);
      } else {
        console.log(resp.message);
      }
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {postList.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-4 border rounded-lg p-4 bg-white shadow-md"
          >
            <div className="w-full h-[250px] overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">{post.message}</p>
              <p className="text-sm text-gray-500">{post.location}</p>
              <p className="text-sm text-gray-500">
                Likes: {post.likes.length}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(post.created_at).toLocaleDateString()}
              </p>

              <div className="flex justify-between items-center w-full">
                {post.status === "published" && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full w-fit">
                    Publicado
                  </span>
                )}
                {post.status === "drafted" && (
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full w-fit">
                    Borrador
                  </span>
                )}
                {post.status === "deleted" && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full w-fit">
                    Eliminado
                  </span>
                )}

                <button
                  onClick={() => handleLike(post.id)}
                  className="bg-red-300 text-white text-xs px-5 py-1 rounded-full w-fit mt-2 hover:bg-red-500"
                >
                  Like
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
