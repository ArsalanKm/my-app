import React from "react";
import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "configs/routes";

const RouterProvider: React.FunctionComponent = () => {
  return (
    <Routes>
      {APP_ROUTES.map(({ component: Component, path }) => (
        <Route path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default RouterProvider;
