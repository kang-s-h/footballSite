import "./overview.css";
import { useEffect, useState } from "react";
import { dataStore } from "../../../store/dataStore";
import { useNavigate } from "react-router-dom";
import FixturesCard from "./fixturesComponents/FixturesCard";
import StandingsCard from "./standingsComponents/StandingsCard";

function Overview() {
  const { standings, moveTeamPage, setNavigate } = dataStore();
  const navigateTeamPage = useNavigate();

  useEffect(() => {
    setNavigate(navigateTeamPage);
  }, [navigateTeamPage, setNavigate]);

  return (
    <>
      <div className="overview">
        <StandingsCard isOverview={true} />
        <FixturesCard title="최근 경기" />
        {/* <div className="league__standings league__boxCss">
          <div className="league__standings-title">랭킹</div>
          <table className="league__standings_table">
            <thead>
              <tr>
                <th>순위</th>
                <th>팀</th>
                <th>경기</th>
                <th>승점</th>
                <th>최근 5경기</th>
              </tr>
            </thead>
            <tbody>
              {standings?.standings?.[0]?.map((team) => (
                <tr key={team?.team?.id}>
                  <td>{team?.rank}</td>
                  <td className="league__standings_table-td" onClick={() => moveTeamPage(team?.team?.id)}>
                    <img src={team?.team?.logo} alt={team?.team?.name} className="league__standings_table-team-logo" />
                    {team?.team?.name}
                  </td>
                  <td>{team?.all?.played}</td>
                  <td>{team?.points}</td>
                  <td>
                    <div className="league__standings_table-form-container">
                      {team?.form?.split("")?.map((form, index) => (
                        <div
                          key={index}
                          className={`league__standings_table-form-container-item ${
                            form === "W"
                              ? "league__standings_table-form-container-win"
                              : form === "D"
                              ? "league__standings_table-form-container-draw"
                              : "league__standings_table-form-container-loss"
                          }`}
                        >
                          {form}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        {/* <div className="league__fixturesResult-title">최근 경기</div>
          <div className="league__fixtures">
            <div className="league__fixture_container">
              {lastFixtures?.map((fixture, index) => (
                <div key={index} className="league__fixture_container_box">
                  <div className="league__fixture_container_box-round" key={index}>{`${fixture?.league?.round.replace(
                    replaceRoundStr,
                    ""
                  )}라운드`}</div>
                  <img className="league__fixture_container_box-img" src={fixture?.teams?.home?.logo} />
                  <div
                    className="league__fixture_container_box-name"
                    title={fixture?.teams?.home?.name}
                    onClick={() => moveTeamPage(fixture?.teams?.home?.id)}
                  >
                    {fixture?.teams?.home?.name}
                  </div>
                  <div className="league__fixture_container_box-score">
                    {fixture?.score?.fulltime?.home} - {fixture?.score?.fulltime?.away}
                  </div>
                  <img className="league__fixture_container_box-img" src={fixture?.teams?.away?.logo} />
                  <div
                    className="league__fixture_container_box-name"
                    title={fixture?.teams?.away?.name}
                    onClick={() => moveTeamPage(fixture?.teams?.away?.id)}
                  >
                    {fixture?.teams?.away?.name}
                  </div>
                  <div className="league__fixture_container_box-date">
                    {dayjs(fixture?.fixture?.date).format("MM-DD HH:mm")}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
      </div>
    </>
  );
}
export default Overview;
