import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import Spinner from "./components/shared/layout/Spinner";
import Mega from './Mega';
import "./index.css"

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <React.StrictMode>
      <Mega />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);