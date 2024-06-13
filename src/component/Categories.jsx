import { useState } from "react";
import NavBar from "./NavBar";
import Category from "./Category";
// import { getCategoryList } from "../Api/baseApi";

const Categories = () => {
  const [categoriesList] = useState([
    {
      id: 1,
      title: "Electronics",
      description: "Devices, gadgets, and accessories",
      image: "https://images.herzindagi.info/image/2020/Apr/Electronics.jpg",
    },
    {
      id: 2,
      title: "Fashion",
      description: "Clothing, footwear, and accessories",
      image:
        "https://thestrategy.ca/wp-content/uploads/2019/12/Items-of-the-Decade-954x533.jpg",
    },
    {
      id: 3,
      title: "Home & Kitchen",
      description: "Furniture, appliances, and kitchenware",
      image:
        "https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1345589509.jpg?w=876&h=493&crop=1",
    },
    {
      id: 4,
      title: "Beauty & Personal Care",
      description: "Cosmetics, skincare, and personal hygiene products",
      image:
        "https://orchidlifesciences.com/wp-content/uploads/2023/10/01-14.png",
    },
    {
      id: 5,
      title: "Sports & Outdoors",
      description: "Sporting goods, outdoor gear, and fitness equipment",
      image:
        "https://www.shift4shop.com/2015/images/sell-online/digital-downloads/sporting-goods.png",
    },
    {
      id: 6,
      title: "Books",
      description: "Books, eBooks, and audiobooks across various genres",
      image:
        "https://thumbs.dreamstime.com/z/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg?ct=jpeg",
    },
    {
      id: 7,
      title: "Toys & Games",
      description: "Toys, games, and hobbies for all ages",
      image:
        "https://m.media-amazon.com/images/I/51AjdgAdiOL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 8,
      title: "Groceries",
      description: "Food, beverages, and household essentials",
      image:
        "https://img3.exportersindia.com/product_images/bc-full/2023/9/4909789/grocery-items-1506570477-3361265.jpg",
    },
    {
      id: 9,
      title: "jewelery",
      description: "jewelery",
      image:
        "https://img2.exportersindia.com/product_images/bc-full/2022/5/3114316/artificial-necklace-set-1652340650-6335695.jpeg",
    },
  ]);

  const [cart] = useState([]);

  // useEffect(() => {
  //   apiCall();
  // }, []);

  // // eslint-disable-next-line no-unused-vars
  // const apiCall = async () => {
  //   const { status, data } = await getCategoryList();
  //   if (status === 200) {
  //     console.log("apiData ==:", data);
  //     setCategoriesList(data);
  //   }
  // };

  return (
    <div>
      <NavBar cart={cart} />
      <div className="grid grid-cols-4 gap-4 py-20 ">
        {categoriesList.map((product) => (
          <Category key={product.id} product={product} list={true} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
