import "./fixtures.css";
import { dataStore } from "../../../store/dataStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FixturesCard from "./fixturesComponents/FixturesCard";
function Fixtures() {
  const { setNavigate } = dataStore();
  const navigateTeamPage = useNavigate();

  useEffect(() => {
    setNavigate(navigateTeamPage);
  }, [setNavigate, navigateTeamPage]);

  return (
    <div className="fixtures">
      <FixturesCard title="최근 경기" />
      <FixturesCard title="다음 경기" />
    </div>
  );
}

export default Fixtures;
