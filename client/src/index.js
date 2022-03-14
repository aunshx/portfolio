import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import Loader from "./components/layout/Loader";
import Mega from './Mega';

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <Mega />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);