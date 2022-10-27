import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterProvider from "components/providers";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>
    </div>
  );
};

export default App;
