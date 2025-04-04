import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from "./App";
import Spinner from "./components/shared/layout/Spinner";
import "./index.css";
import store from "./store";

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);