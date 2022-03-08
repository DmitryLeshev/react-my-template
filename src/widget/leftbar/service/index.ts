import { createEvent, createStore } from "effector";

const toggle = createEvent();

const $isHidden = createStore<boolean>(false);
$isHidden.on(toggle, (prev) => !prev);

setInterval(() => {
  toggle();
}, 5000);

export const stores = { $isHidden };
export const actions = { toggle };
