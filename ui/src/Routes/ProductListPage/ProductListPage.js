import React, { useEffect, useState } from "react";

// components
import TextField from "@material-ui/core/TextField";
import Section from "../../components/Section";
import ProductListPageCard from "../ProductListPageCard";

// constants
import { API_URL, PRODUCT_ENDPOINT } from "../../constants/apiConstants";

// styles
import "./style.scss";

function ProductListPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const farmerId = urlParams.get("farmer");

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch(`${API_URL}${PRODUCT_ENDPOINT}?farm.id=${farmerId}`)
      .then((response) => response.json())
      .then((res) => {
        setProductList(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <Section className="product-list-page">
      <TextField
        fullWidth
        placeholder="Search for product"
        className="product-list-page__input"
      />
      {productList.map((product) => (
        <ProductListPageCard key={`product-${product.id}`} product={product} />
      ))}
    </Section>
  );
}

export default ProductListPage;
