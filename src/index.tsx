import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";
import "./style.scss";

function renderApp() {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("root") as HTMLElement
  );
}

renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
