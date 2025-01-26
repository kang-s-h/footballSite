import { create } from "zustand";

interface data {
  selectedLeague: string;
  leaguePageSeason: number;
  setLeague: (league: string) => void;
  setLeaguePageSeasonUp: () => void;
  setLeaguePageSeasonDown: () => void;
}
export const useDataStore = create<data>((set) => ({
  selectedLeague: "",
  leaguePageSeason: 2024,
  setLeague: (league) => set({ selectedLeague: league }),
  setLeaguePageSeasonUp: () => set((state) => ({ leaguePageSeason: state.leaguePageSeason + 1 })),
  setLeaguePageSeasonDown: () => set((state) => ({ leaguePageSeason: state.leaguePageSeason - 1 })),
}));
