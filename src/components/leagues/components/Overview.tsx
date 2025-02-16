import "./overview.css";
import { useEffect } from "react";
import { dataStore } from "../../../store/dataStore";
import { useNavigate } from "react-router-dom";
import FixturesCard from "./fixturesComponents/FixturesCard";
import StandingsCard from "./standingsComponents/StandingsCard";

function Overview() {
  const { setNavigate } = dataStore();
  const navigateTeamPage = useNavigate();

  useEffect(() => {
    setNavigate(navigateTeamPage);
  }, [navigateTeamPage, setNavigate]);

  return (
    <>
      <div className="overview">
        <StandingsCard isOverview={true} />
        <FixturesCard title="최근 경기" />
      </div>
    </>
  );
}
export default Overview;
