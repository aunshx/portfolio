import { Provider } from "react-redux";

import store from "./store";
import App from "./App";

function Mega() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Mega
