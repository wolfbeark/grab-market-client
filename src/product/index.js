import axios from "axios";
import "./index.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://b09b40f8-6e33-49ab-8e47-7524eb07ba69.mock.pstmn.io/products/${id}`
      )
      .then(function (res) {
        console.log(res);
        setProduct(res.data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받는 중...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2020년 12월 8일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
