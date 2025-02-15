import "./fixturesCard.css";
import { dataStore } from "../../../../store/dataStore";
import dayjs from "dayjs";
import { regExpStore } from "../../../../store/regExpStore";
import { useEffect, useState } from "react";
import Skeletons from "../../../skeletons/Skeletons";
function FixturesCard({ title }: { title: string }) {
  const { lastFixtures, nextFixtures, moveTeamPage } = dataStore();
  const { replaceRoundStr } = regExpStore();

  const fixturesKind = title === "최근 경기" ? lastFixtures : nextFixtures;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [fixturesKind]);

  return (
    <>
      {isLoading ? (
        <Skeletons width={600} height={600} margin={20} borderRadius={20} />
      ) : (
        <div className="fixtures__lastFixtures fixtures__boxCss overview_fixturesResult">
          <div className="fixtures__Fixtures-title">{title}</div>
          <div className="fixtures">
            <div className="fixture_container">
              {fixturesKind?.map((fixture, index) => (
                <div key={index} className="fixture_container_box">
                  <div className="fixture_container_box-round" key={index}>{`${fixture?.league?.round.replace(
                    replaceRoundStr,
                    ""
                  )}라운드`}</div>
                  <img className="fixture_container_box-img" src={fixture?.teams?.home?.logo} />
                  <div
                    className="fixture_container_box-name"
                    title={fixture?.teams?.home?.name}
                    onClick={() => moveTeamPage(fixture?.teams?.home?.id)}
                  >
                    {fixture?.teams?.home?.name}
                  </div>
                  <div className="fixture_container_box-score">
                    {fixture?.score?.fulltime?.home} - {fixture?.score?.fulltime?.away}
                  </div>
                  <img className="fixture_container_box-img" src={fixture?.teams?.away?.logo} />
                  <div
                    className="fixture_container_box-name"
                    title={fixture?.teams?.away?.name}
                    onClick={() => moveTeamPage(fixture?.teams?.away?.id)}
                  >
                    {fixture?.teams?.away?.name}
                  </div>
                  <div className="fixture_container_box-date">
                    {dayjs(fixture?.fixture?.date).format("MM-DD HH:mm")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FixturesCard;
