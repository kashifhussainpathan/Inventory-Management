import {
  deleteSale,
  setSaleInputs,
  setIsSaleEdit,
  setShowSaleModal,
} from "../actions/sale.action";

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

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;
};
