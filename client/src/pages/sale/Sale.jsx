import "./sale.css";
import React from "react";
import { useDispatch } from "react-redux";

import {
  handleEditSaleItem,
  handleShowSaleForm,
  handleCloseSaleModal,
  handleDeleteSaleItem,
} from "../../utils/sale.utils";
import Modal from "../../components/modal/Modal";
import SaleForm from "../../components/SaleForm";
import { salesState } from "../../actions/sale.action";

const Sale = () => {
  const dispatch = useDispatch();
  const sales = salesState("sales");
  const showSaleModal = salesState("showSaleModal");
  const isSalesLoading = salesState("isSalesLoading");

  return (
    <div className="flex sale">
      {showSaleModal && (
        <Modal closeModal={() => handleCloseSaleModal(dispatch)} key="sale">
          <SaleForm />
        </Modal>
      )}

      <button onClick={() => handleShowSaleForm(dispatch)}>Record Sale</button>

      <div>
        <table>
          <thead>
            <tr>
              <th>Sn. No.</th>
              <th>Description</th>
              <th>Amount </th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {sales?.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>

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
        </table>
      </div>
    </div>
  );
};

export default Sale;
