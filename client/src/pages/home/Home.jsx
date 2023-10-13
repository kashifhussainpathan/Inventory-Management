import React from "react";
import { inventoryState } from "../../actions/inventory.action";

const Home = () => {
  const inventories = inventoryState("inventories");

  return (
    <div>
      {inventories.map(({ _id, name, price, quantity }) => (
        <div key={_id}>
          <h4>Name: {name}</h4>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
