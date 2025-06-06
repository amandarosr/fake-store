import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import Header from "../components/Header";
import Card from "../components/Card";
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from "../services/api";

export default class Home extends Component {
  state = {
    categoryList: [],
    inputValue: "",
    results: [],
    noResults: false,
  };

  componentDidMount() {
    this.fetchCategoryList();
    this.showAllProducts();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  fetchCategoryList = async () => {
    this.setState({ loading: true });
    const categories = await getCategories();
    this.setState({ categoryList: categories });
  };

  showAllProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    this.setState({
      results: data,
      noResults: false,
      openNav: false,
    });
    if (data.length === 0) {
      this.setState({
        noResults: true,
      });
    }
  }

  clickCategoryForProducts = async (categoryId) => {
    const products = await getProductsFromCategoryAndQuery(categoryId);
    this.setState({
      results: products.results,
      noResults: false,
      openNav: false,
    });
    if (products.results.length === 0) {
      this.setState({
        noResults: true,
      });
    }
  };

  render() {
    const { categoryList, inputValue, results, noResults, openNav } =
      this.state;
    return (
      <div className="fullpage">
        <Header
          clickForProducts={this.clickForProducts}
          inputValue={inputValue}
          onInputChange={this.handleChange}
        />
        <div className="secondTitle">
          <h1>Garanta o seu!</h1>
        </div>
        <div className="landingImg"/>
        <main>
          <div>hi</div>
          <div id="card-container" className="cards">
            {noResults && <h3>Nenhum produto foi encontrado</h3>}
            {results &&
              results.map((result) => (
                <Link
                  to={`product/${result.id}`}
                  key={result.id}
                  data-testid="product-detail-link"
                  className="cardLink"
                >
                  <Card
                    name={result.title}
                    img={result.image}
                    price={result.price}
                  />
                </Link>
              ))}
          </div>
        </main>
        <footer>
          <p>© 2024 fake•store. All Rights Reserved</p>
        </footer>
      </div>
    );
  }
}
