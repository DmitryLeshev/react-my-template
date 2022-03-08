import { reflect } from "@effector/reflect";

import { links } from "./service";
import { Navigation as View } from "./ui";

const Navigation = reflect({
  view: View,
  bind: { links },
});

export { Navigation };
