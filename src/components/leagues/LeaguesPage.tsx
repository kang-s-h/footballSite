import { useParams } from "react-router-dom";
import "./leaguesPage.css";
import Overview from "./components/Overview";
import Standings from "./components/Standings";
import Fixtures from "./components/Fixtures";
import Statistics from "./components/Statistics";
import { useEffect, useState } from "react";
import { dataStore } from "../../store/dataStore";
import News1 from "../common/News1";

function LeaguesPage() {
  const { leagueId } = useParams();
  const id = Number(leagueId);
  const { standings, setSelectedLeagueId } = dataStore();

  useEffect(() => {
    setSelectedLeagueId(id);
  }, [id, setSelectedLeagueId]);

  const [activeTab, setActiveTab] = useState("overview"); // 기본 탭 설정

  return (
    <>
      <div className="league">
        <div className="league__title">
          <img className="league__title-img" src={standings?.flag} alt={standings?.flag} />
          <div className="league__title-text">
            <div className="league__title-text-name">{standings?.name}</div>
            <div className="league__title-text-country">{standings?.country}</div>
          </div>
        </div>
        <div className="league__fixturesNavigating">
          <button className="league__fixturesNavigating-button" onClick={() => setActiveTab("overview")}>
            개요
          </button>
          <button className="league__fixturesNavigating-button" onClick={() => setActiveTab("standings")}>
            순위
          </button>
          <button className="league__fixturesNavigating-button" onClick={() => setActiveTab("fixtures")}>
            경기
          </button>
          <button className="league__fixturesNavigating-button" onClick={() => setActiveTab("statistics")}>
            통계
          </button>
          <button className="league__fixturesNavigating-button" onClick={() => setActiveTab("news")}>
            뉴스
          </button>
        </div>
        <div className="league__main">
          {activeTab === "overview" && <Overview />}
          {activeTab === "standings" && <Standings />}
          {activeTab === "fixtures" && <Fixtures />}
          {activeTab === "statistics" && <Statistics />}
          {activeTab === "news" && <News1 />}
        </div>
      </div>
    </>
  );
}
export default LeaguesPage;
