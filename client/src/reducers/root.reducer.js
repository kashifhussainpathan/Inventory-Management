import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import saleReducer from "./sale.reducer";
import inventoryReducer from "./inventory.reducer";

const rootReducer = combineReducers({
  userState: userReducer,
  salesState: saleReducer,
  inventoryState: inventoryReducer,
});

export default rootReducer;
