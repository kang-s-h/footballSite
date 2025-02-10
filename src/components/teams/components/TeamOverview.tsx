import "./teamOverview.css";
import { dataStore } from "../../../store/dataStore";

function TeamOverview() {
  const replaceRoundStr = /Regular Season - /;
  const { teamLeagueCups, teamStatistics, teamFixtures } = dataStore();

  return (
    <div className="teamOverview">
      <div className="teamOverview__statistics boxCss">
        <div className="teamOverview__statistics_container">
          {teamStatistics?.[1]?.league?.standings?.[0]?.map((statistic, index) => (
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
      <div className="teamOverview__fixtures boxCss">
        <div className="teamOverview__fixtures-title">최근 경기</div>
        <div className="fixture_container">
          {teamFixtures?.map((fixture, index) => (
            <div key={index} className="teamOverview__fixture_container_box">
              <div className="teamOverview__fixture_container_box-round" key={index}>{`${fixture?.league?.round.replace(
                replaceRoundStr,
                ""
              )}라운드`}</div>
              <img className="teamOverview__fixture_container_box-img" src={fixture?.teams?.home?.logo} />

              <div className="teamOverview__fixture_container_box-score">
                {fixture?.score?.fulltime?.home} - {fixture?.score?.fulltime?.away}
              </div>
              <img className="teamOverview__fixture_container_box-img" src={fixture?.teams?.away?.logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamOverview;
