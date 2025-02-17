import { create } from "zustand";

interface Data {
  replaceRoundStr: RegExp;
  replaceTimeStampStr: RegExp;
}
export const regExpStore = create<Data>(() => ({
  replaceRoundStr: /Regular Season - /,
  replaceTimeStampStr: /[TZ]/g,
}));
