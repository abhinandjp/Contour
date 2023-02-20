import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store = {store}>
    <PersistGate persistor={persistor} >
      <App />
      <ToastContainer/>
    </PersistGate>
  </Provider>
);
