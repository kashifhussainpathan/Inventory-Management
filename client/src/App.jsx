import { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Sale from "./pages/sale/Sale";
import Login from "./components/Login";
import Singup from "./components/Signup";
import { useDispatch } from "react-redux";
import { userState } from "./actions/user.action";
import { fetchUser } from "./services/user.service";
import { getAllSales } from "./actions/Sale.action";
import Inventory from "./pages/inventory/Inventory";
import ToasterComponent from "./components/Toaster";
import { isLoggedIn, token } from "./utils/app.utils";
import { getAllInventories } from "./services/inventory.service";

function App() {
  const user = userState("user");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      fetchUser(token, dispatch);
    }
  }, []);

  useEffect(() => {
    if (user._id) {
      dispatch(getAllSales(user._id));
      getAllInventories(user._id, dispatch);
    }
  }, [user]);

  return (
    <>
      <ToasterComponent />

      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/sale">Sale</NavLink>
      <NavLink to="/inventory">Inventory</NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inventory" element={<Inventory />} />
        {!isLoggedIn && <Route path="/signup" element={<Singup />} />}
      </Routes>
    </>
  );
}

export default App;
