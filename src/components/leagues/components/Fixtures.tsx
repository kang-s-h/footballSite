import "./fixtures.css";
import dayjs from "dayjs";
import { dataStore } from "../../../store/dataStore";
function Fixtures() {
  const replaceRoundStr = /Regular Season - /;

  const { lastFixtures, nextFixtures } = dataStore();
  return (
    <div className="fixtures">
      <div className="fixtures__lastFixtures fixtures__boxCss">
        <div className="fixtures__lastFixtures-title">최근 경기</div>
        <div className="fixtures">
          <div className="fixture_container">
            {lastFixtures?.map((fixture, index) => (
              <div key={index} className="fixture_container_box">
                <div className="fixture_container_box-round" key={index}>{`${fixture?.league?.round.replace(
                  replaceRoundStr,
                  ""
                )}라운드`}</div>
                <img className="fixture_container_box-img" src={fixture?.teams?.home?.logo} />
                <div className="fixture_container_box-name" title={fixture?.teams?.home?.name}>
                  {fixture?.teams?.home?.name}
                </div>
                <div className="fixture_container_box-score">
                  {fixture?.score?.fulltime?.home} - {fixture?.score?.fulltime?.away}
                </div>
                <img className="fixture_container_box-img" src={fixture?.teams?.away?.logo} />
                <div className="fixture_container_box-name" title={fixture?.teams?.away?.name}>
                  {fixture?.teams?.away?.name}
                </div>
                <div className="fixture_container_box-date">{dayjs(fixture?.fixture?.date).format("MM-DD HH:mm")}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixtures__nextFixtures fixtures__boxCss">
        <div className="fixtures__nextFixtures-title">앞으로 일정</div>
        <div className="fixtures">
          <div className="fixture_container">
            {nextFixtures?.map((fixture, index) => (
              <div key={index} className="fixture_container_box">
                <div className="fixture_container_box-round" key={index}>{`${fixture?.league?.round.replace(
                  replaceRoundStr,
                  ""
                )}라운드`}</div>
                <img className="fixture_container_box-img" src={fixture?.teams?.home?.logo} />
                <div className="fixture_container_box-name" title={fixture?.teams?.home?.name}>
                  {fixture?.teams?.home?.name}
                </div>
                <div className="fixture_container_box-score">
                  {fixture?.score?.fulltime?.home} - {fixture?.score?.fulltime?.away}
                </div>
                <img className="fixture_container_box-img" src={fixture?.teams?.away?.logo} />
                <div className="fixture_container_box-name" title={fixture?.teams?.away?.name}>
                  {fixture?.teams?.away?.name}
                </div>
                <div className="fixture_container_box-date">{dayjs(fixture?.fixture?.date).format("MM-DD HH:mm")}</div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Fixtures;
