import React from "react";
import { BrowserRouter } from "react-router-dom";
import BottomNavigation from "components/bottom-navigation";
import RouterProvider from "components/providers";
import Header from "components/layouts/header";
import "./styles.scss";

const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <RouterProvider />
        <BottomNavigation />
      </BrowserRouter>
    </div>
  );
};

export default App;
