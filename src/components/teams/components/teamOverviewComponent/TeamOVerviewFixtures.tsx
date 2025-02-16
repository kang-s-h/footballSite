import "./teamOverviewFixtures.css";
import "../../../commonStyle.css";
import { dataStore } from "../../../../store/dataStore";
import { regExpStore } from "../../../../store/regExpStore";
import { useState, useEffect } from "react";
import Skeletons from "../../../skeletons/Skeletons";
import { TeamFixtureType } from "../../../../store/types";

function TeamOverviewFixtures() {
  const { teamFixtures } = dataStore();
  const { replaceRoundStr } = regExpStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [teamFixtures]);

  return (
    <>
      {isLoading ? (
        <div className="teamOverview__fixtures">
          <Skeletons width={600} height={600} borderRadius={20} margin={20} />
        </div>
      ) : (
        <div className="teamOverview__fixtures common__boxCss">
          <div className="teamOverview__fixtures-title">최근 경기</div>
          <div className="fixture_container">
            {teamFixtures?.map((fixture: TeamFixtureType, index) => (
              <div key={index} className="teamOverview__fixture_container_box">
                <div className="teamOverview__fixture_container_box-round" key={index}>{`${
                  fixture.league?.round?.replace(replaceRoundStr, "") ?? ""
                } 라운드`}</div>
                <img className="teamOverview__fixture_container_box-img" src={fixture?.teams?.home?.logo} />

                <div className="teamOverview__fixture_container_box-score">
                  {fixture?.score?.fulltime?.home} - {fixture?.score?.fulltime?.away}
                </div>
                <img className="teamOverview__fixture_container_box-img" src={fixture?.teams?.away?.logo} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default TeamOverviewFixtures;
