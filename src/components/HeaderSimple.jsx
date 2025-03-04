import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../style/HeaderSimple.css";
import cart from "../images/cart.png";
import arrow from "../images/arrow.png";

export default class HeaderSimple extends Component {
  render() {
    return (
      <header className="secondHeader">
        <Link to="/" id="backBtn">
        <button className="headerBtn firstHeaderBtn">
          <img src={arrow} alt="back-btn" className="homeIcon"/>
        </button>
        </Link>
        <h1 id="secondTitle">fake•store</h1>
        <Link to="/cartShop" id="shopping-cart-link">
          <button type="button" name="btn-ShopCart" className="headerBtn secondHeaderBtn">
            <img src={cart} alt="cart" className="simpleHeaderIcon" />
          </button>
        </Link>
      </header>
    );
  }
}
