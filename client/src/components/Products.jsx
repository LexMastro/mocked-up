import { useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
// import axios from "axios";
import { QUERY_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { idbPromise } from "../utils/helpers";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../utils/actions";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = (props) => {
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!props.cat) {
      return state.products;
    }

    // filter by cat, color

    const targetFilterColor = props.filters.color; // string

    // filter all the products that contain the targetFilterCOlor

    // sort
    let results = state.products.filter((product) => {
      const sameCategory = product.category.name === props.cat;
      console.log({ targetFilterColor });
      const sameColor = product.color.includes(targetFilterColor);

      console.log("hello wrld");
      console.log(product);
      console.log({ sameCategory });
      console.log({ sameColor });
      return sameCategory && sameColor;
    });

    // sort

    // check whick mode

    // 'newest', 'asc', 'desc', undefined

    if (props.sort === "newest") {
      results = state.products.sort((a, b) => a.createdAt - b.createdAt);
    } else if (props.sort === "asc") {
      results = state.products.sort((a, b) => a.price - b.price);
    } else {
      results = state.products.sort((a, b) => b.price - a.price);
    }
    return results;
  }

  return (
    <Container className="my-2">
      <>
        {filterProducts()
          .slice(0, 10)
          .map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </>
    </Container>
  );
};

export default Products;
