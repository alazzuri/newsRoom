import React, { Suspense } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Routes from "./routes";
import { store } from "./store";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Navbar />
            <Routes />
          </Suspense>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
