/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../redux/actions/action";

const NavBar = () => {
  const getData = useSelector((state) => state.rootedReducer.cartReducer);
  const loginData = useSelector((state) => state.rootedReducer.loginReducer);

  const login = localStorage.getItem("token");
  const dispatch = useDispatch();

  // console.log("getData :", getData);
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const menubar = () => {
    setMenu(!menu);
  };

  const Login = () => {
    navigate("/login");
  };

  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("userDetails", "");
    navigate("/");
    dispatch(LOGOUT(loginData));
  };

  return (
    <>
      <div className="fixed container-2xl bg-gray-800 w-full z-50">
        <nav className="bg-gray-800 p-4">
          <div className="container-2xl flex justify-between items-center z-50">
            <div className="absolute left-2 top-2 h-16 w-4">
              {/* Mobile menu button */}
              <button
                className="text-white focus:outline-none  "
                onClick={menubar}
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div className="text-white text-2xl font-bold p-1 ml-10">
              E-Shop
            </div>
            <ul className="hidden md:flex space-x-8 text-white">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              {/* <li>
              <Link to="/products" className="hover:text-gray-400">
                Products
              </Link>
            </li> */}
              <li>
                <Link to="/categories" className="hover:text-gray-400">
                  Categories
                </Link>
              </li>
              {/* <li>
              <Link
                to="/cart"
                className="hover:text-gray-400 flex items-center"
              >
                Cart
              </Link>
            </li> */}
              <li>
                <Link
                  to="/profile"
                  className="hover:text-gray-400 flex items-center"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  to="/integration"
                  className="hover:text-gray-400 flex items-center"
                >
                  Integration
                </Link>
              </li>
              <li>
                <Link
                  to="/warehouses"
                  className="hover:text-gray-400 flex items-center"
                >
                  Warehouses
                </Link>
              </li>
            </ul>
            <div className=" md-2 md:flex items-center">
              <input
                type="text"
                placeholder="Search products..."
                className="p-2 rounded-l bg-gray-700 text-white placeholder-gray-400"
              />
              <button className="p-2 py-2 ms-px bg-blue-600 text-white rounded-r hover:bg-blue-500">
                Search
              </button>
            </div>
            <div className=" rounded-l md-2 md:flex items-center">
              <button className="p-2">
                <Link
                  to="/cart"
                  className="rounded-full h-3 w-14 md-2 md:flex items-center"
                >
                  <img
                    src="https://previews.123rf.com/images/jongjet303/jongjet3031703/jongjet303170300106/73563713-outline-cart-icon-icon-for-website-design-logo.jpg"
                    alt="AddToCart"
                    className="rounded-full bg-center"
                  />
                  {/* {console.log("cart :", props.cart)} */}
                  <h1 className="relative mt-4 ms-2 bottom-4 right-10 items-center bg-black-300 h-10 w-10 rounded-full text-rose-500 text-xl font-bold z-50">
                    {getData.carts.length > 0 ? getData.carts.length : ""}
                  </h1>
                </Link>
              </button>
              {!login ? (
                <button
                  className="p-2 px-6 w-50 bg-blue-600 text-white rounded-r hover:bg-blue-500"
                  onClick={Login}
                >
                  login
                </button>
              ) : (
                <button
                  className="p-2 px-6 w-50 bg-blue-600 text-white rounded-r hover:bg-blue-500"
                  onClick={logout}
                >
                  logout
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
      <div className="fixed container px-0 top-16 bg-gray-800 w-64 h-120 z-50">
        {menu && <SideBar />}
      </div>
    </>
  );
};

export default NavBar;
