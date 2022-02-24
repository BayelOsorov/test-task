import axios from "axios";
const USER_API = "https://test.relabs.ru/api/users/list";
export const getUsers = (page = "1") => {
  return async (dispatch) => {
    try {
      let limit = 5;
      const offset = page * limit - limit;
      const { data } = await axios(`${USER_API}?page=${page}&offset=${offset}`);
      dispatch({
        type: "GET_USERS",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
export const deleteUser = (users, userId) => {
  return {
    type: "DELETE_USER",
    payload: {
      users,
      userId,
    },
  };
};
