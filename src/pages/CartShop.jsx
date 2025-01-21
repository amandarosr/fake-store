import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import "../style/CartShop.css";

export default class CartShop extends Component {
  state = {
    cartItems: [],
  };

  componentDidMount() {
    this.getCartListFromStorage();
  }

  getCartListFromStorage = () => {
    const cartList = JSON.parse(localStorage.getItem("cart"));
    this.setState({ cartItems: cartList });
  };

  clearCart = () => {
    if (localStorage.cart.length > 2) {
      localStorage.setItem("cart", JSON.stringify([]));
      this.setState({ cartItems: [] });
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Compra finalizada!",
        showConfirmButton: false,
        timer: 1500,
        width: '20rem',
      });
    } else {
      Swal.fire({
        position: "top",
        icon: "warning",
        text: "Adicione um produto ao carrinho!",
        showConfirmButton: true,
        width: '25rem',
      });
    }
  };
  render() {
    const { cartItems } = this.state;
    return (
      <div className="cart-container">
        <div className="title-div">
          <h2 className="title cartTitle">fake•store</h2>
          <h3 className="title cartTitle2">Carrinho</h3>
        </div>
        <div className="cart-main">
          <div className="cartList">
            {cartItems.length ? (
              cartItems.map((item, index) => (
                <div key={index + 1} className="cartItem">
                  <div className="itemLeft">
                    <img src={item.thumbnail} alt="pic" />
                    <p>{item.title}</p>
                  </div>
                  <div className="itemPriceDiv">
                    <p className="itemSymbol">R$</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <h3 className="empty-message">Seu carrinho está vazio</h3>
            )}
          </div>
          <div className="checkoutBtns">
            <Link to="/">
              <button>Continuar comprando</button>
            </Link>
            <button onClick={this.clearCart}>Finalizar compra</button>
          </div>
        </div>
      </div>
    );
  }
}
