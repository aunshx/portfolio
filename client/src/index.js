import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import Spinner from "./components/common/layout/Spinner";
import Mega from './Mega';

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <React.StrictMode>
      <Mega />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);