import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/actions";

import Users from "../components/Users";

const MainPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const usersArr = useSelector((state) => state.users.usersArr);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <Users usersArr={usersArr} users={users} />;
};

export default MainPage;
