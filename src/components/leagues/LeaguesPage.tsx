import { useParams } from "react-router-dom";
import "./leaguesPage.css";
import Overview from "./components/Overview";
import Standings from "./components/Standings";
import Fixtures from "./components/Fixtures";
import Statistics from "./components/Statistics";
import { useEffect, useState } from "react";
import { dataStore } from "../../store/dataStore";
import News from "../common/News";
import { Helmet } from "react-helmet-async";
import LeagueTitle from "./components/LeagueTitle";

function LeaguesPage() {
  const { leagueId } = useParams();
  const id = Number(leagueId);
  const { standings, setSelectedLeagueId } = dataStore();

  useEffect(() => {
    setSelectedLeagueId(id);
  }, [id, setSelectedLeagueId]);

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <Helmet>
        <title>{`리그 페이지 ( ${standings?.name} )`}</title>
        <meta />
      </Helmet>
      <div className="league">
        {/* <div className="league__title">
          <img className="league__title-img" src={standings?.flag} alt={standings?.flag} />
          <div className="league__title-text">
            <div className="league__title-text-name">{standings?.name}</div>
            <div className="league__title-text-country">{standings?.country}</div>
          </div>
        </div> */}
        <LeagueTitle />
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
          {activeTab === "news" && <News />}
        </div>
      </div>
    </>
  );
}
export default LeaguesPage;
