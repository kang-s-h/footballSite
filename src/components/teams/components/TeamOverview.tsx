import "./teamOverview.css";
import { dataStore } from "../../../store/dataStore";
import { regExpStore } from "../../../store/regExpStore";
import Skeletons1200 from "../../skeletons/Skeletons1200";
import { useState, useEffect } from "react";
import Skeletons600 from "../../skeletons/skeletons600";
import TeamOverviewStatistics from "./teamOverviewComponent/TeamOverviewStatistics";
import TeamLeagueCups from "./teamOverviewComponent/TeamOverviewLeagueCups";
import TeamOverviewFixtures from "./teamOverviewComponent/TeamOVerviewFixtures";

function TeamOverview() {
  // const { teamLeagueCups, teamStatistics, teamFixtures, selectedLeagueId } = dataStore();
  // const { replaceRoundStr } = regExpStore();

  // // const [index, setIndex] = useState<number | null>(null);

  // // useEffect(() => {
  // //   const foundIndex = teamStatistics.findIndex((item) => item?.league?.id === selectedLeagueId);
  // //   setIndex(foundIndex !== -1 ? foundIndex : null);
  // // }, [teamStatistics, selectedLeagueId]);

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 2000);
  // }, [teamStatistics]);

  return (
    <div className="teamOverview">
      <TeamOverviewStatistics />
      {/* {isLoading ? (
        <div className="teamOverview__statistics">
          <Skeletons1200 />
        </div>
      ) : (
        <div className="teamOverview__statistics boxCss">
          <div className="teamOverview__statistics_container">
            {teamStatistics?.[0]?.league?.standings?.[0]?.map((statistic, index) => (
              <div key={index} className="teamOverview__statistics_container-box">
                <div>
                  <div>Rank</div>
                  <div>{statistic?.rank}</div>
                </div>
                <div>
                  <div>played</div>
                  <div>{statistic?.all?.played}</div>
                </div>
                <div>
                  <div>win</div>
                  <div>{statistic?.all?.win}</div>
                </div>
                <div>
                  <div>draw</div>
                  <div>{statistic?.all?.draw}</div>
                </div>
                <div>
                  <div>loss</div>
                  <div>{statistic?.all?.lose}</div>
                </div>
                <div>
                  <div>point</div>
                  <div>{statistic?.points}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )} */}
      <TeamLeagueCups />
      {/* {isLoading ? (
        <div className="teamOverview__leagueCup">
          <Skeletons600 />
        </div>
      ) : (
        <div className="teamOverview__leagueCup boxCss">
          <div className="teamOverview__leagueCup-title">참여 대회</div>
          <div className="teamOverview__leagueCup_container">
            {teamLeagueCups?.map((leagueCup, index) => (
              <div key={index} className="teamOverview__leagueCup_container_box boxCssLeagueCup">
                <img
                  className="teamOverview__leagueCup_container_box-img"
                  src={leagueCup?.league?.logo}
                  alt={leagueCup?.league?.logo}
                />
                <div>{leagueCup?.league?.name}</div>
                <div>{leagueCup?.league?.country}</div>
              </div>
            ))}
          </div>
        </div>
      )} */}
      <TeamOverviewFixtures />
      {/* {isLoading ? (
        <div className="teamOverview__fixtures">
          <Skeletons600 />
        </div>
      ) : (
        <div className="teamOverview__fixtures boxCss">
          <div className="teamOverview__fixtures-title">최근 경기</div>
          <div className="fixture_container">
            {teamFixtures?.map((fixture, index) => (
              <div key={index} className="teamOverview__fixture_container_box">
                <div
                  className="teamOverview__fixture_container_box-round"
                  key={index}
                >{`${fixture?.league?.round.replace(replaceRoundStr, "")}라운드`}</div>
                <img className="teamOverview__fixture_container_box-img" src={fixture?.teams?.home?.logo} />

                <div className="teamOverview__fixture_container_box-score">
                  {fixture?.score?.fulltime?.home} - {fixture?.score?.fulltime?.away}
                </div>
                <img className="teamOverview__fixture_container_box-img" src={fixture?.teams?.away?.logo} />
              </div>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
}

export default TeamOverview;
