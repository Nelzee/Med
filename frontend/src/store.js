import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { diseaseReducer } from "./reducers/diseaseReducer";
import {
  deleteAppointmentReducer,
  reserveAppointmentReducer,
} from "./reducers/reserveAppointmentReducer";
import { approveAppointmentReducer } from "./reducers/approveAppointmentReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  diseaseList: diseaseReducer,
  userRegister: userRegisterReducer,
  reserveAppointment: reserveAppointmentReducer,
  approveAppointment: approveAppointmentReducer,
  deleteAppointment: deleteAppointmentReducer,
});
const initialState = {};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
let persistor = persistStore(store);

export { store, persistor };
