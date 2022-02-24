import React from "react";

import { Spinner, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { parseDate } from "../helpers/ParseDate";
import { deleteUser } from "../redux/actions";

import "../styles/components/UsersPaginationEvents.css";
import Pagination from "./Pagination";

const Users = ({ users, usersArr }) => {
  const dispatch = useDispatch();

  const deleteUserById = (userId) => {
    dispatch(deleteUser(usersArr, userId));
  };

  return usersArr ? (
    <>
      <h2>Список пользователей</h2>
      <Table className="users-table" bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Роль</th>
            <th>Дата создания</th>
            <th>Действия</th>
          </tr>
        </thead>
        {usersArr.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{parseDate(item.ctime)}</td>
              <td
                onClick={() => deleteUserById(item.id)}
                style={{ backgroundColor: "#dc3545" }}
                className="btn btn-danger"
              >
                Удалить
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <Pagination users={users} />
    </>
  ) : (
    <Spinner className="spinner" animation="border" variant="primary" />
  );
};

export default Users;
