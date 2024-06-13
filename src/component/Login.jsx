// import CryptoJS from 'crypto-js';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { globalObject } from "../constant/constant";
import { LOGIN } from "../redux/actions/action";
import { useDispatch } from "react-redux";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const encodePass = (password) => {
  //   // const secretKey = password;

  //   const encode = atob(password);
  //   // alert("decode :", decode);
  //   console.log("decode :", encode);
  //   return encode;
  // };

  const onSubmit = () => {
    // console.log("login Data :", loginData);
    // const decode = atob(loginData.password);
    // console.log("loginData.password", loginData.password, "decode :", decode);
    // // alert("decode :", decode);
    // const encodePassword = encodePass(loginData.password);
    // const data = {
    //   email: loginData.email,
    //   password: encodePassword,
    // };
    // const user = Login(data);
    // console.log("decode Password :", encodePassword);
    const user = globalObject;
    console.log("user :", user);
    if (user.token) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("userDetails", JSON.stringify(user));
      navigate("/");
      dispatch(LOGIN(user));
    }
    // alert("login :", user, globalObject);
  };

  const navigatePage = () => {
    console.log("navigate");
    navigate("/registrationForm");
  };
  const navigateToDashboard = () => {
    console.log("navigate");
    navigate("/");
  };

  // const responseGoogle = (response) => {
  //   console.log(response);
  //   // Handle the response from Google here
  //   // You can send the token to your backend server for verification and user creation
  // };

  return (
    <>
      <div>
        <NavBar />

        <div className="min-h-screen bg-rose-300 flex items-center justify-center">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-zinc-400"
            style={{
              backgroundImage:
                "url('https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg')",
            }}
          ></div>
          <div className="relative w-full max-w-md mx-auto bg-neutral-600 rounded-lg shadow-lg p-8 ml-40">
            <div className="text-center">
              <h2 className="text-2xl text-white font-bold mb-4">
                Sign in with
              </h2>
              <div className="flex justify-center space-x-4 mb-6">
                <button className="bg-gray-200 p-2 rounded-lg flex items-center">
                  <img
                    src="https://img.icons8.com/ios-filled/24/000000/github.png"
                    alt="GitHub"
                  />
                  <span className="ml-2">GitHub</span>
                </button>
                <button className="bg-gray-200 p-2 rounded-lg flex items-center">
                  <img
                    src="https://img.icons8.com/color/24/000000/google-logo.png"
                    alt="Google"
                  />
                  <span className="ml-2">Google</span>
                  {/* <GoogleLogin
                    clientId="YOUR_GOOGLE_CLIENT_ID"
                    buttonText="Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="bg-gray-200 p-2 rounded-lg flex items-center"
                      >
                        <img
                          src="https://img.icons8.com/color/24/000000/google-logo.png"
                          alt="Google"
                        />
                        <span className="ml-2">Google</span>
                      </button>
                    )}
                  /> */}
                </button>
              </div>
              <div className="text-white mb-4">Or sign in with credentials</div>
            </div>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label
                  className="block text-white font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setLoginData({
                      ...loginData,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setLoginData({
                      ...loginData,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label className="text-sm text-white" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <a
                  className="inline-block align-baseline font-bold text-sm text-white hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={navigatePage}
                >
                  Register User
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={navigateToDashboard}
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
