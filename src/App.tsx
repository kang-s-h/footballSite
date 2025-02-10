import "./App.css";
import LeaguesPage from "./components/leagues/LeaguesPage";
import TeamsPage from "./components/teams/TeamsPage";
import PlayersPage from "./components/players/PlayersPage";
import { Routes, Route, Link } from "react-router-dom";
import SelectLeague from "./components/selectLeague/SelectLeague";
import { useEffect } from "react";
import { dataStore } from "./store/dataStore";
import { getNews } from "./apis/news";
function App() {
  const leagues = [
    { name: "Premier League", id: 39 },
    { name: "Bundesliga", id: 78 },
    { name: "La Liga", id: 140 },
    { name: "Ligue 1", id: 61 },
    { name: "Serie A", id: 135 },
  ];

  const { setNews } = dataStore();

  useEffect(() => {
    async function fetchData() {
      const getNewsData = await getNews("eng.1");
      setNews(getNewsData?.articles);
    }
    fetchData();
  }, [setNews]);

  return (
    <>
      <div className="selectLeague">
        <div className="selectLeague_navigateBar">
          League
          <div className="dropdown">
            {leagues.map((league, index) => (
              <Link key={index} to={`/league/${league.id}`} className="dropdown-item">
                {league.name}
              </Link>
            ))}
          </div>
        </div>
        <Routes>
          <Route path="/" element={<SelectLeague />} />
          <Route path="/league/:leagueId" element={<LeaguesPage />} />
          <Route path="/team/:teamId" element={<TeamsPage />} />
          <Route path="/player/:playerId" element={<PlayersPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
