import React from "react";
import HomePage from "components/pages/home";
import CategoryPage from "components/pages/category";
interface IROUTES {
  path: string;
  component: React.FunctionComponent;
}

export const APP_ROUTES: Array<IROUTES> = [
  { path: "/", component: HomePage },
  { path: "/category/:cat", component: CategoryPage },
];
