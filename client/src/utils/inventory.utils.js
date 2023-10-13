import {
  deleteInventory,
  setInventoryInputs,
  setIsInventoryEdit,
  setShowInventoryForm,
} from "../actions/inventory.action";

export const handleInventoryInputs = (e, dispatch, inventoriesInputs) => {
  const { name, value } = e.target;
  dispatch(setInventoryInputs({ ...inventoriesInputs, [name]: value }));
};

export const handleDeleteInventoryItem = (itemId, dispatch) => {
  dispatch(deleteInventory(itemId));
};

export const handleEditInventoryItem = (item, dispatch) => {
  dispatch(setShowInventoryForm(true));
  dispatch(setInventoryInputs(item));
  dispatch(setIsInventoryEdit(true));
};

export const handleShowInventoryForm = (dispatch) => {
  dispatch(setShowInventoryForm(true));
  dispatch(setInventoryInputs({ name: "", price: "", quantity: "" }));
};

export const handleCloseModal = (dispatch) => {
  dispatch(setShowInventoryForm(false));
  dispatch(setIsInventoryEdit(false));
};
