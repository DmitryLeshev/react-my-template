import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Progress } from "shared/ui";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={Progress.Circular}>{component()}</Suspense>
    </BrowserRouter>
  );
