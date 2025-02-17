import { create } from "zustand";
import {
  getStandings,
  getFixtures,
  getTopPlayer,
  getTopAssists,
  getTopYellowCards,
  getTopRedCards,
} from "../apis/league";
import { getTeamImg, getTeamLeagueCup, getTeamSquad, getTeamTransfer } from "../apis/team";
import { getNews } from "../apis/news";
import { getPlayer, getPlayerTrophies } from "../apis/player";
import { persist } from "zustand/middleware";
import { Data, PlayerStatisticsType, TeamImgType } from "./types";

const leagues = [
  { name: "Premier League", id: 39, news: "eng.1" },
  { name: "Bundesliga", id: 78, news: "ger.1" },
  { name: "La Liga", id: 140, news: "esp.1" },
  { name: "Ligue 1", id: 61, news: "fra.1" },
  { name: "Serie A", id: 135, news: "ita.1" },
];

export const dataStore = create(
  persist<Data>(
    (set, get) => ({
      selectedLeagueId: 0,
      selectedTeamId: 0,
      selectedPlayerId: 0,
      nextFixtures: [],
      lastFixtures: [],
      standings: null,
      topPlayerGoals: [],
      topPlayerAssists: [],
      topPlayerYellowCards: [],
      topPlayerRedCards: [],
      news: [],
      displayCount: 6,
      teamLeagueCups: [],
      teamStatistics: [],
      teamFixtures: [],
      teamSquad: [],
      teamTransfer: [],
      teamLastFixtures: [],
      teamNextFixtures: [],
      teamImg: {} as TeamImgType,
      playerStatistics: {} as PlayerStatisticsType,
      playerTrophies: [],
      navigate: null,
      setSelectedLeagueId: (league) => {
        const { selectedLeagueId } = get();
        if (selectedLeagueId === league) return;

        set({ selectedLeagueId: league, displayCount: 6 });
        get().fetchLeagueData();
      },

      fetchLeagueData: async () => {
        try {
          const { selectedLeagueId } = get();
          if (selectedLeagueId === 0) return;

          const league = leagues.find((obj) => obj.id === selectedLeagueId);
          const newsId = league ? league.news : null;

          if (!newsId) return;

          const standingsData = await getStandings({ league: selectedLeagueId, season: 2024 });
          const nextFixturesData = await getFixtures({ league: selectedLeagueId, season: 2024, next: 20 });
          const lastFixturesData = await getFixtures({ league: selectedLeagueId, season: 2024, last: 20 });
          const newsData = await getNews(newsId);

          set({ standings: standingsData[0]?.league || null });
          set({ nextFixtures: nextFixturesData });
          set({ lastFixtures: lastFixturesData });
          set({ news: newsData.articles || [] });

          getTopPlayer({ league: selectedLeagueId, season: 2024 }).then((data) => set({ topPlayerGoals: data }));
          getTopAssists({ league: selectedLeagueId, season: 2024 }).then((data) => set({ topPlayerAssists: data }));
          getTopYellowCards({ league: selectedLeagueId, season: 2024 }).then((data) =>
            set({ topPlayerYellowCards: data })
          );
          getTopRedCards({ league: selectedLeagueId, season: 2024 }).then((data) => set({ topPlayerRedCards: data }));
        } catch (error) {
          console.error("API 요청 중 오류 발생:", error);
        }
      },
      setDisplayCount: () => set((state) => ({ displayCount: state.displayCount + 6 })),
      setNews: (newsData) => set({ news: newsData }),

      setSelectedTeamId: (team) => {
        const { selectedTeamId } = get();
        if (selectedTeamId === team) return;

        set({ selectedTeamId: team });
        get().fetchTeamData();
      },
      fetchTeamData: async () => {
        try {
          const { selectedTeamId, selectedLeagueId } = get();
          if (selectedTeamId === 0) return;

          const teamLeagueCupsData = await getTeamLeagueCup({ season: 2024, team: selectedTeamId });
          const teamStatisticsData = await getStandings({
            league: selectedLeagueId,
            season: 2024,
            team: selectedTeamId,
          });
          const teamFixturesData = await getFixtures({ season: 2024, team: selectedTeamId, last: 10 });

          set({ teamLeagueCups: teamLeagueCupsData });
          set({ teamStatistics: teamStatisticsData });
          set({ teamFixtures: teamFixturesData });

          getTeamSquad({ team: selectedTeamId }).then((data) => set({ teamSquad: data?.[0]?.players || [] }));
          getTeamTransfer({ team: selectedTeamId }).then((data) => set({ teamTransfer: data }));
          getFixtures({ season: 2024, team: selectedTeamId, last: 5 }).then((data) => set({ teamLastFixtures: data }));
          getFixtures({ season: 2024, team: selectedTeamId, next: 5 }).then((data) => set({ teamNextFixtures: data }));
          getTeamImg({ league: selectedLeagueId, season: 2024, team: selectedTeamId }).then((data) =>
            set({ teamImg: data })
          );
        } catch (error) {
          console.error("API 요청 중 오류 발생:", error);
        }
      },

      setSelectedPlayerId: (player) => {
        const { selectedPlayerId } = get();
        if (selectedPlayerId === player) return;

        set({ selectedPlayerId: player });
        get().fetchPlayerData();
      },

      fetchPlayerData: async () => {
        try {
          const { selectedPlayerId } = get();
          if (selectedPlayerId === 0) return;

          const [playerStatisticsData, playerTrophiesData] = await Promise.all([
            getPlayer({ id: selectedPlayerId, season: 2024 }),
            getPlayerTrophies({ player: selectedPlayerId }),
          ]);

          set({ playerStatistics: playerStatisticsData?.[0], playerTrophies: playerTrophiesData });
        } catch (error) {
          console.error("API 요청 중 오류 발생:", error);
        }
      },
      setNavigate: (navigate) => set({ navigate }),
      moveTeamPage: (id) => {
        const { setSelectedTeamId } = get();
        setSelectedTeamId(Number(id));

        const navigateTeamPage = get().navigate;
        if (!navigateTeamPage) {
          console.error("navigate가 설정되지 않았습니다.");
          return;
        }
        navigateTeamPage(`/team/${Number(id)}`);
      },
      movePlayerPage: (id) => {
        const { setSelectedPlayerId } = get();
        setSelectedPlayerId(Number(id));

        const navigatePlayerPage = get().navigate;
        if (!navigatePlayerPage) {
          console.error("navigate가 설정되지 않았습니다.");
          return;
        }
        navigatePlayerPage(`/player/${Number(id)}`);
      },
    }),
    { name: "soccerData" }
  )
);
