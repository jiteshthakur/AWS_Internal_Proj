import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Product from "./Product";
import { getProductList } from "../Api/baseApi";
import { useSelector } from "react-redux";
// import Sidebar from "./SideBar";

const Dashboard = () => {
  const getData = useSelector((state) => state.rootedReducer.loginReducer);
  console.log("login details :", getData);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // useState([
  //   {
  //     id: 1,
  //     name: "Wireless Headphones",
  //     description: "High quality wireless headphones with noise cancellation.",
  //     price: 99.99,
  //     category: "Electronics",
  //     stock: 25,
  //     image:
  //       "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sony-WH-CH720N-19.jpg?v=1679485347&width=200",
  //     rating: 4.5,
  //   },
  //   {
  //     id: 2,
  //     name: "Casual T-Shirt for Men",
  //     price: 22.3,
  //     description: "Slim-fitting style, t-shoty for men",
  //     image:
  //       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     rating: 4.1,
  //   },
  //   {
  //     id: 3,
  //     name: "Mens Cotton Jacket",
  //     price: 55.99,
  //     description: "Great outerwear jackets for spring, autumn, or winter.",
  //     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     rating: 4.7,
  //   },
  //   {
  //     id: 4,
  //     name: "Mens Casual Slim Fit",
  //     price: 15.99,
  //     description: "An aweome shirt for men",
  //     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  //     rating: 2.1,
  //   },
  //   {
  //     id: 5,
  //     name: "Women's Gold & Silver Bracelet",
  //     price: 695,
  //     description: "A very cool bracelet.",
  //     image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  //     rating: 400,
  //   },
  //   {
  //     id: 6,
  //     name: "Solid Gold Petite Micropave",
  //     price: 168,
  //     description: "A very cool jewlery for women",
  //     image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  //     rating: 3.9,
  //   },
  //   {
  //     id: 7,
  //     name: "White Gold Plated Princess",
  //     price: 9.99,
  //     description: "A great diamond engagement ring for her.",
  //     image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  //     rating: 3,
  //   },
  //   {
  //     id: 8,
  //     name: "Gold-plated Earrings",
  //     price: 10.99,
  //     description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
  //     image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  //     rating: 1.9,
  //   },
  //   {
  //     id: 1,
  //     name: "Wireless Headphones",
  //     description: "High quality wireless headphones with noise cancellation.",
  //     price: 99.99,
  //     category: "Electronics",
  //     stock: 25,
  //     image:
  //       "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sony-WH-CH720N-19.jpg?v=1679485347&width=200",
  //     rating: 4.5,
  //   },
  //   {
  //     id: 2,
  //     name: "Casual T-Shirt for Men",
  //     price: 22.3,
  //     description: "Slim-fitting style, t-shoty for men",
  //     image:
  //       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     rating: 4.1,
  //   },
  //   {
  //     id: 3,
  //     name: "Mens Cotton Jacket",
  //     price: 55.99,
  //     description: "Great outerwear jackets for spring, autumn, or winter.",
  //     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     rating: 4.7,
  //   },
  //   {
  //     id: 4,
  //     name: "Mens Casual Slim Fit",
  //     price: 15.99,
  //     description: "An aweome shirt for men",
  //     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  //     rating: 2.1,
  //   },
  //   {
  //     id: 5,
  //     name: "Women's Gold & Silver Bracelet",
  //     price: 695,
  //     description: "A very cool bracelet.",
  //     image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  //     rating: 400,
  //   },
  //   {
  //     id: 6,
  //     name: "Solid Gold Petite Micropave",
  //     price: 168,
  //     description: "A very cool jewlery for women",
  //     image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  //     rating: 3.9,
  //   },
  //   {
  //     id: 7,
  //     name: "White Gold Plated Princess",
  //     price: 9.99,
  //     description: "A great diamond engagement ring for her.",
  //     image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  //     rating: 3,
  //   },
  //   {
  //     id: 8,
  //     name: "Gold-plated Earrings",
  //     price: 10.99,
  //     description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
  //     image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  //     rating: 1.9,
  //   },
  // ]);

  useEffect(() => {
    apiCall();
  }, []);

  const addCart = (x) => {
    // console.log("x :", x);
    // setCart({ ...cart, x });
    // const arr = { ...x };
    // arr.push(x);
    setCart((prevCart) => [...prevCart, x]);
  };

  // eslint-disable-next-line no-unused-vars
  const apiCall = async () => {
    const { status, data } = await getProductList();
    if (status === 200) {
      // console.log("apiData ==:", data);
      setProducts(data);
    }
  };
  // console.log("cart :", cart);
  return (
    <div className="">
      {/* <div className="fixed w-full z-50"> */}
      <NavBar cart={cart} />
      {/* </div> */}
      <div className="flex flex-row flex-wrap flex-initial py-20 px-20 justify-start">
        {products.length === 0 && <div className="h-screen"></div>}
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addCart={(x) => addCart(x)}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
