import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Sale from "./pages/sale/Sale";
import { useDispatch } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import { getAllSales } from "./actions/sale.action";
import Inventory from "./pages/inventory/Inventory";
import ToasterComponent from "./components/Toaster";

import { getAllInventories } from "./services/inventory.service";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSales());
    getAllInventories(dispatch);
  }, []);

  return (
    <>
      <ToasterComponent />

      <Navbar />

      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
