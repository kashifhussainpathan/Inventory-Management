import React from "react";
import { salesState } from "../../actions/sale.action";

const SalesReport = () => {
  const sales = salesState("sales");

  const totalRevenue = sales?.reduce((acc, { amount }) => acc + amount, 0);

  return (
    <div>
      <table>
        <thead className="heading-row">
          <tr>
            <th>Description</th>
            <th>Amount </th>
          </tr>
        </thead>
        <tbody>
          {sales?.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{item.description}</td>
                <td>{item.amount}</td>
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

export default SalesReport;
