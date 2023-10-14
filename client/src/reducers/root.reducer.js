import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import salesReducer from "./sale.reducer";
import inventoryReducer from "./inventory.reducer";

const rootReducer = combineReducers({
  userState: userReducer,
  salesState: salesReducer,
  inventoryState: inventoryReducer,
});

export default rootReducer;
