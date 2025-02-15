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
  // const { selectedTeamId } = dataStore();

  // const [team, setTeam] = useState([]);
  // const [teamImg, setTeamImg] = useState([]);
  // const [teamSquad, setTeamSquad] = useState([]);
  // const [teamTransfer, setTeamTransfer] = useState([]);

  // const { teamId } = useParams();

  const [activeTab, setActiveTab] = useState("overview");

  const { teamId } = useParams();
  const teamIdNum = Number(teamId);
  const { setSelectedTeamId, teamImg } = dataStore();

  useEffect(() => {
    setSelectedTeamId(teamIdNum);
  }, [teamIdNum, setSelectedTeamId]);

  // useEffect(() => {
  //   async function fetchTeam() {
  //     const teamData = await getTeam({ id: 49 });
  //     setTeam(teamData);
  //   }
  //   fetchTeam();
  // }, []);

  // useEffect(() => {
  //   async function fetchTeamImg() {
  //     const teamImgData = await getTeamImg({ league: 39, season: 2024, team: 49 });
  //     setTeam(teamImgData);
  //   }
  //   fetchTeamImg();
  // }, []);

  // useEffect(() => {
  //   async function fetchTeamSquad() {
  //     const teamSquadData = await getTeamSquad({ team: 49 });
  //     setTeamSquad(teamSquadData?.[0]?.players);
  //   }
  //   fetchTeamSquad();
  // }, []);

  // useEffect(() => {
  //   async function fetchTeamTransfer() {
  //     const teamTransferData = await getTeamTransfer({ team: 49 });
  //     setTeamTransfer(teamTransferData.reverse());
  //   }
  //   fetchTeamTransfer();
  // }, []);

  return (
    <>
      <Helmet>
        <title>{`팀 페이지 ( ${teamImg?.team?.name} )`}</title>
      </Helmet>
      <div className="team">
        {/* <div className="team__title">
          <img className="team__title-img" src={teamImg?.team?.logo} alt={teamImg?.team?.logo} />
          <div className="team__title-text">
            <div className="team__title-text-name">{teamImg?.team?.name}</div>
            <div className="team__title-text-country">{teamImg?.league?.name}</div>
          </div>
        </div> */}
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
