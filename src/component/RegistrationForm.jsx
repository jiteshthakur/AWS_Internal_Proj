import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = () => {
    if (profileData.password === profileData.confirmPassword) {
      // console.log("profile :", profileData);
    }
    navigate("/dashboard");
  };

  const back = () => {
    navigate("/");
  };

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-blue-900 flex items-center justify-center">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg')",
          }}
        ></div>

        <div className="relative w-full max-w-md mx-auto bg-neutral-600 rounded-lg shadow-lg p-8 ml-40">
          <p className="text-2xl font-bold mb-4">Create New User Page </p>
          <form onSubmit={onSubmit}>
            <p className="text-left mb-2 text-lg">Name</p>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setProfileData({
                  ...profileData,
                  name: e.target.value,
                });
              }}
              className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <p className="text-left mb-2 text-lg">Email</p>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setProfileData({
                  ...profileData,
                  email: e.target.value,
                });
              }}
              className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <p className="text-left mb-2 text-lg">Password</p>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setProfileData({
                  ...profileData,
                  password: e.target.value,
                });
              }}
              className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <p className="text-left mb-2 text-lg">Confirm Password</p>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setProfileData({
                  ...profileData,
                  confirmPassword: e.target.value,
                });
              }}
              className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              type="submit"
            >
              Create New User
            </button>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={back}
            >
              Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
