import React from "react";
import HomePage from "components/pages/home";

interface IROUTES {
  path: string;
  component: React.FunctionComponent;
}

export const APP_ROUTES: Array<IROUTES> = [{ path: "/", component: HomePage }];
