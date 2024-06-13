import { useState } from "react";
import NavBar from "./NavBar";

const Account = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart] = useState([]);

  return (
    <div className="h-screen">
      <NavBar cart={cart} />
      <div className="absolute top-32 py-20 bg-white left-5 w-full max-w-md mx-auto  rounded-lg shadow-lg p-8">
        <h1>
          <h2>
            <b>Account Information</b>
          </h2>
        </h1>
        <br />
        <h3>
          <p>Username: </p>
        </h3>
        <br />
        <h3>
          <p>Account Created: </p>
        </h3>
        <br />
        <h3>
          <p>Last Login: </p>
        </h3>
        <br />
        <h1>
          <b>Personal Information</b>
        </h1>
        <br />
        <h3>
          <label>Full Name:</label>
        </h3>
        <br />
        <h3>
          <label>Email Address:</label>
        </h3>
        <br />
        <h3>
          <label>Phone Number:</label>
        </h3>
        <br />
        <h3>
          <label>Date of Birth:</label>
        </h3>
      </div>
    </div>
  );
};

export default Account;
