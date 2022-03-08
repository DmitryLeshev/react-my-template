import React from "react";
import { useRoutes } from "react-router";
import { reflect } from "@effector/reflect";

import { Navigation } from "features/navigation";

import { Footer } from "widget/footer";
import { Leftbar, leftbarService } from "widget/leftbar";
import { Header } from "widget/header";

import { Layout } from "shared/ui";
import { navigation } from "shared/config";

import { ConflictsPage } from "./conflicts";
import { ExamplePage } from "./example";
import { HomePage } from "./home";
import { TerminalsPage } from "./terminals";
import { UsersPage } from "./users";

console.log({ ConflictsPage });

type RoutingProps = {
  leftbarIsHidden: boolean;
};
const RoutingConfig: React.FC<RoutingProps> = ({ leftbarIsHidden }) => {
  const exampleRouting = useRoutes([
    {
      path: "/",
      element: (
        <Layout
          footer={<Footer />}
          header={<Header />}
          leftbar={
            <Leftbar isHidden={leftbarIsHidden}>
              <Navigation />
            </Leftbar>
          }
        />
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          element: <ConflictsPage />,
          path: "conflicts/*",
        },
        {
          element: <ExamplePage />,
          path: "example/*",
        },
        {
          element: <TerminalsPage />,
          path: "terminals/*",
        },
        {
          element: <UsersPage />,
          path: "users/*",
        },
      ],
    },
  ]);
  return exampleRouting;
};

export const Routing = reflect({
  view: RoutingConfig,
  bind: {
    leftbarIsHidden: leftbarService.stores.$isHidden,
  },
});
