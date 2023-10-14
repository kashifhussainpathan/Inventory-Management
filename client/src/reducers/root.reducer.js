import { combineReducers } from "redux";
import salesReducer from "./sale.reducer";
import inventoryReducer from "./inventory.reducer";

const rootReducer = combineReducers({
  salesState: salesReducer,
  inventoryState: inventoryReducer,
});

export default rootReducer;
