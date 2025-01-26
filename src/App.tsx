import "./App.css";
import SelectLeague from "./components/selectLeague/selectLeague";
import LeaguesPage from "./components/leagues/LeaguesPage";
import { getStandings } from "./apis/league";
function App() {
  return (
    <>
      <div className="backgroundImg"></div>
      <div className="contents">
        {/* <SelectLeague /> */}
        <LeaguesPage />
      </div>
    </>
  );
}

export default App;
