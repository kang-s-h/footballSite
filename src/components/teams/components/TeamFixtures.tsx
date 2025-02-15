import "./teamFixtures.css";
import { dataStore } from "../../../store/dataStore";
import dayjs from "dayjs";
import { regExpStore } from "../../../store/regExpStore";
import Skeleton1250 from "../../skeletons/Skeletons1250";
import { useEffect, useState } from "react";
import TeamFixturesCard from "./teamFixturesComponent/TeamFixturesCard";

function TeamFixtures() {
  // const { teamLastFixtures, teamNextFixtures } = dataStore();
  // const { replaceRoundStr } = regExpStore();
  // // const [teamLastFixtures, setTeamLastFixtures] = useState([]);
  // // const [teamNextFixtures, setTeamNextFixtures] = useState([]);
  // // useEffect(() => {
  // //   async function fetchTeamFixtures() {
  // //     const teamLastFixturesData = await getFixtures({ season: 2024, team: selectedTeamId, last: 5 });
  // //     const teamNextFixturesData = await getFixtures({ season: 2024, team: selectedTeamId, next: 5 });

  // //     setTeamLastFixtures(teamLastFixturesData);
  // //     setTeamNextFixtures(teamNextFixturesData);
  // //   }
  // //   fetchTeamFixtures();
  // // }, [selectedTeamId]);

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 2000);
  // }, [teamLastFixtures]);

  return (
    <>
      <div className="teamFixtures">
        {/* {isLoading ? (
          <Skeleton1250 />
        ) : (
          <>
            <div className="teamFixtures__lastFixtures teamFixtures__boxCss">
              <div className="teamFixtures__lastFixtures-title">최근 경기</div>
              <div>
                <div className="teamFixture_container">
                  {teamLastFixtures?.map((fixture, index) => (
                    <div key={index} className="teamFixture_container_box">
                      <img
                        className="teamFixture_container_box-logoImg"
                        src={fixture?.league?.logo}
                        alt={fixture?.league?.logo}
                      />
                      <div className="teamFixture_container_box-round" key={index}>{`${fixture?.league?.round.replace(
                        replaceRoundStr,
                        ""
                      )}라운드`}</div>
                      <div className="teamFixture_container_box-name left-name" title={fixture?.teams?.home?.name}>
                        {fixture?.teams?.home?.name}
                      </div>
                      <img className="teamFixture_container_box-img" src={fixture?.teams?.home?.logo} />
                      <div className="teamFixture_container_box-score">
                        {fixture?.score?.fulltime?.home} - {fixture?.score?.fulltime?.away}
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
        )} */}
        <TeamFixturesCard title={"last Fixtures"} />
        <TeamFixturesCard title={"next Fixtures"} />
        {/* <div className="teamFixtures__nextFixtures teamFixtures__boxCss">
          <div className="teamFixtures__nextFixtures-title">앞으로 일정</div>
          <div>
            <div className="teamFixture_container">
              {teamNextFixtures?.map((fixture, index) => (
                <div key={index} className="teamFixture_container_box">
                  <img
                    className="teamFixture_container_box-logoImg"
                    src={fixture?.league?.logo}
                    alt={fixture?.league?.logo}
                  />
                  <div className="teamFixture_container_box-round" key={index}>{`${fixture?.league?.round.replace(
                    replaceRoundStr,
                    ""
                  )}라운드`}</div>
                  <div className="teamFixture_container_box-name left-name" title={fixture?.teams?.home?.name}>
                    {fixture?.teams?.home?.name}
                  </div>
                  <img className="teamFixture_container_box-img" src={fixture?.teams?.home?.logo} />
                  <div className="teamFixture_container_box-score">VS</div>
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
          <div></div>
        </div> */}
      </div>
    </>
  );
}

export default TeamFixtures;
