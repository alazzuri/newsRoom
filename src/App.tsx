//REACT
import React, { Suspense } from "react";

//COMPONENTS
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";

//STYLES
import "./App.css";

//REDUX
import { Provider } from "react-redux";
import { store } from "./store";

//ROUTER
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Suspense fallback={<Spinner />}>
            <Header />
            <Navbar />
            <Routes />
          </Suspense>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
