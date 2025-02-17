import "./App.css";
import LeaguesPage from "./components/leagues/LeaguesPage";
import TeamsPage from "./components/teams/TeamsPage";
import PlayersPage from "./components/players/PlayersPage";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import SelectLeague from "./components/selectLeague/SelectLeague";
import { useEffect, useState } from "react";
import { dataStore } from "./store/dataStore";
import { getNews } from "./apis/news";

function App() {
  const location = useLocation();
  const { setNews } = dataStore();
  const [pageTitle, setPageTitle] = useState("");

  const leagues = [
    { name: "Premier League", id: 39 },
    { name: "Bundesliga", id: 78 },
    { name: "La Liga", id: 140 },
    { name: "Ligue 1", id: 61 },
    { name: "Serie A", id: 135 },
  ];
  // uefa.champions
  useEffect(() => {
    async function fetchData() {
      const getNewsData = await getNews("uefa.champions");
      setNews(getNewsData?.articles);
    }
    fetchData();
  }, [setNews]);

  useEffect(() => {
    if (location.pathname.includes("/league")) {
      setPageTitle("League");
    } else if (location.pathname.includes("/team")) {
      setPageTitle("Team");
    } else if (location.pathname.includes("/player")) {
      setPageTitle("Player");
    } else {
      setPageTitle("");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="selectLeague">
        <div className={pageTitle !== "" ? "pageLocation" : ""}>{pageTitle}</div>
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
        <Routes key={location.pathname}>
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
