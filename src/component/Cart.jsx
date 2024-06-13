/* eslint-disable react/prop-types */

import { MdDelete } from "react-icons/md";

const Cart = (props) => {
  return (
    <>
      {props.item.quantity > 0 && (
        <div className="box-border top-10 inset-y-8 w-1/4 h-1/4 items-center ">
          <div className="relative p-4 m-4 bg-white rounded-lg shadow-lg">
            <img
              className="rounded-lg bg-center p-4 h-64 w-64"
              src={props.item.image}
              alt={props.item.name}
            />
            <h3 className="line-clamp-1">
              <b>{props.item.title}</b>
            </h3>
            <p className="line-clamp-2">{props.item.description}</p>
            <p>
              <b>Price: ${props.item.price}</b>
            </p>
            <p>
              <b>Rating: {props.item.rating.rate} ★</b>
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => props.addCart(props.item)}
            >
              +
            </button>
            {props.item.quantity > 0 ? props.item.quantity : ""}
            {props.item.quantity > 0 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => props.udateCartQuantity(props.item)}
              >
                -
              </button>
            )}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 m-6 h-8 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => props.removeCart(props.item)}
            >
              <div className="h-4">
                <MdDelete />
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
