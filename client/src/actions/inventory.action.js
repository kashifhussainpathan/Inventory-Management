import axios from "axios";
import { useSelector } from "react-redux";

const API_URL = "http://localhost:4000/inventory";

export const inventoryState = (propertyName) => {
  return useSelector((state) => state.inventoryState[propertyName]);
};

export const setInventories = (inventories) => {
  return {
    type: "SET_INVENTORIES",
    payload: inventories,
  };
};

export const setInventoryInputs = (inputs) => {
  return {
    type: "SET_INVENTORY_INPUTS",
    payload: inputs,
  };
};

export const setInventoriesLoading = (status) => {
  return {
    type: "IS_INVENTORIES_LOADING",
    payload: status,
  };
};

export const setShowInventoryForm = (status) => {
  return {
    type: "SHOW_INVENTORY_FORM",
    payload: status,
  };
};

export const setIsInventoryEdit = (status) => {
  return {
    type: "SET_IS_INVENTORY_EDIT",
    payload: status,
  };
};

export const deleteInventory = (itemId) => async (dispatch) => {
  try {
    dispatch(setInventoriesLoading(true));

    const response = await axios.delete(`${API_URL}/${itemId}`);

    if (response.status === 200) {
      const inventories = response.data.inventories;
      dispatch(setInventories(inventories));
    }
  } catch (error) {
    dispatch(setInventoriesLoading(false));
  } finally {
    dispatch(setInventoriesLoading(false));
  }
};

export const editInventory = (itemId, updatedData) => async (dispatch) => {
  try {
    dispatch(setInventoriesLoading(true));

    const response = await axios.post(`${API_URL}/${itemId}`, updatedData);

    if (response.status === 200) {
      const inventories = response.data.inventories;
      dispatch(setInventories(inventories));
    }
  } catch (error) {
    dispatch(setInventoriesLoading(false));
  } finally {
    dispatch(setInventoriesLoading(false));
  }
};
