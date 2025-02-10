import { create } from "zustand";

interface data {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const handleStore = create<data>((set) => ({
  activeTab: "overview",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default handleStore;
