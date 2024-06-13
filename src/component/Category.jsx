import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Category({ product }) {
  const navigate = useNavigate();
  const navigateProductPage = (name) => {
    // console.log("name :", name);
    navigate(`/products/${name}`);
  };

  return (
    <div>
      <div
        className="product-card bg-white rounded-lg shadow-md p-4 m-4"
        onClick={() => navigateProductPage(product.title)}
      >
        <img
          className="w-full h-64 object-cover rounded-t-lg"
          src={product.image}
          alt={product.title}
        />
        <div className="p-2">
          <h3 className="text-lg text-center font-semibold ">
            {product.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Category;
