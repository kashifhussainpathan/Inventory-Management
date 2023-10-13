import {
  deleteSale,
  setSaleInputs,
  setIsSaleEdit,
  setShowSaleModal,
} from "../actions/Sale.action";

export const handleSaleInputs = (e, dispatch, saleInputs) => {
  const { name, value } = e.target;
  dispatch(setSaleInputs({ ...saleInputs, [name]: value }));
};

export const handleDeleteSaleItem = (itemId, dispatch) => {
  dispatch(deleteSale(itemId));
};

export const handleEditSaleItem = (item, dispatch) => {
  dispatch(setShowSaleModal(true));
  dispatch(setSaleInputs(item));
  dispatch(setIsSaleEdit(true));
};

export const handleShowSaleForm = (dispatch) => {
  dispatch(setShowSaleModal(true));
  dispatch(setSaleInputs({ name: "", price: "", quantity: "" }));
};

export const handleCloseSaleModal = (dispatch) => {
  dispatch(setShowSaleModal(false));
  dispatch(setIsSaleEdit(false));
};
