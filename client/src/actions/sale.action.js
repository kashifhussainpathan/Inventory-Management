import axios from "axios";
import { useSelector } from "react-redux";

const API_URL = "https://inventory-management-ae62.onrender.com/sale";

export const salesState = (propertyName) =>
  useSelector((state) => state.salesState[propertyName]);

export const setSales = (sales) => {
  return {
    type: "SET_SALES",
    payload: sales,
  };
};

export const setSaleInputs = (inputs) => {
  return {
    type: "SET_SALE_INPUTS_DATA",
    payload: inputs,
  };
};

export const setSalesLoading = (status) => {
  return {
    type: "IS_SALES_LOADING",
    payload: status,
  };
};

export const setShowSaleModal = (status) => {
  return {
    type: "SET_SHOW_SALE_MODAL",
    payload: status,
  };
};

export const setIsSaleEdit = (status) => {
  return {
    type: "SET_IS_SALE_EDIT",
    payload: status,
  };
};

export const getAllSales = (userId) => async (dispatch) => {
  try {
    dispatch(setSalesLoading(true));

    const response = await axios.get(`${API_URL}/${userId}`);

    if (response.status === 200) {
      const sales = response.data.sales;
      dispatch(setSales(sales));
    }
  } catch (error) {
    dispatch(setSalesLoading(false));
  } finally {
    dispatch(setSalesLoading(false));
  }
};

export const addSale = (sale) => async (dispatch) => {
  try {
    dispatch(setSalesLoading(true));

    const response = await axios.post(`${API_URL}`, sale);

    if (response.status === 201) {
      const sales = response.data.sales;
      dispatch(setSales(sales));
      dispatch(setSaleInputs({ description: "", amount: "" }));
    }
  } catch (error) {
    dispatch(setSalesLoading(false));
  } finally {
    dispatch(setSalesLoading(false));
  }
};

export const deleteSale = (itemId) => async (dispatch) => {
  try {
    dispatch(setSalesLoading(true));

    const response = await axios.delete(`${API_URL}/${itemId}`);

    if (response.status === 200) {
      const sales = response.data.sales;
      dispatch(setSales(sales));
    }
  } catch (error) {
    dispatch(setSalesLoading(false));
  } finally {
    dispatch(setSalesLoading(false));
  }
};

export const editSale = (itemId, updatedData) => async (dispatch) => {
  try {
    dispatch(setSalesLoading(true));

    const response = await axios.post(`${API_URL}/${itemId}`, updatedData);

    if (response.status === 200) {
      const sales = response.data.sales;
      dispatch(setSales(sales));
    }
  } catch (error) {
    dispatch(setSalesLoading(false));
  } finally {
    dispatch(setSalesLoading(false));
  }
};
