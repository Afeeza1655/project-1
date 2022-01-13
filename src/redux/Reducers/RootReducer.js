import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ReducerFunction from "./AuthReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["data"],
};

const rootReducer = combineReducers({
  data: ReducerFunction,
});

export default persistReducer(persistConfig, rootReducer);
