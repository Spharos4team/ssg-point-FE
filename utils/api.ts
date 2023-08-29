export const userApi = {
  getUserData: async () => {
    const res = await fetch(
      `http://localhost:3030/users/${localStorage.getItem("userId")}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  },
};
