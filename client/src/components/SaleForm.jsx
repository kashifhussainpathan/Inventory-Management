import React from "react";

import { useDispatch } from "react-redux";
import { userState } from "../actions/user.action";
import {
  addSale,
  editSale,
  salesState,
  setIsSaleEdit,
  setShowSaleModal,
} from "../actions/sale.action";
import { handleSaleInputs } from "../utils/sale.utils";

const SaleForm = () => {
  const dispatch = useDispatch();
  const user = userState("user");
  const isSaleEdit = salesState("isSaleEdit");
  const saleInputs = salesState("saleInputs");

  const handleAddSaleItemClick = (e) => {
    e.preventDefault();
    if (!isSaleEdit) {
      dispatch(addSale({ ...saleInputs, userId: user._id }));
    } else {
      dispatch(editSale(saleInputs._id, saleInputs));
      dispatch(setIsSaleEdit(false));
    }
    dispatch(setShowSaleModal(false));
  };

  return (
    <div>
      <form onSubmit={handleAddSaleItemClick}>
        <label htmlFor="description">
          Description:
          <input
            type="description"
            id="description"
            name="description"
            value={saleInputs.description}
            placeholder="description"
            onChange={(e) => handleSaleInputs(e, dispatch, saleInputs)}
          />
        </label>

        <label htmlFor="amount">
          Amount:
          <input
            type="text"
            id="amount"
            name="amount"
            value={saleInputs.amount}
            placeholder="amount"
            onChange={(e) => handleSaleInputs(e, dispatch, saleInputs)}
          />
        </label>

        <button type="submit"> {isSaleEdit ? "Edit Sale" : "Add Sale"} </button>
      </form>
    </div>
  );
};

export default SaleForm;
