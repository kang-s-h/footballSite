import "./teamFixtures.css";
import { dataStore } from "../../../store/dataStore";
import { useEffect, useState } from "react";
import { getFixtures } from "../../../apis/league";
import dayjs from "dayjs";

function TeamFixtures() {
  const replaceRoundStr = /Regular Season - /;
  const { selectedTeamId, teamLastFixtures, teamNextFixtures } = dataStore();
  // const [teamLastFixtures, setTeamLastFixtures] = useState([]);
  // const [teamNextFixtures, setTeamNextFixtures] = useState([]);
  // useEffect(() => {
  //   async function fetchTeamFixtures() {
  //     const teamLastFixturesData = await getFixtures({ season: 2024, team: selectedTeamId, last: 5 });
  //     const teamNextFixturesData = await getFixtures({ season: 2024, team: selectedTeamId, next: 5 });

  //     setTeamLastFixtures(teamLastFixturesData);
  //     setTeamNextFixtures(teamNextFixturesData);
  //   }
  //   fetchTeamFixtures();
  // }, [selectedTeamId]);

  return (
    <>
      <div className="teamFixtures">
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
        <div className="teamFixtures__nextFixtures teamFixtures__boxCss">
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
        </div>
      </div>
    </>
  );
}

export default TeamFixtures;
