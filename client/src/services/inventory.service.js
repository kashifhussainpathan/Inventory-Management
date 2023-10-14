import axios from "axios";
import {
  setInventories,
  setInventoryInputs,
  setInventoriesLoading,
} from "../actions/inventory.action";

const API_URL = "https://inventory-management-ae62.onrender.com/inventory";

export const getAllInventories = async (userId, dispatch) => {
  try {
    dispatch(setInventoriesLoading(true));

    const response = await axios.get(`${API_URL}/${userId}`);

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

export const addInventory = async (inventory, dispatch) => {
  try {
    dispatch(setInventoriesLoading(true));

    const response = await axios.post(`${API_URL}`, inventory);

    if (response.status === 201) {
      const inventories = response.data.inventories;
      dispatch(setInventories(inventories));
      dispatch(setInventoryInputs({ name: "", price: "", quantity: "" }));
    }
  } catch (error) {
    dispatch(setInventoriesLoading(false));
  } finally {
    dispatch(setInventoriesLoading(false));
  }
};
