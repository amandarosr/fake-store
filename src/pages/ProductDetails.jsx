import { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { getProductById } from "../services/api";
import Header from "../components/Header";
import Reviews from "../components/Reviews";
import "../style/ProductDetails.css";

export default class ProductDetails extends Component {
  state = {
    productData: {},
  };

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match } = this.props;
    const {
      params: { id },
    } = match;
    const productData = await getProductById(id);
    this.setState({ productData });
  };

  sendDetailsToStorage = () => {
    const {
      productData: { title, price, image, description },
    } = this.state;
    if (!localStorage.cart) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const productDetails = { title, price, image, description };
    const cartArray = JSON.parse(localStorage.getItem('cart'));
    const newCart = [...cartArray, productDetails];
    localStorage.setItem("cart", JSON.stringify(newCart));
    
  };

  render() {
    const { productData } = this.state;
    const { title, price, image, description } = productData;

    return (
      <>
        <Header />
        <main className="productDetailMain">
          <div className="contentCase">
            <img
              src={image}
              alt={title}
              data-testid="product-detail-image"
              id="productDetailImage"
            />
            <div className="productDetailSpecs">
              <h3 id="product-detail-name">{title}</h3>
              <div className="description-div">
                <p>{description}</p>
              </div>
              <div className="price-cart-div">
                <div className="product-detail-price">
                  <p className="price-symbol">R$</p>
                  <p>{price}</p>
                </div>
                <button
                  className="addToCartBtn btn"
                  onClick={this.sendDetailsToStorage}
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
          <Reviews data={productData} />
        </main>
        <footer>
          <p>© 2024 fake•store. All Rights Reserved</p>
        </footer>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
