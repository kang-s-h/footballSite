import "./teamOverviewStatistics.css";
import "../../../commonStyle.css";
import { dataStore } from "../../../../store/dataStore";
import { useState, useEffect } from "react";
import Skeletons from "../../../skeletons/Skeletons";
import { TeamStatisticsType } from "../../../../store/types";

function TeamOverviewStatistics() {
  const { teamStatistics }: { teamStatistics: TeamStatisticsType[] | null } = dataStore();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [teamStatistics]);

  return (
    <>
      {isLoading ? (
        <div className="teamOverview__statistics">
          <Skeletons width={1250} height={160} borderRadius={20} margin={20} />
        </div>
      ) : (
        <div className="teamOverview__statistics common__boxCss">
          <div className="teamOverview__statistics_container">
            {teamStatistics?.[0]?.league?.standings?.[0]?.map((statistic, index) => (
              <div key={index} className="teamOverview__statistics_container-box">
                <div>
                  <div>Rank</div>
                  <div>{statistic?.rank}</div>
                </div>
                <div>
                  <div>Played</div>
                  <div>{statistic?.all?.played}</div>
                </div>
                <div>
                  <div>Win</div>
                  <div>{statistic?.all?.win}</div>
                </div>
                <div>
                  <div>Draw</div>
                  <div>{statistic?.all?.draw}</div>
                </div>
                <div>
                  <div>Loss</div>
                  <div>{statistic?.all?.lose}</div>
                </div>
                <div>
                  <div>Point</div>
                  <div>{statistic?.points}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default TeamOverviewStatistics;
