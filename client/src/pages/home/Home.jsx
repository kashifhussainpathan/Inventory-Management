import React from "react";
import { inventoryState } from "../../actions/inventory.action";

const Home = () => {
  const inventories = inventoryState("inventories");

  return (
    <div className="home">
      <h1>Inventory Management</h1>
    </div>
  );
};

export default Home;
