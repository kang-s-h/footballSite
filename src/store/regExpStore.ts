import { create } from "zustand";
interface Data {
  replaceRoundStr: RegExp;
}
export const regExpStore = create<Data>(() => ({
  replaceRoundStr: /Regular Season - /,
}));
