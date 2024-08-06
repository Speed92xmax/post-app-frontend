const BACKEND_URL = "http://127.0.0.1:5000";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
      login: async (e) => {
        try {
          const resp = await fetch(BACKEND_URL + "/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(e),
          });
          const data = await resp.json();
          sessionStorage.setItem("data", data.auth_token);

          return data;
        } catch (error) {
          console.log(error);
        }
      },

      register: async (new_user) => {
        try {
          const resp = await fetch(BACKEND_URL + "/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(new_user),
          });
          const data = await resp.json();
          return data;
        } catch (error) {
          console.log(`Error:`, error);
        }
      },

      getUser: async () => {
        let token = sessionStorage.getItem("data");
        try {
          const resp = await fetch(BACKEND_URL + "/user", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await resp.json();
          return data;
        } catch (error) {
          console.log(`Error:`, error);
        }
      },

      createPost: async (new_post) => {
        try {
          const resp = await fetch(BACKEND_URL + "/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("data")}`,
            },
            body: JSON.stringify(new_post),
          });
          console.log(resp);
          const data = await resp.json();

          return data;
        } catch (error) {
          console.error("Error al crear el post:", error);
        }
      },

      getPostList: async (id) => {
        try {
          const resp = await fetch(BACKEND_URL + "/posts" + `?user_id=${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("data")}`,
            },
          });
          const data = await resp.json();
          return data;
        } catch (error) {
          console.error("Error al crear el post:", error);
        }
      },

      likePost: async (postId, userId) => {
        try {
          const resp = await fetch(BACKEND_URL + `/like/${postId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionStorage.getItem("data")}`,
            },
            body: JSON.stringify({ user_id: userId }),
          });
          const data = await resp.json();
          return data;
        } catch (error) {
          console.error("Error al dar like al post:", error);
        }
      },
    },
  };
};

export default getState;
