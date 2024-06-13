import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`relative inset-y-0 left-0 h-full max-h-80  w-64 bg-gray-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-50"
        } md:translate-x-0`}
      >
        <nav className="mt-10">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-gray-700 flex items-center"
          >
            Home
          </Link>
          {/* <Link
            to="/products"
            className="block px-4 py-2 hover:bg-gray-700 flex items-center"
          >
            Products
          </Link> */}
          <Link
            to="/categories"
            className="block px-4 py-2 hover:bg-gray-700 flex items-center"
          >
            Categories
          </Link>
          <Link
            to="/cart"
            className="block px-4 py-2 hover:bg-gray-700 flex items-center"
          >
            Cart
          </Link>
          <Link
            to="/profile"
            className="block px-4 py-2 hover:bg-gray-700 flex items-center"
          >
            Account
          </Link>
          <Link
            to="/integration"
            className="block px-4 py-2 hover:bg-gray-700 flex items-center"
          >
            Integration
          </Link>
          <Link
            to="/warehouses"
            className="block px-4 py-2 hover:bg-gray-700 flex items-center"
          >
            Warehouses
          </Link>
        </nav>
      </div>
      <div className="flex-1">
        <div className="p-4">
          <button
            className="md:hidden text-white bg-gray-800 p-2 rounded"
            onClick={toggleSidebar}
          >
            Toggle Sidebar
          </button>
          {/* Content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
