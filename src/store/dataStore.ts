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
import { NavigateFunction } from "react-router-dom";
import { persist } from "zustand/middleware";

interface Data {
  selectedLeagueId: number;
  selectedTeamId: number;
  selectedPlayerId: number;
  nextFixtures: object[];
  lastFixtures: object[];
  standings: object[];
  topPlayerGoals: object[];
  topPlayerAssists: object[];
  topPlayerYellowCards: object[];
  topPlayerRedCards: object[];
  news: object[];
  displayCount: number;
  teamLeagueCups: object[];
  teamStatistics: object[];
  teamFixtures: object[];
  teamSquad: object[];
  teamTransfer: object[];
  teamLastFixtures: object[];
  teamNextFixtures: object[];
  teamImg: object[];
  playerStatistics: object[];
  playerTrophies: object[];
  // isOverviewStandings: boolean;
  navigate: NavigateFunction | null;
  setSelectedLeagueId: (league: number) => void;
  fetchLeagueData: () => Promise<void>; //  API 호출 함수 추가
  setDisplayCount: () => void;
  setNews: (newsData: object[]) => void;
  setSelectedTeamId: (team: number) => void;
  fetchTeamData: () => Promise<void>;
  setSelectedPlayerId: (player: number) => void;
  fetchPlayerData: () => Promise<void>;
  setNavigate: (navigate: NavigateFunction) => void;
  moveTeamPage: (id: string) => void;
  movePlayerPage: (id: string) => void;
  // setIsOverviewStandings: (isOverview: boolean) => void;
  // setNextFixtures: () => void;
  // setLastFixtures: () => void;
}

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
      // const navigateTeamPage = useNavigate();
      selectedLeagueId: 0,
      selectedTeamId: 0,
      selectedPlayerId: 0,
      nextFixtures: [],
      lastFixtures: [],
      standings: [],
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
      teamImg: [],
      playerStatistics: [],
      playerTrophies: [],
      navigate: null,
      // isOverviewStandings: true,
      setSelectedLeagueId: (league) => {
        const { selectedLeagueId } = get(); //  현재 리 그 ID 가져오기
        if (selectedLeagueId === league) return; //  기존과 동일하면 API 호출 안 함

        set({ selectedLeagueId: league, displayCount: 6 });
        get().fetchLeagueData(); //  상태가 변경될 때만 API 호출
      },

      fetchLeagueData: async () => {
        try {
          const { selectedLeagueId } = get();
          if (selectedLeagueId === 0) return; // 기본값이면 API 호출 안 함

          const league = leagues.find((obj) => obj.id === selectedLeagueId);
          const newsId = league ? league.news : null;

          if (!newsId) return;
          const [
            standingsData,
            nextFixturesData,
            lastFixturesData,
            topPlayerGoalsData,
            topPlayerAssistsData,
            topPlayerYellowCardsData,
            topPlayerRedCardsData,
            newsData,
          ] = await Promise.all([
            getStandings({ league: selectedLeagueId, season: 2024 }),
            getFixtures({ league: selectedLeagueId, season: 2024, next: 20, timezone: "Asia%2FSeoul" }),
            getFixtures({ league: selectedLeagueId, season: 2024, last: 20, timezone: "Asia%2FSeoul" }),
            getTopPlayer({ league: selectedLeagueId, season: 2024 }),
            getTopAssists({ league: selectedLeagueId, season: 2024 }),
            getTopYellowCards({ league: selectedLeagueId, season: 2024 }),
            getTopRedCards({ league: selectedLeagueId, season: 2024 }),
            getNews(newsId),
          ]);

          set({
            standings: standingsData[0].league,
            nextFixtures: nextFixturesData,
            lastFixtures: lastFixturesData,
            topPlayerGoals: topPlayerGoalsData,
            topPlayerAssists: topPlayerAssistsData,
            topPlayerYellowCards: topPlayerYellowCardsData,
            topPlayerRedCards: topPlayerRedCardsData,
            news: newsData.articles || [],
          });
        } catch (error) {
          console.error("API 요청 중 오류 발생:", error);
        }
      },
      setDisplayCount: () => set((state) => ({ displayCount: state.displayCount + 6 })),
      setNews: (newsData) => set({ news: newsData }),

      setSelectedTeamId: (team) => {
        const { selectedTeamId } = get(); //  현재  ID 가져오기
        if (selectedTeamId === team) return; //  기존과 동일하면 API 호출 안 함

        set({ selectedTeamId: team });
        get().fetchTeamData(); //  상태가 변경될 때만 API 호출
      },
      fetchTeamData: async () => {
        try {
          const { selectedTeamId, selectedLeagueId } = get();
          if (selectedTeamId === 0) return; // 기본값이면 API 호출 안 함

          const [
            teamLeagueCupsData,
            teamStatisticsData,
            teamFixturesData,
            teamSquadData,
            teamTransferData,
            teamLastFixturesData,
            teamNextFixturesData,
            teamImgData,
          ] = await Promise.all([
            getTeamLeagueCup({ season: 2024, team: selectedTeamId }),
            getStandings({ league: selectedLeagueId, season: 2024, team: selectedTeamId }),
            getFixtures({ season: 2024, team: selectedTeamId, last: 10 }),
            getTeamSquad({ team: selectedTeamId }),
            getTeamTransfer({ team: selectedTeamId }),
            getFixtures({ season: 2024, team: selectedTeamId, last: 5 }),
            getFixtures({ season: 2024, team: selectedTeamId, next: 5 }),
            getTeamImg({ league: selectedLeagueId, season: 2024, team: selectedTeamId }),
          ]);

          set({
            teamLeagueCups: teamLeagueCupsData,
            teamStatistics: teamStatisticsData,
            teamFixtures: teamFixturesData,
            teamSquad: teamSquadData?.[0]?.players,
            teamTransfer: teamTransferData,
            teamLastFixtures: teamLastFixturesData,
            teamNextFixtures: teamNextFixturesData,
            teamImg: teamImgData,
          });
        } catch (error) {
          console.error("API 요청 중 오류 발생:", error);
        }
      },
      setSelectedPlayerId: (player) => {
        const { selectedPlayerId } = get(); //  현재  ID 가져오기
        if (selectedPlayerId === player) return; //  기존과 동일하면 API 호출 안 함

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
      // setNextFixtures: () => set((state) => ({ nextFixtures: state.nextFixtures + 20 })),
      // setLastFixtures: () => set((state) => ({ lastFixtures: state.lastFixtures + 20 })),
      // setIsOverviewStandings: () => set((state) => ({ isOverviewStandings: !state.isOverviewStandings })),
    }),
    { name: "soccerData" }
  )
);
