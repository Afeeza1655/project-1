import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import RootReducer from "../Reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";



export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
