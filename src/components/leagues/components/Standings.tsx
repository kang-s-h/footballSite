import "./standings.css";
import { dataStore } from "../../../store/dataStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import StandingsCard from "./standingsComponents/StandingsCard";
function Standings() {
  const { setNavigate } = dataStore();
  const navigateTeamPage = useNavigate();

  useEffect(() => {
    setNavigate(navigateTeamPage);
  }, [navigateTeamPage, setNavigate]);

  return (
    <>
      <StandingsCard isOverview={false} />
    </>
  );
}
export default Standings;
