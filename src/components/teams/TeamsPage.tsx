import { useState } from "react";
import "./teamsPage.css";
import { useEffect } from "react";
import { dataStore } from "../../store/dataStore";
import TeamOverview from "./components/TeamOverview";
import TeamSquad from "./components/TeamSquad";
import TeamTransfer from "./components/TeamTransfer";
import TeamFixtures from "./components/TeamFixtures";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TeamTitle from "./components/TeamTitle";

function TeamsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const { teamId } = useParams();
  const teamIdNum = Number(teamId);
  const { setSelectedTeamId, teamImg } = dataStore();

  useEffect(() => {
    setSelectedTeamId(teamIdNum);
  }, [teamIdNum, setSelectedTeamId]);

  return (
    <>
      <Helmet>
        <title>{`팀 페이지 ( ${teamImg?.team?.name} )`}</title>
      </Helmet>
      <div className="team">
        <TeamTitle />
        <div className="team__fixturesNavigating">
          <button className="team__fixturesNavigating-button" onClick={() => setActiveTab("overview")}>
            개요
          </button>
          <button className="team__fixturesNavigating-button" onClick={() => setActiveTab("squad")}>
            스쿼드
          </button>
          <button className="team__fixturesNavigating-button" onClick={() => setActiveTab("transfer")}>
            이적
          </button>
          <button className="team__fixturesNavigating-button" onClick={() => setActiveTab("fixtures")}>
            경기
          </button>
        </div>
        <div className="team__main">
          {activeTab === "overview" && <TeamOverview />}
          {activeTab === "squad" && <TeamSquad />}
          {activeTab === "transfer" && <TeamTransfer />}
          {activeTab === "fixtures" && <TeamFixtures />}
        </div>
      </div>
    </>
  );
}

export default TeamsPage;
