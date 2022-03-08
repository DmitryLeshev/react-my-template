import { navigation } from "shared/config";

const links = navigation.filter((_, i) => i !== 0).map((item) => item.path);

export { links };
