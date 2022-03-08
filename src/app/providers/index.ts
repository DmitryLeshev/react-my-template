import compose from "compose-function";

import { withRouter } from "./with-router";
import { withHelmet } from "./with-helmet";
import { withExample } from "./with-example";
import "./with-theme";

export const withProviders = compose(withRouter, withHelmet, withExample);
