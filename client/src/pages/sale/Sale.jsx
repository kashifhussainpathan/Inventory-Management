import "./sale.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  handleEditSaleItem,
  handleShowSaleForm,
  handleCloseSaleModal,
  handleDeleteSaleItem,
  formatDate,
} from "../../utils/sale.utils";
import Modal from "../../components/modal/Modal";
import SaleForm from "../../components/SaleForm";
import { salesState } from "../../actions/sale.action";

const Sale = () => {
  const dispatch = useDispatch();
  const sales = salesState("sales");
  const showSaleModal = salesState("showSaleModal");
  const isSalesLoading = salesState("isSalesLoading");
  const [date, setDate] = useState("");

  const filteredSales = sales.filter(({ createdAt }) =>
    date ? formatDate(createdAt) === date : sales
  );

  return (
    <div className="flex sale">
      {showSaleModal && (
        <Modal closeModal={() => handleCloseSaleModal(dispatch)} key="sale">
          <SaleForm />
        </Modal>
      )}

      <button onClick={() => handleShowSaleForm(dispatch)}>Record Sale</button>

      <div>
        <b>Filter Sale: </b>

        <select onChange={(e) => setDate(e.target.value)}>
          <option value="">Select Date</option>
          {sales.map(({ _id, createdAt }) => (
            <option key={_id}>{formatDate(createdAt)}</option>
          ))}
        </select>
      </div>

      <div>
        <table>
          <thead className="heading-row">
            <tr>
              <th>Sn. No.</th>
              <th>Description</th>
              <th>Amount </th>
              <th>Date </th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredSales?.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{formatDate(item.createdAt)}</td>

                  <td>
                    <div className="tableBtn">
                      <span onClick={() => handleEditSaleItem(item, dispatch)}>
                        Edit
                      </span>
                      <span
                        onClick={() => handleDeleteSaleItem(item._id, dispatch)}
                      >
                        Delete
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td className="total">Total :-</td>
              <td>
                <b>{sales?.reduce((acc, { amount }) => acc + amount, 0)}</b>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Sale;
