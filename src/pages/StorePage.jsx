import React from "react";

import "../styles/pages/Store.css";
import Iphone from "../assets/iphone.png";

const StorePage = () => {
  return (
    <div className="product-card">
      <div className="badge">Быстрый просмотр</div>
      <div className="sale-badge">-14%</div>

      <div className="product-tumb">
        <img src={Iphone} alt="" />
      </div>
      <div className="product-details">
        <div className="product-category">
          <span>86 956 ₽</span>
          <span className="product-category-through">99 990 ₽</span>
        </div>

        <span className="product-category-price">85 251 ₽</span>
        <p className="description-tags">
          Смартфон iPhone 12 pro / 5.8'' / 2436x1125 / OLED / 64 ГБ / iPhone
        </p>
        <div>
          <i className="fa fa-star fa-2 checked" aria-hidden="true"></i>{" "}
          <i className="fa fa-star fa-2 checked" aria-hidden="true"></i>{" "}
          <i className="fa fa-star fa-2 checked" aria-hidden="true"></i>{" "}
          <i className="fa fa-star fa-2 checked" aria-hidden="true"></i>{" "}
          <i className="fa fa-star fa-2 checked" aria-hidden="true"></i>
          <span className="rates">87</span>
        </div>
        <div className="installment">
          <span>РАССРОЧКА 0-0-6</span>
        </div>
        <button className="to-cart-btn">В корзину</button>
        <img
          src="data:image/svg+xml,%3Csvg%20width%3D%2221%22%20height%3D%2219%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.5%2018C5.56%2013.75%201%209.592%201%206.082%201%203.216%203.28%201%206.225%201c1.615%200%203.23.74%204.275%201.94C11.545%201.74%2013.16%201%2014.775%201%2017.72%201%2020%203.217%2020%206.082c0%203.51-4.56%207.668-9.5%2011.918z%22%20stroke%3D%22%23CB11AB%22%20stroke-width%3D%222%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E"
          alt=""
        />
      </div>
    </div>
  );
};

export default StorePage;
