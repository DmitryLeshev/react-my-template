export const navigation = [
  { path: "home", isPrivate: true },
  { path: "users", isPrivate: true },
  { path: "terminals", isPrivate: true },
  { path: "conflicts", isPrivate: true },
  { path: "example", isPrivate: false },
] as const;

export type NavigationConfig = typeof navigation;
