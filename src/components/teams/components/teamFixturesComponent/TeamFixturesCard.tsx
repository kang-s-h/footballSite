import "./teamFixturesCard.css";
import "../../../commonStyle.css";
import { dataStore } from "../../../../store/dataStore";
import { useState, useEffect } from "react";
import { regExpStore } from "../../../../store/regExpStore";
import Skeletons from "../../../skeletons/Skeletons";
import dayjs from "dayjs";
import { TeamFixtureType } from "../../../../store/types";

function TeamFixturesCard({ title }: { title: string }) {
  const { teamLastFixtures, teamNextFixtures } = dataStore();
  const { replaceRoundStr } = regExpStore();
  const [isLoading, setIsLoading] = useState(true);

  const fixturesKind: TeamFixtureType[] = title === "last Fixtures" ? teamLastFixtures : teamNextFixtures;
  const cardTitle = title === "last Fixtures" ? "최근 경기" : "다음 경기";
  const isLastFixtures = title === "last Fixtures" ? true : false;

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [teamLastFixtures, teamNextFixtures]);

  return (
    <>
      {isLoading ? (
        <Skeletons width={1220} height={660} borderRadius={20} margin={20} />
      ) : (
        <>
          <div className="teamFixtures__Fixtures common__boxCss">
            <div className="teamFixtures__Fixtures-title">{cardTitle}</div>
            <div>
              <div className="teamFixture_container">
                {fixturesKind?.map((fixture: TeamFixtureType, index: number) => (
                  <div key={index} className="teamFixture_container_box">
                    <img
                      className="teamFixture_container_box-logoImg"
                      src={fixture?.league?.logo}
                      alt={fixture?.league?.logo}
                    />
                    <div className="teamFixture_container_box-round" key={index}>{`${
                      fixture.league?.round?.replace(replaceRoundStr, "") ?? ""
                    } 라운드`}</div>
                    <div className="teamFixture_container_box-name right-name" title={fixture?.teams?.home?.name}>
                      {fixture?.teams?.home?.name}
                    </div>
                    <img className="teamFixture_container_box-img" src={fixture?.teams?.home?.logo} />
                    <div className="teamFixture_container_box-score">
                      {isLastFixtures
                        ? fixture?.score?.fulltime?.home !== null
                          ? `${fixture?.score?.fulltime?.home} - ${fixture?.score?.fulltime?.away}`
                          : "경기중"
                        : "VS"}
                    </div>
                    <img className="teamFixture_container_box-img" src={fixture?.teams?.away?.logo} />
                    <div className="teamFixture_container_box-name" title={fixture?.teams?.away?.name}>
                      {fixture?.teams?.away?.name}
                    </div>
                    <div className="teamFixture_container_box-date">
                      {dayjs(fixture?.fixture?.date).format("MM-DD HH:mm")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default TeamFixturesCard;
