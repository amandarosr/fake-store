import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../style/Header.css";
import cart from "../images/cart.png";
import search from "../images/search.png";
import menu from "../images/menu.png";

export default class Header extends Component {
  render() {
    const { clickForProducts, inputValue, onInputChange, 
      clickToOpenNav } = this.props;

    return (
      <header>
        <div className="left-head">
          <button id="menuBtn" onClick={clickToOpenNav}>
            <img src={menu} alt="menu" id="menuIcon"/>
          </button>
          <h1 className="title">fake•store</h1>
        </div>
        <div id="searchDiv">
          <input
            type="text"
            id="searchArea"
            data-testid="query-input"
            name="inputValue"
            value={inputValue}
            onChange={onInputChange}
          />
          <div className="iconCase">
            <button
              type="button"
              id="queryBtn"
              className="headBtn"
              data-testid="query-button"
              onClick={clickForProducts}
            >
              <img src={search} alt="search" className="headerIcon" />
            </button>
            <Link to="/cartShop" data-testid="shopping-cart-button">
              <button
                type="button"
                name="btn-ShopCart"
                id="cartBtn"
                className="headBtn"
              >
                <img src={cart} alt="cart" className="headerIcon" />
              </button>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  clickForProducts: PropTypes.func,
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;
