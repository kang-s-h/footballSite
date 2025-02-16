import { NavigateFunction } from "react-router-dom";

export interface Data {
  selectedLeagueId: number;
  selectedTeamId: number;
  selectedPlayerId: number;
  nextFixtures: object[];
  lastFixtures: object[];
  standings: StandingsData | null;
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
  teamImg: TeamImgType;
  playerStatistics: PlayerStatisticsType | null;
  playerTrophies: object[];
  navigate: NavigateFunction | null;
  setSelectedLeagueId: (league: number) => void;
  fetchLeagueData: () => Promise<void>;
  setDisplayCount: () => void;
  setNews: (newsData: object[]) => void;
  setSelectedTeamId: (team: number) => void;
  fetchTeamData: () => Promise<void>;
  setSelectedPlayerId: (player: number) => void;
  fetchPlayerData: () => Promise<void>;
  setNavigate: (navigate: NavigateFunction) => void;
  moveTeamPage: (id: string) => void;
  movePlayerPage: (id: string) => void;
}

export interface StandingsData {
  standings: StandingType[][];
  league: LeagueType;
  name: string;
  flag: string;
  country: string;
}

export interface StandingType {
  team?: {
    id?: string;
    logo?: string;
    name?: string;
  };
  rank?: number;
  all?: {
    played?: number;
    win?: number;
    draw?: number;
    lose?: number;
    goals?: {
      for?: number;
      against?: number;
    };
  };
  goalsDiff?: number;
  points?: number;
  form?: string;
}

export interface LeagueType {
  id?: number;
  name?: string;
  country?: string;
  logo?: string;
  flag?: string;
}

export interface FixtureType {
  fixture?: {
    id?: number;
    date?: string;
  };
  league?: {
    id?: number;
    name?: string;
    round?: string;
  };
  teams?: {
    home?: {
      id?: string;
      name?: string;
      logo?: string;
    };
    away?: {
      id?: string;
      name?: string;
      logo?: string;
    };
  };
  score?: {
    fulltime?: {
      home?: number;
      away?: number;
    };
  };
}

export interface NewsType {
  headline?: string;
  description?: string;
  published?: string;
  images?: { url: string }[];
}
export interface PlayerStatisticEntry {
  league?: {
    id?: number;
    name?: string;
    country?: string;
    logo?: string;
  };
  team?: {
    id?: number;
    name?: string;
    logo?: string;
  };
  games?: {
    appearences?: number;
    rating?: string;
    position?: string;
    minutes?: number;
  };
  substitutes?: {
    in?: number;
  };
  shots?: {
    total?: number;
    on?: number;
  };
  goals?: {
    total?: number;
    assists?: number;
  };
  penalty?: {
    scored?: number;
  };
  passes?: {
    total?: number;
    key?: number;
  };
  duels?: {
    total?: number;
    won?: number;
  };
  dribbles?: {
    attempts?: number;
    success?: number;
  };
  cards?: {
    yellow?: number;
    red?: number;
  };
}

export interface PlayerStatisticsType {
  player?: {
    id?: number;
    name?: string;
    age?: number;
    nationality?: string;
    photo?: string;
    height?: string;
    weight?: string;
  };
  statistics: PlayerStatisticEntry[];
}

export interface PlayerTrophiesType {
  league?: string;
  country?: string;
  season?: string;
  place?: string;
}

export interface TeamFixtureType {
  fixture?: {
    id?: number;
    date?: string;
  };
  league?: {
    id?: number;
    name?: string;
    round?: string;
    logo?: string;
  };
  teams?: {
    home?: {
      id?: number;
      name?: string;
      logo?: string;
    };
    away?: {
      id?: number;
      name?: string;
      logo?: string;
    };
  };
  score?: {
    fulltime?: {
      home?: number | null;
      away?: number | null;
    };
  };
}

export interface TeamLeagueCupsType {
  league?: {
    logo?: string;
    name?: string;
    country?: string;
  };
}

export interface TeamStatisticsType {
  league?: {
    id?: number;
    name?: string;
    standings?: StandingType[][];
  };
}

export interface PlayerType {
  player?: {
    id?: string;
    photo?: string;
    name?: string;
  };
  statistics?: {
    team?: {
      logo?: string;
      name?: string;
    };
    goals?: {
      total?: number;
      assists?: number;
    };
    cards?: {
      yellow?: number;
      red?: number;
    };
    penalty?: {
      scored?: number;
    };
  }[];
}

export interface TeamSquadType {
  id?: string;
  photo?: string;
  name?: string;
  position?: string;
  number?: string;
}

export interface TeamImgType {
  team?: {
    logo?: string;
    name?: string;
  };
  league?: {
    name?: string;
  };
}

export interface TeamTransferType {
  player?: {
    name?: string;
  };
  transfers?: {
    date?: string;
    type?: string;
    teams?: {
      in?: {
        name?: string;
        logo?: string;
      };
      out?: {
        name?: string;
        logo?: string;
      };
    };
  }[];
}

export interface QueryParams {
  league?: number;
  season?: number;
  team?: number;
  next?: number;
  last?: number;
  timezone?: string;
  id?: number;
  player?: number;
}
