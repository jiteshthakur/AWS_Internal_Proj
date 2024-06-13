/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { ADD } from "./../redux/actions/action";
import { useNavigate } from "react-router-dom";
// src/redux/actions/action.js

// import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate = useNavigate();
  // const cartData = useSelector((state) => state.rootedReducer.cartReducer);
  // console.log("cartData :", cartData);

  const dispatch = useDispatch();

  const navigatePage = (id) => {
    navigate(`/products/${id}`);
  };
  const AddToCart = (x) => {
    // props.addCart(x);
    // console.log("x", x);
    dispatch(ADD(x));
  };

  return (
    <div className="box-border top-10 inset-y-8  w-1/4 h-1/4 items-center ">
      <div className="relative p-4 m-4 bg-white rounded-lg shadow-lg">
        <img
          className="rounded-lg p-2 h-64 w-64 bg-center"
          src={props.product.image}
          alt={props.product.name}
        />
        <h3 className="line-clamp-1">
          <b>{props.product.title}</b>
        </h3>
        {!props.list && (
          <>
            <p className="line-clamp-2">{props.product.description}</p>
            <p>
              <b>Price: ${props.product.price}</b>
            </p>
            <p>
              <b>Rating: {props.product.rating.rate} ★</b>
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => AddToCart(props.product)}
            >
              Add to Cart
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={navigatePage}
            >
              View details
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
