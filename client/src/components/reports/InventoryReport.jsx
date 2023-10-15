import React from "react";
import { inventoryState } from "../../actions/inventory.action";

const InventoryReport = () => {
  const inventories = inventoryState("inventories");

  const totalRevenue = inventories?.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  );

  return (
    <div>
      <table>
        <thead className="heading-row">
          <tr>
            <th>Name</th>
            <th>Quantity </th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {inventories?.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <h3>Total Revenue : ₹{totalRevenue}</h3>
      </div>
    </div>
  );
};

export default InventoryReport;
