import React from "react";

import { useDispatch } from "react-redux";
import { getUsers } from "../redux/actions";

const Pagination = ({ users }) => {
  const dispatch = useDispatch();
  const pageNumbers = [];

  const handlePage = (page) => {
    dispatch(getUsers(page.toString()));
  };

  for (let i = 1; i <= Math.ceil(users?.total / 5); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={page === users?.page ? "cur-page-btn" : ""}
              onClick={() => handlePage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
