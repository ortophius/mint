/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-import-module-exports */
import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";
import { getStore } from "./shared/config/store";
import { ReducersContext } from "./shared/lib/hocs";

const store = getStore();

hydrate(
  <ReducersContext.Provider value={[]}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ReducersContext.Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
