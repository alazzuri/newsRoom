import React, { Suspense } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Routes from "./routes";
import { store } from "./store";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes />
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
