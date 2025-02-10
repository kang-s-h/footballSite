import "./App.css";
import SelectLeague from "./components/selectLeague/selectLeague";
import LeaguesPage from "./components/leagues/LeaguesPage";
import TeamsPage from "./components/teams/TeamsPage";
import PlayersPage from "./components/players/PlayersPage";
import { Routes, Route } from "react-router-dom";
function App() {
  // const navigate = useNavigate();

  // const goToLeague = () => {
  //   navigate("/league");
  // };

  return (
    <>
      <div className="app__backgroundImg"> </div>
      <div className="app__contents">
        <Routes>
          <Route path="/" element={<SelectLeague />} />
          <Route path="/league" element={<LeaguesPage />} />
          <Route path="/team" element={<TeamsPage />} />
          <Route path="/player" element={<PlayersPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
