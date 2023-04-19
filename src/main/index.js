/* eslint-disable */
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://b09b40f8-6e33-49ab-8e47-7524eb07ba69.mock.pstmn.io/products"
      )
      .then(function (res) {
        const _products = res.data.products;
        setProducts(_products);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map((product, i) => {
          return (
            <Link
              className="product-link"
              to={`/products/${product.id}`}
              key={i}
            >
              <div className="product-card">
                <div>
                  <img
                    className="product-img"
                    //src="/images/products/keyboard1.jpg"
                    src={product.imageUrl}
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
