const initialState = {
  inventories: [],
  isInventoryEdit: false,
  showInventoryForm: false,
  isInventoriesLoading: false,
  inventoryInputs: { name: "", price: "", quantity: "" },
};

const inventoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_INVENTORIES":
      return {
        ...state,
        inventories: payload,
      };

    case "SET_INVENTORY_INPUTS":
      return {
        ...state,
        inventoryInputs: payload,
      };

    case "IS_INVENTORIES_LOADING":
      return {
        ...state,
        isInventoriesLoading: payload,
      };

    case "SHOW_INVENTORY_FORM":
      return {
        ...state,
        showInventoryForm: payload,
      };

    case "SET_IS_INVENTORY_EDIT":
      return {
        ...state,
        isInventoryEdit: payload,
      };

    default:
      return state;
  }
};

export default inventoryReducer;
