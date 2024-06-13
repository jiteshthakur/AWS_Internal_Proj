import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DELETE, UPDATE_CART_QUANTITY } from "../redux/actions/action";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const getData = useSelector((state) => state.rootedReducer.cartReducer);
  const login = useSelector((state) => state.rootedReducer.loginReducer);

  console.log("login :", login);
  // getData.carts
  const [cartList, setCartList] = useState(getData.carts);
  // const [cart] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!login.login) {
      navigate("/login");
    }
  }, [login]);

  useEffect(() => {
    setCartList([...getData.carts]);
  }, [getData]);

  // eslint-disable-next-line no-unused-vars
  // const apiCall = () => {
  //   setCartList([]);
  // };

  const udateCartQuantity = (x) => {
    x.quantity = x.quantity - 1;
    dispatch(UPDATE_CART_QUANTITY(x));
  };

  const removeToCart = (x) => {
    // console.log("x", x);
    x.quantity = x.quantity - 1;
    dispatch(DELETE(x));
  };

  const addToCart = (x) => {
    // props.addCart(x);
    // console.log("x", x);
    dispatch(ADD(x));
  };

  return (
    <div className="">
      <NavBar />
      {/* <div className="relative  m-4 bg-white rounded-lg shadow-lg"> */}
      <div className="flex flex-row flex-wrap flex-initial py-20 px-20 justify-start">
        {cartList.length !== 0 ? (
          cartList.map((item) => (
            <Cart
              key={item.id}
              item={item}
              addCart={(x) => addToCart(x)}
              removeCart={(x) => removeToCart(x)}
              udateCartQuantity={(x) => udateCartQuantity(x)}
            />
          ))
        ) : (
          <div className="h-screen">
            <div className="box-border relative centre top-10 inset-y-10 h-64 w-64 items-center ">
              <div className="relative p-8 m-4 bg-white rounded-lg shadow-lg">
                {" "}
                <h1>No Item In the cart</h1>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default CartList;
