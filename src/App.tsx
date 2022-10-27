import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterProvider from "components/providers";
import "./styles.scss";
import Header from "components/layouts/header";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <RouterProvider />
      </BrowserRouter>
    </div>
  );
};

export default App;
