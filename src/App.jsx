import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import RegistrationForm from "./component/RegistrationForm";
import Login from "./component/Login";
import RegistrationForm from "./component/RegistrationForm";
import Dashboard from "./component/Dashboard";
import Categories from "./component/Categories";
import Cart from "./component/CartList";
import Account from "./component/Account";
import Warehouse from "./component/Warehouse";
import Integration from "./component/Integration";
import { useSelector } from "react-redux";
import ProductDetails from "./component/ProductDetails";
// import Sidebar from "./component/SideBar";

function App() {
  const login = localStorage.getItem("token");
  useSelector((state) => state.rootedReducer.loginReducer);
  console.log("login :", login);
  return (
    <>
      <div className="w-full max-h-fit bg-slate-400">
        {/* <Sidebar /> */}
        <Router>
          <Routes>
            {/* {login ? ( */}
            <>
              <Route exact path="/cart" Component={Cart} />
              <Route exact path="/profile" Component={Account} />
            </>
            {/* ) : ( */}
            <Route exact path="*" render={() => <Login />} Component={Login} />
            {/* )} */}
            <Route exact path="/" Component={Dashboard} />
            <Route path="/products/:id" Component={ProductDetails} />
            <Route exact path="/categories" Component={Categories} />
            <Route exact path="/warehouses" Component={Warehouse} />
            <Route exact path="/integration" Component={Integration} />
            <Route
              exact
              path="/registrationForm"
              render={() => <Login />}
              Component={RegistrationForm}
            />
            <Route
              exact
              path="/login"
              render={() => <Login />}
              Component={Login}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
