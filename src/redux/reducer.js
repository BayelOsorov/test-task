const INIT_STATE = {
  users: null,
  usersArr: null,
};
export const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        usersArr: action.payload.items,
        users: action.payload,
      };
    case "DELETE_USER":
      return {
        ...state,
        usersArr: action.payload.users.filter(
          (user) => user.id !== action.payload.userId
        ),
      };
    default:
      return state;
  }
};
