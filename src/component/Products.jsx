/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Product from "./Product";
import { useParams } from "react-router-dom";
import {
  getCategoryList,
  getProductList,
  getProductListId,
} from "../Api/baseApi";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const { id } = useParams();
  const [cart] = useState([]);

  useEffect(() => {
    apiCall(id);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const apiCall = async (id) => {
    const { status, data } = await getProductList();
    if (status === 200) {
      // console.log("apiData ==:", data);

      setProductList(data);
    }
  };

  // console.log("product :", id, "product :");

  return (
    <div className="h-64">
      <NavBar cart={cart} />
      {productList.map((product) => (
        <Product key={product.id} product={productList} list={true} />
      ))}
    </div>
  );
};

export default Products;
