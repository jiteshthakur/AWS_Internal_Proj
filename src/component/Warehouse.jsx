import { useState } from "react";
import NavBar from "./NavBar";

function Warehouse() {
  const [cart] = useState([]);
  return (
    <div className="h-screen">
      <NavBar cart={cart} />
      <div className="py-20">
        WareHouse Page
        <h1>
          <b>The best is yet to come.......</b>
        </h1>
      </div>
    </div>
  );
}

export default Warehouse;
