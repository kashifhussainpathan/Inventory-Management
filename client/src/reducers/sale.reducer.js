const salesInitialState = {
  sales: [],
  isSaleEdit: false,
  isSalesLoading: false,
  showSaleModal: false,
  saleInputs: { description: "", amount: "" },
};

const saleReducer = (state = salesInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_SALES":
      return {
        ...state,
        sales: payload,
      };

    case "SET_SALE_INPUTS_DATA":
      return {
        ...state,
        saleInputs: payload,
      };

    case "IS_SALES_LOADING":
      return {
        ...state,
        isSalesLoading: payload,
      };

    case "SET_SHOW_SALE_MODAL":
      return {
        ...state,
        showSaleModal: payload,
      };

    case "SET_IS_SALE_EDIT":
      return {
        ...state,
        isSaleEdit: payload,
      };

    default:
      return state;
  }
};

export default saleReducer;
